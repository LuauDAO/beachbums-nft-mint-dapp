import { useEffect, useState } from 'react';
import { useWeb3React } from '@web3-react/core';
import { ethers } from 'ethers';

import TokenAbi from '../config/abis/NounsToken.json';
import DescriptorAbi from "../config/abis/NounsDescriptor.json";
import SeederAbi from "../config/abis/NounsSeeder.json";
import rpcConfig from '../config/rpcConfig';
import projectConfig from '../config/projectConfig';
import { useEthereumProvider } from '../hooks/useEthereumProvider';

export default function Inventory() {
  const { account, active, chainId } = useWeb3React();
  const { ethereumProvider } = useEthereumProvider();

  const [tokenIds, setTokenIds] = useState<number[]>([]);
  const [svgs, setSvgs] = useState<string[]>([]);

  async function fetchInventory() {
      if(ethereumProvider) {
        const web3Provider = new ethers.providers.Web3Provider(ethereumProvider);
        const signer = web3Provider.getSigner();
        const tokenContract = new ethers.Contract(projectConfig.contractAddress.nounsToken, TokenAbi, signer);
        const seederContract = new ethers.Contract(projectConfig.contractAddress.seederContract, SeederAbi, signer);
        const descriptorContract = new ethers.Contract(projectConfig.contractAddress.descriptorContract, DescriptorAbi, signer);
        const balance = await tokenContract.balanceOf(account);
        let ids = [];
        let svgs = [];
        for(let i = 0; i < balance; i++) {
            const tokenId = (await tokenContract.tokenOfOwnerByIndex(account, i)).toNumber();
            const seed = await tokenContract.seeds(tokenId);
            const svg = await descriptorContract.generateSVGImage(seed);

            ids.push(tokenId);
            svgs.push(Buffer.from(svg, 'base64').toString());
        }
        setTokenIds(ids);
        setSvgs(svgs);
        console.log(svgs);
      }
  }

  useEffect(() => {
    if(active && ethereumProvider) {
        fetchInventory();
    }
  }, [active, chainId]);

  return (
    <>
        {svgs.map((img, index) => <div key={index} dangerouslySetInnerHTML={{ __html: img }}></div>)}
    </>
  );
}

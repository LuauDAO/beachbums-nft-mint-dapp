import { useEffect, useState } from 'react';
import { useWeb3React } from '@web3-react/core';
import { ethers } from 'ethers';

import TokenAbi from '../config/abis/NounsToken.json';
import DescriptorAbi from "../config/abis/NounsDescriptor.json";
import SeederAbi from "../config/abis/NounsSeeder.json";
import rpcConfig from '../config/rpcConfig';
import projectConfig from '../config/projectConfig';
import { useEthereumProvider } from '../hooks/useEthereumProvider';
import Container from './Container';

export default function Inventory() {
  const { account, active, chainId } = useWeb3React();
  const { ethereumProvider } = useEthereumProvider();
  const [loaded, setLoaded] = useState(false);
  const [tokenIds, setTokenIds] = useState<number[]>([]);
  const [svgs, setSvgs] = useState<string[]>([]);
  const [nfts, setNFTs] = useState<any[]>([]);

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
        let nfts = [];
        if (balance > 0) {
          console.log("Loading NFTs...")
        }
        for(let i = 0; i < balance; i++) {
            const tokenId = (await tokenContract.tokenOfOwnerByIndex(account, i)).toNumber();
            const seed = await tokenContract.seeds(tokenId);
            const _svg = await descriptorContract.generateSVGImage(seed);

            ids.push(tokenId);
            let svg = Buffer.from(_svg, 'base64').toString();
            svgs.push(svg);

            let nft = { img: svg, id: tokenId };
            nfts.push(nft);
        }
        setTokenIds(ids);
        setSvgs(svgs);
        setNFTs(nfts);
        setLoaded(true);
      }
  }

  useEffect(() => {
    if(active && ethereumProvider) {
        fetchInventory();
    }
  }, [active, chainId]);

  const styles = {
    bums: {
      display: 'inline-grid',
      gridTemplateColumns: "repeat(3, 1fr)",
      justifyContent: 'space-between',
      gap: '0.5rem',
    },
    token: {
      color: "rgb(236 72 153 / var(--tw-text-opacity))",
      padding: "0.75rem 0.25rem",
    }
  }


  const bums = (
        <div style={styles.bums}>
          {
        nfts.map(nft => <div key={nft.id} >
              <span style={styles.token}>ID: {nft.id}</span>
              <div className={"bum"} dangerouslySetInnerHTML={{ __html: nft.img }}></div>
            </div>
            )
          }
        </div>
  );

  const _loading = () => {
    if (!loaded) {
      return (<span> Loading...</span>)
    }
   }

  return (
    <>
      <h2 className="text-4xl mb-4">Inventory {_loading()}</h2>
      {bums}
    </>
  )
}

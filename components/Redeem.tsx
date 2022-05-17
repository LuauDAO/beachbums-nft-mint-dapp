import { useEffect, useState } from 'react';
import { useWeb3React } from '@web3-react/core';
import { ethers } from 'ethers';
import { IconContext } from 'react-icons';
import { FaMinusCircle, FaPlusCircle } from 'react-icons/fa';

import ABI from '../config/abi.json';
import rpcConfig from '../config/rpcConfig';
import projectConfig from '../config/projectConfig';
import { useEthereumProvider } from '../hooks/useEthereumProvider';

export default function Redeem() {
  const { account, active, chainId } = useWeb3React();
  const { ethereumProvider } = useEthereumProvider();

  const [message, setMessage] = useState('');
  const [connErrMsg, setConnErrMsg] = useState('');
  const [totalSupply, setTotalSupply] = useState('?');
  const [isPending, setIsPending] = useState(false);
  const [isRedeeming, setIsRedeeming] = useState(false);
  const [redeemAmount, setRedeemAmount] = useState(1);

  async function redeemNFTs() {
    if (account && ethereumProvider) {
      setMessage('');
      setIsPending(true);
      debugger;
      console.log('button clicked');
      try {
        const web3Provider = new ethers.providers.Web3Provider(ethereumProvider);
        console.log(web3Provider);
        const signer = web3Provider.getSigner();
        console.log(signer);
        const contract = new ethers.Contract(projectConfig.contractAddress, ABI, signer);
        const testaddress = account; // TODO Needs to be set to wallet address

        const setRedeemerAdd = await contract.setRedeemer(testaddress);
        console.log(setRedeemerAdd);
        const transaction = await contract.redeemTest();
        setIsPending(false);
        setIsRedeeming(true);
        await transaction.wait();
        setIsRedeeming(false);
        setMessage(
          `Yay! ${redeemAmount} ${projectConfig.nftSymbol} successfully sent to ${account.substring(
            0,
            6
          )}...${account.substring(account.length - 4)}`
        );
      } catch (error) {
        setIsPending(false);
      }
    }
  }

  useEffect(() => {
    if (!active) {
      setConnErrMsg('Not connected to your wallet.');
    } else {
      if (chainId !== projectConfig.chainId) {
        setConnErrMsg(`Change the network to ${projectConfig.networkName}.`);
      } else {
        setConnErrMsg('');
      }
    }
  }, [active, chainId]);

  return (
    <>
      <h2 className="text-4xl mb-4">Redeem</h2>

      <div
        className="bg-gray-800 border border-t-red-300 border-r-blue-300 border-b-green-300 border-l-yellow-300 rounded p-8 space-y-4"
        style={{ backgroundColor: '#5e42a6' }}
      >
        <div className="flex justify-center">
          <p className="text-xl">Check if you are eligible to redeem a Beach Bum</p>
        </div>

        <div className="flex justify-center">
          {active && !connErrMsg ? (
            <>
              {isPending || isRedeeming ? (
                <button
                  type="button"
                  className="flex justify-center items-center rounded px-4 py-2 bg-red-700 font-bold w-40 cursor-not-allowed"
                  disabled
                >
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  {isPending && 'Pending'}
                  {isRedeeming && 'Redeeming'}
                  {!isPending && !isRedeeming && 'Processing'}
                </button>
              ) : (
                <button
                  type="button"
                  className={`rounded px-4 py-2 bg-blue-700 hover:bg-blue-600 font-bold w-40`}
                  onClick={redeemNFTs}
                >
                  Redeem
                </button>
              )}
            </>
          ) : (
            <button
              type="button"
              className={`rounded px-4 py-2 bg-gray-700 font-bold w-40 cursor-not-allowed`}
              disabled={true}
              onClick={redeemNFTs}
            >
              Redeem
            </button>
          )}
        </div>

        {message && <div className="text-green-500 text-center">{message}</div>}
        {connErrMsg && <div className="text-red-500 text-center">{connErrMsg}</div>}
      </div>

      <div className="text-gray-400 mt-2">
        Please make sure you are connected to the correct address and the correct network (
        {projectConfig.networkName}) before purchasing. The operation cannot be undone after
        purchase.
      </div>
    </>
  );
}

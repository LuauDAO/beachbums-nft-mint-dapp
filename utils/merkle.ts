import { MerkleTree } from 'merkletreejs';
import keccak256 from 'keccak256';
import { ethers } from 'ethers';
import projectConfig from '../config/projectConfig';
import axios from 'axios';

function hashAddress(account: string): Buffer {
  return Buffer.from(
    ethers.utils.solidityKeccak256(['address'], [account]).slice(2),
    'hex'
  );
}

export async function fetchRecipients(): Promise<string[]> {
  try {
    const res = await axios({
      method: 'get',
      url: projectConfig.recipientList,
      responseType: 'json',
    });
    if (res.status == 200) {
      return res.data;
    } else {
      throw new Error('Failed to fetch tree');
    }
  } catch (e) {
    console.log('failed to fetch recipients');
    throw e;
  }
}

export function getMerkleTree(leafs: string[]): MerkleTree {
  leafs.forEach((a) => {
    if (!ethers.utils.isAddress(a))
      throw new Error(`Merkle Recipients: ${a} is an invalid account`);
  });

  leafs = leafs.map((account) => ethers.utils.getAddress(account));

  return new MerkleTree(
    leafs.map((account) => hashAddress(account)),
    keccak256,
    { sortPairs: true }
  );
}

export function computeProof(tree: MerkleTree, address: string): string[] {
  return tree.getHexProof(hashAddress(ethers.utils.getAddress(address)));
}

import { MerkleTree } from 'merkletreejs';
import keccak256 from 'keccak256';
import config_recipients from '../config/recipients.json';
import { ethers } from 'ethers';

function hashAddress(account: string): Buffer {
  return Buffer.from(
    ethers.utils.solidityKeccak256(['address'], [account]).slice(2),
    'hex'
  );
}

export function getMerkleTree(recipients?: string[]): MerkleTree {
  const leafs =
    typeof recipients == 'undefined' ? config_recipients : recipients;

  leafs.forEach((a) => {
    if (!ethers.utils.isAddress(a))
      throw new Error(`Merkle Recipients: ${a} is an invalid account`);
  });

  return new MerkleTree(
    leafs.map((account) => hashAddress(account)),
    keccak256
  );
}

export function computeProof(tree: MerkleTree, address: string): string[] {
  return tree.getHexProof(hashAddress(address));
}

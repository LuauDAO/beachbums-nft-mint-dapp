import { MerkleTree } from 'merkletreejs';
import keccak256 from 'keccak256';
import recipients from '../config/recipients.json';
import { ethers } from 'ethers';

function hashAddress(account: string): Buffer {
  return Buffer.from(
    ethers.utils.solidityKeccak256(['address'], [account]).slice(2),
    'hex'
  );
}

export function getMerkleTree(): MerkleTree {
  recipients.forEach((a) => {
    if (!ethers.utils.isAddress(a))
      throw `Merkle Recipients: ${a} is an invalid account`;
  });

  return new MerkleTree(recipients.map(hashAddress), keccak256, {
    sortPairs: true,
  });
}

export function computeProof(tree: MerkleTree, address: string): string[] {
  return tree.getHexProof(hashAddress(address));
}

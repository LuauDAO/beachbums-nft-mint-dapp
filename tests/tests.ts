import { getMerkleTree, computeProof } from '../utils/merkle';
import 'mocha';
import { expect } from 'chai';

describe('Merkle Tree', () => {
  describe('getMerkleTree', () => {
    it('should return merkle tree from valid list of accounts', () => {
      const tree = getMerkleTree([
        '0x00000000219ab540356cBB839Cbe05303d7705Fa',
        '0x077FeEaAAEA7B759d7e800A14322f945f8003685',
      ]);
      expect(tree.getLeafCount()).to.eq(2);
    });

    it('should throw trying to create merkle tree from invalid list of accounts', () => {
      expect(() => getMerkleTree(['0x21', 'foobar'])).to.throw();
    });
  });

  describe('computeProof', () => {
    it('should compute proof for valid account', () => {
      const tree = getMerkleTree([
        '0x077FeEaAAEA7B759d7e800A14322f945f8003685',
      ]);
      computeProof(tree, '0x077FeEaAAEA7B759d7e800A14322f945f8003685');
    });
    it('should return empty list for invalid account', () => {
      const tree = getMerkleTree([
        '0x00000000219ab540356cBB839Cbe05303d7705Fa',
      ]);
      const proof = computeProof(
        tree,
        '0x077FeEaAAEA7B759d7e800A14322f945f8003685'
      );
      expect(proof.length).to.eq(0);
    });
  });
});

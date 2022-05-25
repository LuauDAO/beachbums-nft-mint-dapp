const projectConfig = {
  nftName: 'BeachBums',
  nftCreator: 'Luau DAO',
  nftSymbol: 'BUMS',
  maxSupply: 700,
  maxMintAmountPerTxn: 10,
  mintCost: process.env.NODE_ENV === 'production' ? 0.1 : 0.1,

  networkName: process.env.NODE_ENV === 'production' ? 'Ethereum mainnet' : 'hardhat',

  chainName: 'ETH',

  chainId: process.env.NODE_ENV === 'production' ? 1 : 31337,

  siteDomain: 'hodlercon.com',

  siteUrl:
    process.env.NODE_ENV === 'production'
      ? `https://hodlercon.com`
      : 'http://localhost:3000',

  twitterUsername: '@Hodlercon',

  twitterUrl: 'https://twitter.com/hodlercon',

  discordUrl: 'https://discord.gg/XS4bnxVawj',

  openseaCollectionUrl:
    process.env.NODE_ENV === 'production'
      ? 'https://opensea.io/collection/hodlercon-beachbums'
      : 'https://testnets.opensea.io/collection/hodlercon-beachbums',

  contractAddress: {
    nounsToken:
      process.env.NODE_ENV === 'production'
        ? '0xF86696F8051cefA4Bacaba1DE63D7bE58FeC505e'
        : '0xdc64a140aa3e981100a9beca4e685f962f0cf6c9',
    seederContract:
      process.env.NODE_ENV === 'production'
        ? '0xf471077fd111bcCBBe4fa57E212bb5770693267D'
        : '0xcf7ed3acca5a467e9e704c703e8d87f634fb0fc9',
    descriptorContract:
      process.env.NODE_ENV === 'production'
        ? '0xC1801078B577C7dF4b34853Ec2834ee61EF5Bc61'
        : '0x9fe46736679d2d9a65f0992f2272de9f3c7fa6e0',
  },

  scanUrl:
    process.env.NODE_ENV === 'production'
      ? 'https://etherscan.io/address/0xF86696F8051cefA4Bacaba1DE63D7bE58FeC505e'
      : 'https://rinkeby.etherscan.io/address/0xdc64a140aa3e981100a9beca4e685f962f0cf6c9',
};

export default projectConfig;

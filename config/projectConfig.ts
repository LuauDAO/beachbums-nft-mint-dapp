const projectConfig = {
  nftName: 'Beach Bums',
  nftSymbol: 'BUMS',
  maxSupply: 700,
  maxMintAmountPerTxn: 10,
  mintCost: process.env.NODE_ENV === 'production' ? 100 : 0.10,

  networkName:
    process.env.NODE_ENV === 'production'
      ? ''
      : 'mainnet',

  chainName: 'ETH',

  chainId: process.env.NODE_ENV === 'production' ? 1 : 31337,

  siteDomain: 'www.hodlercon.com',

  siteUrl:
    process.env.NODE_ENV === 'production'
      ? `https://your_site_domain` // Todo! Update this - AHE
      : 'http://localhost:3000',

  twitterUsername: '@Hodlercon',

  twitterUrl: 'https://twitter.com/hodlercon',

  discordUrl: 'https://discord.gg/DaPhpKrU',

  openseaCollectionUrl:
    process.env.NODE_ENV === 'production'
      ? 'https://opensea.io/collection/your_opensea_collection_name'
      : 'https://testnets.opensea.io/collection/your_opensea_collection_name',

  contractAddress:
    process.env.NODE_ENV === 'production'
      ? '0xF86696F8051cefA4Bacaba1DE63D7bE58FeC505e'
      : '0xF86696F8051cefA4Bacaba1DE63D7bE58FeC505e',

  scanUrl:
    process.env.NODE_ENV === 'production'
      ? 'https://etherscan.io/address/your_ethereum_contract_address'
      : 'https://rinkeby.etherscan.io/address/your_rinkeby_contract_address',
};

export default projectConfig;

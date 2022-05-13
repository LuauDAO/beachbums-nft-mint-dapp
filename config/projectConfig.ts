const projectConfig = {
  nftName: 'Beach Bums',

  nftSymbol: 'BUMS',

  maxSupply: 700,

  maxMintAmountPerTxn: 10,

  mintCost: process.env.NODE_ENV === 'production' ? 100 : 0.10,

  networkName:
    process.env.NODE_ENV === 'production'
      ? 'Hard Hat' // 'Ethereum Mainnet'
      : 'Mumbai Testnet', // 'Rinkeby Testnet'

  chainName: 'Go', // 'ETH'

  chainId: process.env.NODE_ENV === 'production' ? 31337 : 31337, // Ethereum (1), Rinkeby (4)

  siteDomain: 'www.hodlercon.com',

  siteUrl:
    process.env.NODE_ENV === 'production'
      ? `https://your_site_domain`
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
      ? '0xdc64a140aa3e981100a9beca4e685f962f0cf6c9'
      : '0xdc64a140aa3e981100a9beca4e685f962f0cf6c9',

  scanUrl:
    process.env.NODE_ENV === 'production'
      ? 'https://polygonscan.com/address/your_polygon_contract_address'
      : 'https://mumbai.polygonscan.com/address/your_mumbai_contract_address',
  // 'https://etherscan.io/address/your_ethereum_contract_address'
  // 'https://rinkeby.etherscan.io/address/your_rinkeby_contract_address'
};

export default projectConfig;

// For Ethereum, use the Infura endpoints
export default function rpcConfig(infuraKey?: string) {
  return process.env.NODE_ENV === 'production'
    ? 'http://localhost:8545' // `https://mainnet.infura.io/v3/${infuraKey}`
    : 'http://localhost:8545'; // `https://rinkeby.infura.io/v3/${infuraKey}`
}

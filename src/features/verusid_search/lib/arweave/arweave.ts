import Arweave from 'arweave'

const gatewayConfig = {
  port: 443,
  protocol: 'https',
  logging: false,
  timeout: 10000,
}

// Initialize Arweave client
export const arweave = Arweave.init({host: 'arweave.net', ...gatewayConfig})

// arweave.net's GraphQL owner index misses most wallets, so look up owner
// transactions on ar.io gateways with a full index, in order of preference
export const arweaveGraphqlGateways = ['ar-io.dev', 'ardrive.net'].map((host) =>
  Arweave.init({host, ...gatewayConfig})
)
// export const arweave = Arweave.init({})

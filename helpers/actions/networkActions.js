// import the prerequisites and colony client
const { providers, Wallet } = require('ethers')
const { default: EthersAdapter } = require('@colony/colony-js-adapter-ethers')
const { TrufflepigLoader } = require('@colony/colony-js-contract-loader-http')
const { default: ColonyNetworkClient } = require('@colony/colony-js-client')

// create an instance of Trufflepig loader
const loader = new TrufflepigLoader()

// create a provider for local TestRPC (Ganache)
const provider = new providers.JsonRpcProvider('http://localhost:8545/')

// getNetworkClient

export const getNetworkClient = async (testAccountIndex) => {

  // get the private key from selected account through trufflepig
  const { privateKey } = await loader.getAccount(testAccountIndex || 0)

  // create a wallet with the private key
  const wallet = new Wallet(privateKey, provider)

  // create an ethers powered adapter
  const adapter = new EthersAdapter({
    loader,
    provider,
    wallet,
  })

  // connect to ColonyNetwork with the adapter
  const networkClient = new ColonyNetworkClient({ adapter })
  await networkClient.init()

  return networkClient

}

// import prerequisites and colony client
const Web3 = require('web3');
const { providers, Wallet } = require('ethers')
const { default: EthersAdapter } = require('@colony/colony-js-adapter-ethers')
const { default: NetworkLoader } = require('@colony/colony-js-contract-loader-network')
const { TrufflepigLoader } = require('@colony/colony-js-contract-loader-http')
const { default: ColonyNetworkClient } = require('@colony/colony-js-client')

// set loader
let loader

// set provider
let provider

// set wallet
let wallet

// check environemnt
if (process.env.NODE_ENV === 'production') {

  // create instance of NetworkLoader
  loader = new NetworkLoader({ network: process.env.NETWORK })

  // create provider for network
  //provider = providers.getDefaultProvider(process.env.NETWORK)

  // create wallet with private key and provider
  //wallet = new Wallet(process.env.PRIVATE_KEY, provider)
  // Get the signer from the provider

} else {

  // create instance of TrufflepigLoader
  loader = new TrufflepigLoader()

  // create provider for local TestRPC (Ganache)
  provider = new providers.JsonRpcProvider('http://localhost:8545/')

}

// getNetworkClient

export const getNetworkClient = async (testAccountIndex) => {

  // check environemnt
  if (process.env.NODE_ENV !== 'production') {

    // get private key from selected account through trufflepig
    const { privateKey } = await loader.getAccount(testAccountIndex || 0)

    // create wallet with private key and provider
    wallet = new Wallet(privateKey, provider)

  } else {
    // Create instance of web3 and set metamask provider
    const web3 = new Web3(Web3.givenProvider);

    // Create provider for wallet and ethers adapter
    provider = new providers.Web3Provider(web3.currentProvider, process.env.NETWORK);  

    wallet = provider.getSigner();
  }

  // create an ethers powered adapter
  const adapter = new EthersAdapter({
    loader,
    provider,
    wallet,
  })

  // create new instance of network client with adapter
  const networkClient = new ColonyNetworkClient({ adapter })

  // initialize netwrok client
  await networkClient.init()

    // Check out the logs to see the address of the contract signer
  console.log('Account Address: ' + await networkClient._contract.signer.getAddress());

  // Check out the logs to see the address of the deployed network
  console.log('Network Address: ' + await networkClient._contract.address);

  // return netwrok client
  return networkClient

}

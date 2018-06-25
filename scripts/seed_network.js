// import prerequisites and colony client
const { providers, Wallet } = require('ethers')
const { default: EthersAdapter } = require('@colony/colony-js-adapter-ethers')
const { TrufflepigLoader } = require('@colony/colony-js-contract-loader-http')
const { default: ColonyNetworkClient } = require('@colony/colony-js-client')

// create instance of Trufflepig loader
const loader = new TrufflepigLoader()

// create provider for local TestRPC (Ganache)
const provider = new providers.JsonRpcProvider('http://localhost:8545/')

// seedNetwork

const seedNetwork = async () => {

  // get private key from test account
  const { privateKey } = await loader.getAccount(0)

  // create a wallet with the private key
  const wallet = new Wallet(privateKey, provider)

  // create an ethers powered adapter
  const adapter = new EthersAdapter({
    loader,
    provider,
    wallet,
  })

  // connect to ColonyNetwork with adapter
  const networkClient = new ColonyNetworkClient({ adapter })

  // initialize netwrok client
  await networkClient.init()

  // get meta colony client
  const metaColonyClient = await networkClient.getMetaColonyClient()

  // seed global skills
  await seedGlobalSkills(networkClient, metaColonyClient)

  // exit process
  process.exit()

}

// seedGlobalSkills

const seedGlobalSkills = async (networkClient, metaColonyClient) => {

  // get skill count
  const { count: skillCount } = await networkClient.getSkillCount.call()

  // check skill count
  if (skillCount === 2) {

    // add global skill "Agriculture" with id 3
    await metaColonyClient.addGlobalSkill.send({ parentSkillId: 1 })

    // add global skill "Communication" with id 4
    await metaColonyClient.addGlobalSkill.send({ parentSkillId: 1 })

    // add global skill "Construction" with id 5
    await metaColonyClient.addGlobalSkill.send({ parentSkillId: 1 })

    // add global skill "Economics" with id 6
    await metaColonyClient.addGlobalSkill.send({ parentSkillId: 1 })

    // add global skill "Engineering" with id 7
    await metaColonyClient.addGlobalSkill.send({ parentSkillId: 1 })

    // add global skill "Healthcare" with id 8
    await metaColonyClient.addGlobalSkill.send({ parentSkillId: 1 })

    // add global skill "Technology" with id 9
    await metaColonyClient.addGlobalSkill.send({ parentSkillId: 1 })

    // add global skill "Transportation" with id 10
    await metaColonyClient.addGlobalSkill.send({ parentSkillId: 1 })

  }

  // return true
  return true

}

// export seed network
module.exports = { seedNetwork }

// make runnable
require('make-runnable')

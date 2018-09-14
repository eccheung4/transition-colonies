// createColony

export const createColony = async (networkClient, tokenAddress) => {

  // create colony
  const { eventData: { colonyAddress } } = await networkClient.createColony.send({ tokenAddress })

console.log('networkClient', networkClient)
  // get colony client
  const colonyClient = await getColonyClient(networkClient, colonyAddress)
  console.log('colonyAddress', colonyAddress);

  console.log('colonyClient', colonyClient);

  // set colony contract as token owner
  await colonyClient.token.setOwner.send({ owner: colonyClient.contract.address })

  const userAddress = await colonyClient.adapter.wallet.getAddress()

  console.log(userAddress)

  // set current user as user role owner
  await colonyClient.setOwnerRole.send({ user: userAddress })

  // get local skill id from root domain
  const { localSkillId, parentSkillId } = await colonyClient.getDomain.call({ domainId: 1 })

  console.log(localSkillId, parentSkillId)

  // add business domain
  await colonyClient.addDomain.send({ parentSkillId: 1 })

/*  // add education domain
  await colonyClient.addDomain.send({ parentSkillId: localSkillId })

  // add service domain
  await colonyClient.addDomain.send({ parentSkillId: localSkillId })*/

  // return colony client
  return colonyClient

}

// getColonyClient

export const getColonyClient = async (networkClient, colonyAddress) => {

  // get colony client
  const colonyClient = await networkClient.getColonyClientByAddress(colonyAddress)

  // return colony client
  return colonyClient

}

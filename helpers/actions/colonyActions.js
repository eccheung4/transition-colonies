// createColony

export const createColony = async (networkClient, tokenAddress) => {

  // create colony
  const { eventData: { colonyAddress } } = await networkClient.createColony.send({ tokenAddress })

  // get colony client
  const colonyClient = await networkClient.getColonyClientByAddress(colonyAddress)

  // set colony contract as token owner
  await colonyClient.token.setOwner.send({ owner: colonyClient.contract.address })

  // set current user as user role admin
  await colonyClient.authority.setUserRole.send({ user: colonyClient.adapter.wallet.address, role: 'ADMIN' })

  // set test user as user role admin
  await colonyClient.authority.setUserRole.send({ user: '0xffcf8fdee72ac11b5c542428b35eef5769c409f0', role: 'ADMIN' })

  // set test user as user role admin
  await colonyClient.authority.setUserRole.send({ user: '0x22d491bde2303f2f43325b2108d26f1eaba1e32b', role: 'ADMIN' })

  // get local skill id from root domain
  const { localSkillId } = await colonyClient.getDomain.call({ domainId: 1 })

  // add business domain
  await colonyClient.addDomain.send({ parentSkillId: localSkillId })

  // add education domain
  await colonyClient.addDomain.send({ parentSkillId: localSkillId })

  // add service domain
  await colonyClient.addDomain.send({ parentSkillId: localSkillId })

  // return colony client
  return colonyClient

}

// getColonyClient

export const getColonyClient = async (networkClient, colonyId) => {

  const colonyClient = await networkClient.getColonyClient(colonyId)

  return colonyClient

}

// getColonyClientByAddress

export const getColonyClientByAddress = async (networkClient, colonyAddress) => {

  const colonyClient = await networkClient.getColonyClientByAddress(colonyAddress)

  return colonyClient

}

// getMetaColonyClient

export const getMetaColonyClient = async (networkClient) => {

  const metaColonyClient = await networkClient.getMetaColonyClient()

  return metaColonyClient

}

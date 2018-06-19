// createColony

export const createColony = async (networkClient, tokenAddress) => {

  // create colony
  const { eventData: { colonyAddress } } = await networkClient.createColony.send({ tokenAddress })

  // get colony client
  const colonyClient = await networkClient.getColonyClientByAddress(colonyAddress)

  // get local skill id from root domain
  const { localSkillId } = await colonyClient.getDomain.call({ domainId: 1 })

  // add business domain
  const businessDomain = await colonyClient.addDomain.send({ parentSkillId: localSkillId })

  // add education domain
  const educationDomain = await colonyClient.addDomain.send({ parentSkillId: localSkillId })

  // add service domain
  const serviceDomain = await colonyClient.addDomain.send({ parentSkillId: localSkillId })

  // return colony address
  return colonyAddress

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

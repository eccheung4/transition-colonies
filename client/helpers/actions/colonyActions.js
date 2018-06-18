// createColony

export const createColony = async (networkClient, tokenAddress) => {

  const { eventData: { colonyAddress } } = await networkClient.createColony.send({ tokenAddress })

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

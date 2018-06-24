// import big number
import BN from 'bn.js'

// createToken

export const createToken = async (networkClient, name, symbol) => {

  // create token
  const tokenAddress = await networkClient.createToken({ name, symbol })

  // return token address
  return tokenAddress

}

// getToken

export const getToken = async (colonyClient) => {

  // set token address
  const address = colonyClient.token._contract.address

  // get token info
  const info = await colonyClient.token.getTokenInfo.call()

  // get total supply
  const { amount } = await colonyClient.token.getTotalSupply.call()

  // set supply
  const supply = amount.toNumber()

  // return token
  return { address, supply, ...info }

}

// mintTokens

export const mintTokens = async (colonyClient, amount) => {

  // mint tokens
  await colonyClient.mintTokens.send({ amount: new BN(amount) })

  // get token
  const token = await getToken(colonyClient)

  // return token
  return token

}

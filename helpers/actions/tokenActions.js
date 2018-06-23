// import big number
import BN from 'bn.js'

// claimTokens

export const claimTokens = async (colonyClient) => {

  const token = colonyClient.token._contract.address

  const claimColonyFunds = await colonyClient.claimColonyFunds.send({ token })

  return true

}

// createToken

export const createToken = async (networkClient, tokenName, tokenSymbol) => {

  const tokenAddress = await networkClient.createToken({
    name: tokenName,
    symbol: tokenSymbol,
  })

  return tokenAddress

}

// getToken

export const getToken = async (colonyClient) => {

  const address = colonyClient.token._contract.address

  const tokenInfo = await colonyClient.token.getTokenInfo.call()

  const totalSupply = await colonyClient.token.getTotalSupply.call()

  return { address, totalSupply, ...tokenInfo }

}

// mintTokens

export const mintTokens = async (colonyClient, amount) => {

  const mintTokens = await colonyClient.mintTokens.send({ amount: new BN(amount) })

  return mintTokens

}

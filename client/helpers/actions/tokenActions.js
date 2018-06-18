// createToken

export const createToken = async (networkClient, tokenName, tokenSymbol) => {

  const tokenAddress = await networkClient.createToken({
    name: tokenName,
    symbol: tokenSymbol,
  })

  return tokenAddress

}

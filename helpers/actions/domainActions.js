// import big number
import BN from 'bn.js'

// claimFunds

export const claimFunds = async (colonyClient) => {

  // set token
  const token = colonyClient.token._contract.address

  // claim funds
  const claimColonyFunds = await colonyClient.claimColonyFunds.send({ token })

  // get updated domains
  const domains = await getDomains(colonyClient)

  // return updated domains
  return domains

}

// fundDomain

export const fundDomain = async (colonyClient, domainId, amount) => {

  // set token
  const token = colonyClient.token._contract.address

  // get domain
  const domain = await colonyClient.getDomain.call({ domainId })

  // move funds between pots
  await colonyClient.moveFundsBetweenPots.send({
    fromPot: 1,
    toPot: domain.potId,
    amount: new BN(amount),
    token,
  })

  // get updated domains
  const domains = await getDomains(colonyClient)

  // return updated domains
  return domains

}

// getClaimableFunds

export const getClaimableFunds = async (colonyClient) => {

  // set token
  const token = colonyClient.token._contract.address

  // get non rewards
  const { total: nonRewards } = await colonyClient.getNonRewardPotsTotal.call({ token })

  // get token supply
  const { amount: tokenSupply} = await colonyClient.token.getTotalSupply.call()

  // calculate claimable funds
  const claimableFunds = tokenSupply.sub(nonRewards).toNumber()

  // return claimed funds
  return claimableFunds

}

// getDomainTitle

export const getDomainTitle = (domainId) => {

  // return domain title
  switch (domainId) {
    case 1:
      return 'market'
    case 2:
      return 'business'
    case 3:
      return 'education'
    case 4:
      return 'service'
    default:
      break
  }

}

// getDomains

export const getDomains = async (colonyClient) => {

  // get domain count
  const { count: domainCount} = await colonyClient.getDomainCount.call()

  // set domain id
  let domainId = 1

  // set domains
  let domains = []

  // get domains
  while (domainId <= domainCount) {

    // get domain
    const domain = await colonyClient.getDomain.call({ domainId })

    // append domain title
    domain.title = getDomainTitle(domainId)

    // get pot balance for domain
    const potBalance = await colonyClient.getPotBalance.call({
      potId: domain.potId,
      token: colonyClient.token._contract.address,
    })

    // append potBalance
    domain.potBalance = potBalance.balance.toNumber()

    // push domain to domains
    domains.push(domain)

    // increment domain id
    domainId++

  }

  // return domains
  return domains

}

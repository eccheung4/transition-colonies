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
    domain.potBalance = potBalance

    // push domain to domains
    domains.push(domain)

    // increment domain id
    domainId++

  }

  // return domains
  return domains

}

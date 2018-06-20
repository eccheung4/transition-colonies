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

    // append domain names
    switch (domainId) {
      case 1:
        domain.title = 'colony'
        break
      case 2:
        domain.title = 'business'
        break
      case 3:
        domain.title = 'education'
        break
      case 4:
        domain.title = 'service'
        break
      default:
        break
    }

    // get pot balance for domain
    const potBalance = await colonyClient.getPotBalance.call({
      potId: domain.potId,
      source: colonyClient.token._contract.address,
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

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

    // push domain to domains
    domains.push(domain)

    // increment domain id
    domainId++

  }

  // return domains
  return domains

}
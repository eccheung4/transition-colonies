// getDomainTitle

export const getDomainTitle = (domainId) => {

  // return domain title
  switch (domainId) {
    case 1:
      return 'Market'
    case 2:
      return 'Business'
    case 3:
      return 'Education'
    case 4:
      return 'Service'
    default:
      break
  }

}

// getDomain

export const getDomain = async (colonyClient, domainId) => {

  // get domain
  let domain = await colonyClient.getDomain.call({ domainId })

  // append domain title
  domain.title = getDomainTitle(domainId)

  // return domain
  return domain

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
    const domain = await getDomain(colonyClient, domainId)

    // push domain to domains
    domains.push(domain)

    // increment domain id
    domainId++

  }

  // return domains
  return domains

}

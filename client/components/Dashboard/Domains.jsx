import React from 'react'
import ClaimFunds from '../../containers/Dashboard/Domains/ClaimFunds'
import FundDomain from '../../containers/Dashboard/Domains/FundDomain'
import ViewDomains from '../../containers/Dashboard/Domains/ViewDomains'
import styles from './Domains.scss'

const Domains = () => (
  <div>
    <ClaimFunds />
    <FundDomain />
    <ViewDomains />
  </div>
)

export default Domains

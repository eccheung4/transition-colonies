import React from 'react'
import ClaimFunds from '../../containers/Dashboard/Home/ClaimFunds'
import FundDomain from '../../containers/Dashboard/Home/FundDomain'
import ViewMarket from '../../containers/Dashboard/Home/ViewMarket'
import ViewDomains from '../../containers/Dashboard/Home/ViewDomains'
import styles from './Home.scss'

const Home = () => (
  <div>
    <ViewMarket />
    <ClaimFunds />
    <FundDomain />
    <ViewDomains />
  </div>
)

export default Home

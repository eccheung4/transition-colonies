import React from 'react'
import ClaimFunds from '../../containers/Dashboard/Home/ClaimFunds'
import ViewMarket from '../../containers/Dashboard/Home/ViewMarket'
import ViewDomains from '../../containers/Dashboard/Home/ViewDomains'
import styles from './Home.scss'

const Home = () => (
  <div>
    <ViewMarket />
    <ClaimFunds />
    <ViewDomains />
  </div>
)

export default Home

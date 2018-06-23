import React from 'react'
import { NavLink, Route, Switch } from 'react-router-dom'
import ClaimFunds from '../../containers/Dashboard/Domains/ClaimFunds'
import FundDomain from '../../containers/Dashboard/Domains/FundDomain'
import ViewDomains from '../../containers/Dashboard/Domains/ViewDomains'
import styles from './Domains.scss'

const Domains = () => (
  <div>
    <div className={styles.header}>
      <NavLink to="/dashboard/domains">
        {'View Domains'}
      </NavLink>
      <NavLink to="/dashboard/domains/claim">
        {'Claim Funds'}
      </NavLink>
      <NavLink to="/dashboard/domains/fund">
        {'Fund Domain'}
      </NavLink>
    </div>
    <div className={styles.content}>
      <Switch>
        <Route exact path="/dashboard/domains" component={ViewDomains} />
        <Route exact path="/dashboard/domains/claim" component={ClaimFunds} />
        <Route exact path="/dashboard/domains/fund" component={FundDomain} />
      </Switch>
    </div>
  </div>
)

export default Domains

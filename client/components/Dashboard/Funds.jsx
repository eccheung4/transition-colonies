import React from 'react'
import { NavLink, Route, Switch } from 'react-router-dom'
import ClaimFunds from '../../containers/Dashboard/Funds/ClaimFunds'
import FundDomain from '../../containers/Dashboard/Funds/FundDomain'
import ViewFunds from '../../containers/Dashboard/Funds/ViewFunds'
import styles from './Funds.scss'

const Funds = () => (
  <div>
    <div className={styles.header}>
      <NavLink to="/dashboard/funds">
        {'View Funds'}
      </NavLink>
      <NavLink to="/dashboard/funds/claim">
        {'Claim Funds'}
      </NavLink>
      <NavLink to="/dashboard/funds/fund">
        {'Fund Domain'}
      </NavLink>
    </div>
    <div className={styles.content}>
      <Switch>
        <Route exact path="/dashboard/funds" component={ViewFunds} />
        <Route exact path="/dashboard/funds/claim" component={ClaimFunds} />
        <Route exact path="/dashboard/funds/fund" component={FundDomain} />
      </Switch>
    </div>
  </div>
)

export default Funds

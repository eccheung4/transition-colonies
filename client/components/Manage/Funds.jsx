import React from 'react'
import { NavLink, Route, Switch } from 'react-router-dom'
import ClaimFunds from '../../containers/Manage/Funds/ClaimFunds'
import FundDomain from '../../containers/Manage/Funds/FundDomain'
import ViewFunds from '../../containers/Manage/Funds/ViewFunds'
import styles from './Funds.scss'

const Funds = () => (
  <div>
    <div className={styles.header}>
      <NavLink to="/manage/funds">
        {'View Funds'}
      </NavLink>
      <NavLink to="/manage/funds/claim">
        {'Claim Funds'}
      </NavLink>
      <NavLink to="/manage/funds/fund">
        {'Fund Domain'}
      </NavLink>
    </div>
    <div className={styles.content}>
      <Switch>
        <Route exact path="/manage/funds" component={ViewFunds} />
        <Route exact path="/manage/funds/claim" component={ClaimFunds} />
        <Route exact path="/manage/funds/fund" component={FundDomain} />
      </Switch>
    </div>
  </div>
)

export default Funds

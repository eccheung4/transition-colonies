import React from 'react'
import { NavLink, Route, Switch } from 'react-router-dom'
import MintTokens from '../../containers/Dashboard/Token/MintTokens'
import ViewToken from '../../containers/Dashboard/Token/ViewToken'
import styles from './Token.scss'

const Token = () => (
  <div>
    <div className={styles.header}>
      <NavLink to="/dashboard/token">
        {'View Token'}
      </NavLink>
      <NavLink to="/dashboard/token/mint">
        {'Mint Tokens'}
      </NavLink>
    </div>
    <div className={styles.content}>
      <Switch>
        <Route exact path="/dashboard/token" component={ViewToken} />
        <Route exact path="/dashboard/token/mint" component={MintTokens} />
      </Switch>
    </div>
  </div>
)

export default Token

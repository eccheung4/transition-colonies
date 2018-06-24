import React from 'react'
import { NavLink, Route, Switch } from 'react-router-dom'
import ViewDomains from '../../containers/Dashboard/Home/ViewDomains'
import ViewMarket from '../../containers/Dashboard/Home/ViewMarket'
import styles from './Home.scss'

const Home = () => (
  <div>
    <div className={styles.header}>
      <NavLink to="/dashboard">
        {'View Market'}
      </NavLink>
      <NavLink to="/dashboard/domains">
        {'View Domains'}
      </NavLink>
    </div>
    <div className={styles.content}>
      <Switch>
        <Route exact path="/dashboard" component={ViewMarket} />
        <Route exact path="/dashboard/domains" component={ViewDomains} />
      </Switch>
    </div>
  </div>
)

export default Home

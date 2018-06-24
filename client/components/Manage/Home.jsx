import React from 'react'
import { NavLink, Route, Switch } from 'react-router-dom'
import ViewDomains from '../../containers/Manage/Home/ViewDomains'
import ViewMarket from '../../containers/Manage/Home/ViewMarket'
import styles from './Home.scss'

const Home = () => (
  <div>
    <div className={styles.header}>
      <NavLink to="/manage">
        {'View Market'}
      </NavLink>
      <NavLink to="/manage/domains">
        {'View Domains'}
      </NavLink>
    </div>
    <div className={styles.content}>
      <Switch>
        <Route exact path="/manage" component={ViewMarket} />
        <Route exact path="/manage/domains" component={ViewDomains} />
      </Switch>
    </div>
  </div>
)

export default Home

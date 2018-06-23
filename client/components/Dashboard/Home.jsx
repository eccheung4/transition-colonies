import React from 'react'
import { NavLink, Route, Switch } from 'react-router-dom'
import ViewMarket from '../../containers/Dashboard/Home/ViewMarket'
import styles from './Home.scss'

const Home = () => (
  <div>
    <div className={styles.header}>
      <NavLink to="/dashboard">
        {'View Market'}
      </NavLink>
    </div>
    <div className={styles.content}>
      <Switch>
        <Route exact path="/dashboard" component={ViewMarket} />
      </Switch>
    </div>
  </div>
)

export default Home

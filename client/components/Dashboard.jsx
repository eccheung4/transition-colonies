import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Menu from './Dashboard/Menu'
import Home from './Dashboard/Home'
import Tasks from './Dashboard/Tasks'
import Token from './Dashboard/Token'
import styles from './Dashboard.scss'

const Dashboard = () => (
  <div className={styles.container}>
    <Menu />
    <div className={styles.content}>
      <Switch>
        <Route exact path="/dashboard" component={Home} />
        <Route path="/dashboard/tasks" component={Tasks} />
        <Route exact path="/dashboard/token" component={Token} />
      </Switch>
    </div>
  </div>
)

export default Dashboard

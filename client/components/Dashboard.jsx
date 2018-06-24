import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Funds from './Dashboard/Funds'
import Menu from './Dashboard/Menu'
import Home from './Dashboard/Home'
import Skills from './Dashboard/Skills'
import Tasks from './Dashboard/Tasks'
import Token from './Dashboard/Token'
import styles from './Dashboard.scss'

const Dashboard = () => (
  <div className={styles.container}>
    <Menu />
    <div className={styles.content}>
      <Switch>
        <Route path="/dashboard/funds" component={Funds} />
        <Route path="/dashboard/skills" component={Skills} />
        <Route path="/dashboard/tasks" component={Tasks} />
        <Route path="/dashboard/token" component={Token} />
        <Route path="/dashboard" component={Home} />
      </Switch>
    </div>
  </div>
)

export default Dashboard

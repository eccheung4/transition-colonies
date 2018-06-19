import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Create from './Create'
import Dashboard from '../containers/Dashboard'
import Login from './Login'
import Footer from './Footer'
import Header from '../containers/Header'
import Home from './Home'
import styles from './App.scss'

const App = () => (
  <div className={styles.container}>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/create" component={Create} />
      <Route path="/dashboard" component={Dashboard} />
      <Route exact path="/login" component={Login} />
    </Switch>
    <Footer />
  </div>
)

export default App

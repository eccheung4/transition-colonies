import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Create from './Create'
import Manage from '../containers/Manage'
import Footer from './Footer'
import Header from './Header'
import Home from './Home'
import Sponsor from './Sponsor'
import styles from './App.scss'

const App = ({
  getNetworkClientError,
  getNetworkClientLoading,
  getNetworkClientSuccess,
}) => (
  <div className={styles.container}>
    {getNetworkClientLoading &&
      <div className={styles.message}>
        {'loading...'}
      </div>
    }
    {getNetworkClientError &&
      <div className={styles.message}>
        {getNetworkClientError}
      </div>
    }
    {!getNetworkClientLoading && !getNetworkClientError &&
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/create" component={Create} />
          <Route path="/manage" component={Manage} />
          <Route exact path="/sponsor" component={Sponsor} />
        </Switch>
        <Footer />
      </div>
    }
  </div>
)

export default App

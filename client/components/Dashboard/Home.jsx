import React from 'react'
import ViewColony from '../../containers/Dashboard/Home/ViewColony'
import ViewDomains from '../../containers/Dashboard/Home/ViewDomains'
import styles from './Home.scss'

const Home = () => (
  <div>
    <ViewColony />
    <ViewDomains />
  </div>
)

export default Home

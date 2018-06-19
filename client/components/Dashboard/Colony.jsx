import React from 'react'
import ViewColony from '../../containers/Dashboard/Colony/ViewColony'
import ViewDomains from '../../containers/Dashboard/Colony/ViewDomains'
import styles from './Colony.scss'

const Colony = () => (
  <div>
    <ViewColony />
    <ViewDomains />
  </div>
)

export default Colony

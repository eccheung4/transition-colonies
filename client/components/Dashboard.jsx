import React from 'react'
import CreateTask from '../containers/Dashboard/CreateTask'
import ViewColony from '../containers/Dashboard/ViewColony'
import ViewTask from '../containers/Dashboard/ViewTask'
import styles from './Dashboard.scss'

const Dashboard = () => (
  <div className={styles.container}>
    <ViewColony />
    <CreateTask />
    <ViewTask />
  </div>
)

export default Dashboard

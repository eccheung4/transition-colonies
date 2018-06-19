import React from 'react'
import CreateTask from '../containers/Dashboard/CreateTask'
import ViewColony from '../containers/Dashboard/ViewColony'
import ViewTask from '../containers/Dashboard/ViewTask'
import ViewTasks from '../containers/Dashboard/ViewTasks'
import styles from './Dashboard.scss'

const Dashboard = () => (
  <div className={styles.container}>
    <ViewColony />
    <CreateTask />
    <ViewTask />
    <ViewTasks />
  </div>
)

export default Dashboard

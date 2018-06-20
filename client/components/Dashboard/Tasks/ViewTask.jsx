import React from 'react'
import Task from '../../../containers/Dashboard/Tasks/Task'
import styles from './ViewTask.scss'

const ViewTask = ({ task }) => (
  <div className={styles.container}>
    <h2>{'View Task'}</h2>
    <Task task={task} />
  </div>
)

export default ViewTask

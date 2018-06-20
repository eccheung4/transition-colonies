import React from 'react'
import Task from '../../../containers/Dashboard/Tasks/Task'
import styles from './ViewTasks.scss'

const ViewTasks = ({ tasks }) => (
  <div className={styles.container}>
    <h2>{'View Tasks'}</h2>
    <ul className={styles.list}>
      {tasks.map(task => (
        <li key={task.id} className={styles.item}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  </div>
)

export default ViewTasks

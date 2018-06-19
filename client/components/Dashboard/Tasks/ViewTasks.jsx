import React from 'react'
import styles from './ViewTasks.scss'

const ViewTasks = ({ tasks }) => (
  <div className={styles.container}>
    <h2>{'View Tasks'}</h2>
    <ul className={styles.list}>
      {tasks.map(task => (
        <li key={task.id} className={styles.item}>
          <p>{'title: ' + task.specification.title}</p>
          <p>{'description: ' + task.specification.description}</p>
          <p>{'domain id: ' + task.domainId}</p>
          <p>{'evaluator: ' + task.roles.evaluator.address}</p>
          <p>{'manager: ' + task.roles.manager.address}</p>
          <p>{'worker: ' + task.roles.worker.address}</p>
        </li>
      ))}
    </ul>
  </div>
)

export default ViewTasks

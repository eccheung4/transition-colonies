import React from 'react'
import styles from './ViewTask.scss'

const ViewTask = ({ task }) => (
  <div className={styles.container}>
    <h2>{'View Task'}</h2>
    <p>{'title: ' + task.specification.title}</p>
    <p>{'description: ' + task.specification.description}</p>
    <p>{'domainId: ' + task.domainId}</p>
    <p>{'evaluator: ' + task.roles.evaluator.address}</p>
    <p>{'manager: ' + task.roles.manager.address}</p>
    <p>{'worker: ' + task.roles.worker.address}</p>
  </div>
)

export default ViewTask

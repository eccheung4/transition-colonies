import React from 'react'
import styles from './ViewTask.scss'

const ViewTask = ({ task }) => (
  <div className={styles.container}>
    <h2>{'View Task'}</h2>
    <p>{'Title: ' + task.specification.title}</p>
    <p>{'Description: ' + task.specification.description}</p>
    <p>{'Domain ID: ' + task.domainId}</p>
  </div>
)

export default ViewTask

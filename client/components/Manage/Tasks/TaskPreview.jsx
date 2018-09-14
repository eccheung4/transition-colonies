import React from 'react'
import styles from './TaskPreview.scss'

const TaskPreview = ({ task }) => (
  <div className={styles.container}>
    <p>{'ID: ' + task.id}</p>
    <p>{'Domain: ' + task.domainTitle}</p>
    <p>{'Skill: ' + task.skillTitle}</p>
    <p>{'Due Date: ' + task.dueDate}</p>
    <p>{'Title: ' + task.specification.title}</p>
    <p>{'Description: ' + task.specification.description}</p>
    <p>{'Date Delivered: ' + task.completionDate}</p>
    <p>{'Status: ' + task.status}</p>
    <p>{'Payouts We Cannot Make: ' + task.payoutsWeCannotMake}</p>
  </div>
)

export default TaskPreview

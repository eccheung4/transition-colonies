import React from 'react'
import styles from './TaskPreview.scss'

const TaskPreview = ({ task }) => (
  <div className={styles.container}>
    <div>
      <span>{'id:'}</span>
      <span>{' ' + task.id}</span>
    </div>
    <div className={styles.group}>
      <div>{'domain:'}</div>
      <div className={styles.indent}>
        <span>{'id:'}</span>
        <span>{' ' + task.domainId}</span>
      </div>
      <div className={styles.indent}>
        <span>{'title:'}</span>
        <span>{' ' + task.domainTitle}</span>
      </div>
    </div>
    <div className={styles.group}>
      <div>{'skill:'}</div>
      <div className={styles.indent}>
        <span>{'id:'}</span>
        <span>{' ' + task.skillId}</span>
      </div>
      <div className={styles.indent}>
        <span>{'title:'}</span>
        <span>{' ' + task.skillTitle}</span>
      </div>
    </div>
    <div>
      <span>{'due date:'}</span>
      <span>{' ' + task.dueDate}</span>
    </div>
    <div className={styles.group}>
      <div>{'specification:'}</div>
      <div className={styles.indent}>
        <span>{'hash:'}</span>
        <span>{' ' + task.specificationHash}</span>
      </div>
      <div className={styles.indent}>
        <span>{'title:'}</span>
        <span>{' ' + task.specification.title}</span>
      </div>
      <div className={styles.indent}>
        <span>{'description:'}</span>
        <span>{' ' + task.specification.description}</span>
      </div>
    </div>
    <div>
      <span>{'pot id:'}</span>
      <span>{' ' + task.potId}</span>
    </div>
    <div className={styles.group}>
      <div>{'deliverable:'}</div>
      <div className={styles.indent}>
        <span>{'hash:'}</span>
        <span>{' ' + task.deliverableHash}</span>
      </div>
      <div className={styles.indent}>
        <span>{'date:'}</span>
        <span>{' ' + task.deliverableDate}</span>
      </div>
    </div>
    <div>
      <span>{'cancelled:'}</span>
      <span>{' ' + task.cancelled}</span>
    </div>
    <div>
      <span>{'finalized:'}</span>
      <span>{' ' + task.finalized}</span>
    </div>
    <div>
      <span>{'payouts we cannot make:'}</span>
      <span>{' ' + task.payoutsWeCannotMake}</span>
    </div>
  </div>
)

export default TaskPreview

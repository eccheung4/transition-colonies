import React from 'react'
import styles from './TaskExtended.scss'

const TaskExtended = ({ task }) => (
  <div className={styles.container}>
    <div>
      <span>{'id:'}</span>
      <span>{' ' + task.id}</span>
    </div>
    <div>
      <span>{'skill id:'}</span>
      <span>{' ' + task.skillId}</span>
    </div>
    <div>
      <span>{'domain id:'}</span>
      <span>{' ' + task.domainId}</span>
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
    <div className={styles.group}>
      <div>{'roles:'}</div>
      <div className={styles.indent}>
        <span>{'evaluator:'}</span>
        <span>{' ' + task.roles.evaluator.address}</span>
      </div>
      <div className={styles.indent}>
        <span>{'manager:'}</span>
        <span>{' ' + task.roles.manager.address}</span>
      </div>
      <div className={styles.indent}>
        <span>{'worker:'}</span>
        <span>{' ' + task.roles.worker.address}</span>
      </div>
    </div>
    <div className={styles.group}>
      <div>{'pot:'}</div>
      <div className={styles.indent}>
        <span>{'id:'}</span>
        <span>{' ' + task.potId}</span>
      </div>
      <div className={styles.indent}>
        <span>{'balance:'}</span>
        <span>{' ' + task.pot.balance}</span>
      </div>
    </div>
    <div className={styles.group}>
      <div>{'payouts:'}</div>
      <div className={styles.indent}>
        <span>{'evaluator:'}</span>
        <span>{' ' + task.payouts.evaluator}</span>
      </div>
      <div className={styles.indent}>
        <span>{'manager:'}</span>
        <span>{' ' + task.payouts.manager}</span>
      </div>
      <div className={styles.indent}>
        <span>{'worker:'}</span>
        <span>{' ' + task.payouts.worker}</span>
      </div>
    </div>
    <div className={styles.group}>
      <div>{'deliverable:'}</div>
      <div className={styles.indent}>
        <span>{'hash:'}</span>
        <span>{' ' + task.deliverableHash}</span>
      </div>
      <div className={styles.indent}>
        <span>{'date: '}</span>
        <span>{' ' + task.deliverableDate}</span>
      </div>
      <div className={styles.indent}>
        <span>{'message: '}</span>
        <span>{' ' + task.deliverable.message}</span>
      </div>
    </div>
    <div className={styles.group}>
      <div>{'ratings:'}</div>
      <div className={styles.indent}>
        <span>{'evaluator:'}</span>
        <span>{' ' + task.ratings.evaluator}</span>
      </div>
      <div className={styles.indent}>
        <span>{'manager:'}</span>
        <span>{' ' + task.ratings.manager}</span>
      </div>
      <div className={styles.indent}>
        <span>{'worker:'}</span>
        <span>{' ' + task.ratings.worker}</span>
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

export default TaskExtended

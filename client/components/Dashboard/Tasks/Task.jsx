import React from 'react'
import EditTask from '../../../containers/Dashboard/Tasks/EditTask'
import styles from './Task.scss'

const Task = ({
  cancelTask,
  cancelTaskError,
  cancelTaskLoading,
  cancelTaskSuccess,
  editTask,
  finalizeTask,
  finalizeTaskError,
  finalizeTaskLoading,
  finalizeTaskSuccess,
  handleChange,
  signTask,
  signTaskError,
  signTaskLoading,
  signTaskSuccess,
  submitRating,
  submitWork,
  task,
}) => (
  <div className={styles.container}>
    <div className={styles.info}>
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
    <div className={styles.buttons}>
      <button onClick={editTask}>
        {'Edit Task'}
      </button>
      <button onClick={signTask}>
        {'Sign Task'}
      </button>
      <button onClick={finalizeTask}>
        {'Finalize Task'}
      </button>
      <button onClick={submitWork}>
        {'Submit Work'}
      </button>
      <button onClick={submitRating}>
        {'Submit Rating'}
      </button>
      <button onClick={cancelTask}>
        {'Cancel Task'}
      </button>
    </div>
  </div>
)

export default Task

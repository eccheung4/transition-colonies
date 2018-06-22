import React from 'react'
import EditTask from '../../../containers/Dashboard/Tasks/EditTask'
import styles from './Task.scss'

const Task = ({
  cancelTask,
  cancelTaskError,
  cancelTaskLoading,
  cancelTaskSuccess,
  claimTask,
  claimTaskError,
  claimTaskLoading,
  claimTaskSuccess,
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
  task,
}) => (
  <div className={styles.container}>
    <div>
      <p>{'id: ' + task.id}</p>
      <p>{'title: ' + task.specification.title}</p>
      <p>{'due date: ' + task.dueDate}</p>
      <p>{'description: ' + task.specification.description}</p>
      <p>{'domain id: ' + task.domainId}</p>
      <p>{'skill id: ' + task.skillId}</p>
      <p>{'pot id: ' + task.potId}</p>
      <p>{'pot balance: ' + task.potBalance}</p>
      <p>{'evaluator: ' + task.roles.evaluator.address}</p>
      <p>{'manager: ' + task.roles.manager.address}</p>
      <p>{'worker: ' + task.roles.worker.address}</p>
      <p>{'evaluator payout: ' + task.payouts.evaluator}</p>
      <p>{'manager payout: ' + task.payouts.manager}</p>
      <p>{'worker payout: ' + task.payouts.worker}</p>
      <p>{'finalized: ' + task.finalized}</p>
      <p>{'cancelled: ' + task.cancelled}</p>
    </div>
    <div>
      <button onClick={claimTask}>
        {'Claim Task'}
      </button>
      <button onClick={editTask}>
        {'Edit Task'}
      </button>
      <button onClick={signTask}>
        {'Sign Task'}
      </button>
      <button onClick={finalizeTask}>
        {'Finalize Task'}
      </button>
      <button onClick={cancelTask}>
        {'Cancel Task'}
      </button>
    </div>
  </div>
)

export default Task

import React from 'react'
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
  handleChange,
  setDueDate,
  setDueDateError,
  setDueDateLoading,
  setDueDateSuccess,
  setRole,
  setRoleError,
  setRoleLoading,
  setRoleSuccess,
  signDueDate,
  signDueDateError,
  signDueDateLoading,
  signDueDateSuccess,
  task,
}) => (
  <div className={styles.container}>
    <div>
      <p>{'id: ' + task.id}</p>
      <p>{'title: ' + task.specification.title}</p>
      <p>{'dueDate: ' + task.dueDate}</p>
      <p>{'description: ' + task.specification.description}</p>
      <p>{'domainId: ' + task.domainId}</p>
      <p>{'skillId: ' + task.skillId}</p>
      <p>{'potId: ' + task.potId}</p>
      <p>{'potBalance: ' + task.potBalance.balance.toNumber()}</p>
      <p>{'evaluator: ' + task.roles.evaluator.address}</p>
      <p>{'manager: ' + task.roles.manager.address}</p>
      <p>{'worker: ' + task.roles.worker.address}</p>
      <p>{'finalized: ' + task.finalized}</p>
      <p>{'cancelled: ' + task.cancelled}</p>
    </div>
    <div>
      <button onClick={claimTask}>
        {'Claim Task'}
      </button>
      <button onClick={cancelTask}>
        {'Cancel Task'}
      </button>
    </div>
    <div>
      <input
        id="dueDate"
        onChange={handleChange}
        type="date"
      />
      <button onClick={setDueDate}>
        {'Set Due Date'}
      </button>
      <button onClick={signDueDate}>
        {'Sign Due Date'}
      </button>
    </div>
    <div>
      <select id="role" onChange={handleChange}>
        <option value={'EVALUATOR'}>
          {'Evaluator'}
        </option>
        <option value={'MANAGER'}>
          {'Manager'}
        </option>
        <option value={'WORKER'}>
          {'Worker'}
        </option>
      </select>
      <input
        id="user"
        onChange={handleChange}
        placeholder="user address"
        type="text"
      />
      <button onClick={setRole}>
        {'Set Role'}
      </button>
    </div>
  </div>
)

export default Task

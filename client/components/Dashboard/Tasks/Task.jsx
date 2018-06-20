import React from 'react'
import styles from './Task.scss'

const Task = ({
  cancelTask,
  cancelTaskError,
  cancelTaskLoading,
  cancelTaskSuccess,
  task,
}) => (
  <div>
    <p>{'id: ' + task.id}</p>
    <p>{'title: ' + task.specification.title}</p>
    <p>{'dueDate: ' + task.dueDate}</p>
    <p>{'description: ' + task.specification.description}</p>
    <p>{'domainId: ' + task.domainId}</p>
    <p>{'skillId: ' + task.skillId}</p>
    <p>{'potId: ' + task.potId}</p>
    <p>{'evaluator: ' + task.roles.evaluator.address}</p>
    <p>{'manager: ' + task.roles.manager.address}</p>
    <p>{'worker: ' + task.roles.worker.address}</p>
    <p>{'finalized: ' + task.finalized}</p>
    <p>{'cancelled: ' + task.cancelled}</p>
    <button onClick={() => cancelTask(task.id)}>
      {'Cancel Task'}
    </button>
  </div>
)

export default Task

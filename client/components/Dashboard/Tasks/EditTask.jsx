import React from 'react'
import TaskForm from './TaskForm'
import ViewTask from '../../../containers/Dashboard/Tasks/ViewTask'
import styles from './EditTask.scss'

const EditTask = ({
  handleChange,
  handleClick,
  task,
  updateTaskError,
  updateTaskLoading,
  updateTaskSuccess,
}) => (
  <div className={styles.container}>
    <h2>{'Edit Task'}</h2>
    <TaskForm
      handleChange={handleChange}
      task={task}
    />
    <div className={styles.buttons}>
      <button onClick={handleClick}>
        {'Update Task'}
      </button>
    </div>
    {updateTaskError &&
      <div className={styles.message}>
        <span className={styles.error}>
          {updateTaskError}
        </span>
      </div>
    }
    <ViewTask />
  </div>
)

export default EditTask

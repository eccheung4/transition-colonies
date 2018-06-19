import React from 'react'
import styles from './CreateTask.scss'

const CreateTask = ({
  createTaskError,
  createTaskLoading,
  createTaskSuccess,
  handleChange,
  handleClick,
}) => (
  <div className={styles.container}>
    <h2>{'Create Task'}</h2>
    <input
      id="taskTitle"
      onChange={handleChange}
      placeholder="task title"
      type="text"
    />
    <input
      id="taskDescription"
      onChange={handleChange}
      placeholder="task description"
      type="text"
    />
    <input
      id="taskDomainId"
      onChange={handleChange}
      placeholder="task domain id"
      type="number"
    />
    <button onClick={handleClick}>
      {'Create Task'}
    </button>
    {createTaskError &&
      <p className={styles.message}>
        {createTaskError}
      </p>
    }
  </div>
)

export default CreateTask

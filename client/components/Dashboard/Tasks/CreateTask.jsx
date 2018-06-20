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
    <select id="taskDomainId" onChange={handleChange}>
      <option value={1}>
        {'Colony'}
      </option>
      <option value={2}>
        {'Business'}
      </option>
      <option value={3}>
        {'Education'}
      </option>
      <option value={4}>
        {'Service'}
      </option>
    </select>
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

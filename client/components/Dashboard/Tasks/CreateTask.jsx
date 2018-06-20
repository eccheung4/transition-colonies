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
      id="title"
      onChange={handleChange}
      placeholder="task title"
      type="text"
    />
    <input
      id="description"
      onChange={handleChange}
      placeholder="task description"
      type="text"
    />
    <select id="domainId" onChange={handleChange}>
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
    <input
      id="dueDate"
      onChange={handleChange}
      type="date"
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

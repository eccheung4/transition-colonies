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
    <div className={styles.section}>
      <label htmlFor="title">
        {'title:'}
      </label>
      <input
        id="title"
        onChange={handleChange}
        placeholder="task title"
        type="text"
      />
    </div>
    <div className={styles.section}>
      <label htmlFor="description">
        {'description:'}
      </label>
      <input
        id="description"
        onChange={handleChange}
        placeholder="task description"
        type="text"
      />
    </div>
    <div className={styles.section}>
      <label htmlFor="domainId">
        {'domain:'}
      </label>
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
    </div>
    <div className={styles.section}>
      <label htmlFor="skillId">
        {'skill:'}
      </label>
      <input
        id="skillId"
        onChange={handleChange}
        placeholder="0"
        type="number"
      />
    </div>
    <div className={styles.section}>
      <label htmlFor="dueDate">
        {'dueDate:'}
      </label>
      <input
        id="dueDate"
        onChange={handleChange}
        type="date"
      />
    </div>
    <div className={styles.section}>
      <label htmlFor="evaluator">
        {'evaluator:'}
      </label>
      <input
        id="evaluator"
        onChange={handleChange}
        placeholder="user address"
        type="text"
      />
    </div>
    <div className={styles.section}>
      <label htmlFor="manager">
        {'manager:'}
      </label>
      <input
        id="manager"
        onChange={handleChange}
        placeholder="user address"
        type="text"
      />
    </div>
    <div className={styles.section}>
      <label htmlFor="worker">
        {'worker:'}
      </label>
      <input
        id="worker"
        onChange={handleChange}
        placeholder="user address"
        type="text"
      />
    </div>
    <div className={styles.section}>
      <button onClick={handleClick}>
        {'Create Task'}
      </button>
    </div>
    <div className={styles.section}>
      {createTaskError &&
        <span className={styles.error}>
          {createTaskError}
        </span>
      }
    </div>
  </div>
)

export default CreateTask

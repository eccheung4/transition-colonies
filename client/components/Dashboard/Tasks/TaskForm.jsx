import React from 'react'
import styles from './TaskForm.scss'

const TaskForm = ({ handleChange, task }) => (
  <div className={styles.container}>
    <div className={styles.field}>
      <label htmlFor="title">
        {'title:'}
      </label>
      <input
        id="title"
        onChange={handleChange}
        placeholder="task title"
        type="text"
        value={task.specification.title}
      />
    </div>
    <div className={styles.field}>
      <label htmlFor="description">
        {'description:'}
      </label>
      <input
        id="description"
        onChange={handleChange}
        placeholder="task description"
        type="text"
        value={task.specification.description}
      />
    </div>
    <div className={styles.field}>
      <label htmlFor="domainId">
        {'domain:'}
      </label>
      <select id="domainId" value={task.domainId} onChange={handleChange}>
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
    <div className={styles.field}>
      <label htmlFor="skillId">
        {'skill:'}
      </label>
      <input
        id="skillId"
        onChange={handleChange}
        placeholder="0"
        type="number"
        value={task.skillId}
      />
    </div>
    <div className={styles.field}>
      <label htmlFor="dueDate">
        {'dueDate:'}
      </label>
      <input
        id="dueDate"
        onChange={handleChange}
        type="date"
        value={task.dueDate}
      />
    </div>
    <div className={styles.field}>
      <label htmlFor="evaluator">
        {'evaluator:'}
      </label>
      <input
        id="evaluator"
        onChange={handleChange}
        placeholder="user address"
        type="text"
        value={task.roles.evaluator}
      />
    </div>
    <div className={styles.field}>
      <label htmlFor="manager">
        {'manager:'}
      </label>
      <input
        id="manager"
        onChange={handleChange}
        placeholder="user address"
        type="text"
        value={task.roles.manager}
      />
    </div>
    <div className={styles.field}>
      <label htmlFor="worker">
        {'worker:'}
      </label>
      <input
        id="worker"
        onChange={handleChange}
        placeholder="user address"
        type="text"
        value={task.roles.worker}
      />
    </div>
  </div>
)

export default TaskForm

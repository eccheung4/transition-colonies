import React from 'react'
import styles from './TaskForm.scss'

const TaskForm = ({ handleChange, task }) => (
  <div className={styles.container}>
    <div className={styles.field}>
      <label htmlFor="specification-title">
        {'title:'}
      </label>
      <input
        id="specification-title"
        onChange={handleChange}
        placeholder="task title"
        type="text"
        value={task.specification.title}
      />
    </div>
    <div className={styles.field}>
      <label htmlFor="specification-description">
        {'description:'}
      </label>
      <input
        id="specification-description"
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
          {'Market'}
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
        {'due date:'}
      </label>
      <input
        id="dueDate"
        onChange={handleChange}
        type="date"
        value={task.dueDate}
      />
    </div>
    <div className={styles.field}>
      <label htmlFor="role-evaluator">
        {'evaluator:'}
      </label>
      <input
        id="role-evaluator"
        onChange={handleChange}
        placeholder="user address"
        type="text"
        value={task.roles.evaluator}
      />
    </div>
    <div className={styles.field}>
      <label htmlFor="role-manager">
        {'manager:'}
      </label>
      <input
        id="role-manager"
        onChange={handleChange}
        placeholder="user address"
        type="text"
        value={task.roles.manager}
      />
    </div>
    <div className={styles.field}>
      <label htmlFor="role-worker">
        {'worker:'}
      </label>
      <input
        id="role-worker"
        onChange={handleChange}
        placeholder="user address"
        type="text"
        value={task.roles.worker}
      />
    </div>
    <div className={styles.field}>
      <label htmlFor="payout-evaluator">
        {'evaluator payout:'}
      </label>
      <input
        id="payout-evaluator"
        onChange={handleChange}
        placeholder="0"
        type="number"
        value={task.payouts.evaluator}
      />
    </div>
    <div className={styles.field}>
      <label htmlFor="payout-manager">
        {'manager payout:'}
      </label>
      <input
        id="payout-manager"
        onChange={handleChange}
        placeholder="0"
        type="number"
        value={task.payouts.manager}
      />
    </div>
    <div className={styles.field}>
      <label htmlFor="payout-worker">
        {'worker payout:'}
      </label>
      <input
        id="payout-worker"
        onChange={handleChange}
        placeholder="0"
        type="number"
        value={task.payouts.worker}
      />
    </div>
  </div>
)

export default TaskForm

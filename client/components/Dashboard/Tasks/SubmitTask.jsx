import React from 'react'
import styles from './SubmitTask.scss'

const SubmitTask = ({
  deliverable,
  handleChange,
  handleClick,
  submitTaskError,
  submitTaskLoading,
  submitTaskSuccess,
}) => (
  <div className={styles.container}>
    <h2>{'Submit Task'}</h2>
    <div className={styles.field}>
      <label htmlFor="message">
        {'message:'}
      </label>
      <input
        id="message"
        onChange={handleChange}
        placeholder="message"
        type="text"
        value={deliverable.message}
      />
    </div>
    <div className={styles.buttons}>
      <button onClick={handleClick}>
        {'Submit Task'}
      </button>
    </div>
    {submitTaskError &&
      <div className={styles.message}>
        <span className={styles.error}>
          {submitTaskError}
        </span>
      </div>
    }
  </div>
)

export default SubmitTask

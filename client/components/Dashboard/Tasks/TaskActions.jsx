import React from 'react'
import styles from './TaskActions.scss'

const TaskActions = ({
  cancelTask,
  cancelTaskError,
  cancelTaskLoading,
  cancelTaskSuccess,
  editTask,
  finalizeTask,
  finalizeTaskError,
  finalizeTaskLoading,
  finalizeTaskSuccess,
  signTask,
  signTaskError,
  signTaskLoading,
  signTaskSuccess,
  submitRating,
  submitWork,
  viewTask,
}) => (
  <div className={styles.container}>
    <button onClick={viewTask}>
      {'View Task'}
    </button>
    <button onClick={editTask}>
      {'Edit Task'}
    </button>
    <button onClick={signTask}>
      {'Sign Task'}
    </button>
    <button onClick={finalizeTask}>
      {'Finalize Task'}
    </button>
    <button onClick={submitWork}>
      {'Submit Work'}
    </button>
    <button onClick={submitRating}>
      {'Submit Rating'}
    </button>
    <button onClick={cancelTask}>
      {'Cancel Task'}
    </button>
  </div>
)

export default TaskActions

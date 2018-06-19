import React from 'react'
import CreateTask from '../../containers/Dashboard/Tasks/CreateTask'
import ViewTask from '../../containers/Dashboard/Tasks/ViewTask'
import ViewTasks from '../../containers/Dashboard/Tasks/ViewTasks'
import styles from './Tasks.scss'

const Tasks = () => (
  <div>
    <CreateTask />
    <ViewTask />
    <ViewTasks />
  </div>
)

export default Tasks

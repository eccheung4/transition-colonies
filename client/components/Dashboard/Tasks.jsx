import React from 'react'
import { NavLink, Route, Switch } from 'react-router-dom'
import CreateTask from '../../containers/Dashboard/Tasks/CreateTask'
import EditTask from '../../containers/Dashboard/Tasks/EditTask'
import SubmitTask from '../../containers/Dashboard/Tasks/SubmitTask'
import ViewTasks from '../../containers/Dashboard/Tasks/ViewTasks'
import styles from './Tasks.scss'

const Tasks = () => (
  <div>
    <div className={styles.header}>
      <NavLink to="/dashboard/tasks">
        {'View Tasks'}
      </NavLink>
      <NavLink to="/dashboard/tasks/new">
        {'Create Task'}
      </NavLink>
    </div>
    <div className={styles.content}>
      <Switch>
        <Route exact path="/dashboard/tasks" component={ViewTasks} />
        <Route exact path="/dashboard/tasks/new" component={CreateTask} />
        <Route exact path="/dashboard/tasks/edit/:id" component={EditTask} />
        <Route exact path="/dashboard/tasks/submit/:id" component={SubmitTask} />
      </Switch>
    </div>
  </div>
)

export default Tasks

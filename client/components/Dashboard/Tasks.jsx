import React from 'react'
import { NavLink, Route, Switch } from 'react-router-dom'
import CreateTask from '../../containers/Dashboard/Tasks/CreateTask'
import EditTask from '../../containers/Dashboard/Tasks/EditTask'
import SubmitRating from '../../containers/Dashboard/Tasks/SubmitRating'
import SubmitWork from '../../containers/Dashboard/Tasks/SubmitWork'
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
        <Route exact path="/dashboard/tasks/rate/:id" component={SubmitRating} />
        <Route exact path="/dashboard/tasks/submit/:id" component={SubmitWork} />
      </Switch>
    </div>
  </div>
)

export default Tasks

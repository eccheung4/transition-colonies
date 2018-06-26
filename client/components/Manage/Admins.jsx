import React from 'react'
import { NavLink, Route, Switch } from 'react-router-dom'
import AddAdmin from '../../containers/Manage/Admins/AddAdmin'
import ViewAdmins from '../../containers/Manage/Admins/ViewAdmins'
import styles from './Admins.scss'

const Admins = () => (
  <div>
    <div className={styles.header}>
      <NavLink to="/manage/admins">
        {'View Admins'}
      </NavLink>
      <NavLink to="/manage/admins/add">
        {'Add Admin'}
      </NavLink>
    </div>
    <Switch>
      <Route exact path="/manage/admins" component={ViewAdmins} />
      <Route exact path="/manage/admins/add" component={AddAdmin} />
    </Switch>
  </div>
)

export default Admins

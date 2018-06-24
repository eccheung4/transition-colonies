import React from 'react'
import { NavLink, Route, Switch } from 'react-router-dom'
import ViewSkills from '../../containers/Manage/Skills/ViewSkills'
import styles from './Skills.scss'

const Skills = () => (
  <div>
    <div className={styles.header}>
      <NavLink to="/manage/skills">
        {'View Skills'}
      </NavLink>
    </div>
    <div className={styles.content}>
      <Switch>
        <Route exact path="/manage/skills" component={ViewSkills} />
      </Switch>
    </div>
  </div>
)

export default Skills

import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Menu.scss'

const Menu = () => (
  <div className={styles.menu}>
    <ul className={styles.list}>
      <li className={styles.item}>
        <NavLink to="/dashboard">
          {'Home'}
        </NavLink>
      </li>
      <li className={styles.item}>
        <NavLink to="/dashboard/domains">
          {'Domains'}
        </NavLink>
      </li>
      <li className={styles.item}>
        <NavLink to="/dashboard/skills">
          {'Skills'}
        </NavLink>
      </li>
      <li className={styles.item}>
        <NavLink to="/dashboard/tasks">
          {'Tasks'}
        </NavLink>
      </li>
      <li className={styles.item}>
        <NavLink to="/dashboard/token">
          {'Token'}
        </NavLink>
      </li>
    </ul>
  </div>
)

export default Menu

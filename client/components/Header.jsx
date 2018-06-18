import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Header.scss'

const Header = ({ colonyClient, logout }) => (
  <header className={styles.header}>
    <NavLink className={styles.title} to="/">
      {'Transition Market'}
    </NavLink>
    {colonyClient ?
      <ul className={styles.list}>
        <li className={styles.item}>
          <NavLink to="/dashboard">
            {'Dashboard'}
          </NavLink>
        </li>
        <li className={styles.item}>
          <a onClick={logout}>
            {'Logout'}
          </a>
        </li>
      </ul>
    :
      <ul className={styles.list}>
        <li className={styles.item}>
          <NavLink to="/create">
            {'Create'}
          </NavLink>
        </li>
        <li className={styles.item}>
          <NavLink to="/login">
            {'Login'}
          </NavLink>
        </li>
      </ul>
    }
  </header>
)

export default Header

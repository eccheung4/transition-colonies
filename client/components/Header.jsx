import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Header.scss'

const Header = ({ logout }) => (
  <header className={styles.header}>
    <NavLink className={styles.title} to="/">
      {'Transition Colonies'}
    </NavLink>
    <ul className={styles.list}>
      <li className={styles.item}>
        <NavLink to="/create">
          {'Create'}
        </NavLink>
      </li>
      <li className={styles.item}>
        <NavLink to="/manage">
          {'Manage'}
        </NavLink>
      </li>
      <li className={styles.item}>
        <NavLink to="/support">
          {'Support'}
        </NavLink>
      </li>
    </ul>
  </header>
)

export default Header

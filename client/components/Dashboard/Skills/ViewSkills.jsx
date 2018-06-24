import React from 'react'
import styles from './ViewSkills.scss'

const ViewSkills = ({
  getSkillsError,
  getSkillsLoading,
  getSkillsSuccess,
  skills,
}) => (
  <div className={styles.container}>
    <h2>{'View Skills'}</h2>
    {!skills || getSkillsLoading ?
      <div>{'loading...'}</div>
    :
      <ul className={styles.list}>
        {skills.map((skill, index) => (
          <li key={index} className={styles.item}>
            <p>{'id: ' + skill.id}</p>
            <p>{'index: ' + index}</p>
            <p>{'parents: ' + skill.nParents}</p>
            <p>{'children: ' + skill.nChildren}</p>
          </li>
        ))}
      </ul>
    }
  </div>
)

export default ViewSkills

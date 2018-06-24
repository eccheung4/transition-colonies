import React from 'react'
import styles from './SkillSelector.scss'

const SkillSelector = ({ handleChange, skillId, skills }) => (
  <div className={styles.field}>
    <label htmlFor="skillId">
      {'skill:'}
    </label>
    <select id="skillId" onChange={handleChange} value={skillId}>
      <option value={0}>
        {'(none)'}
      </option>
      {skills ? skills.map(skill => (
        <option key={skill.id} value={skill.id}>
          {skill.title}
        </option>
      )) : (
        <option value={null}>
          {'loading...'}
        </option>
      )}
    </select>
  </div>
)

export default SkillSelector

import React from 'react'
import styles from './GetColony.scss'

const GetColony = ({
  getColonyClientError,
  getColonyClientLoading,
  getColonyClientSuccess,
  handleClick,
  handleChange,
}) => (
  <div className={styles.container}>
    <h2>{'Get Colony'}</h2>
    <input
      onChange={handleChange}
      placeholder="colony address"
      type="text"
    />
    <button onClick={handleClick}>
      {'Get Colony'}
    </button>
    {getColonyClientError &&
      <p className={styles.message}>
        {getColonyClientError}
      </p>
    }
  </div>
)

export default GetColony

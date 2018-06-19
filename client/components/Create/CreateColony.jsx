import React from 'react'
import styles from './CreateColony.scss'

const CreateColony = ({
  colonyAddress,
  createColonyError,
  createColonyLoading,
  createColonySuccess,
  handleChange,
  handleClick,
}) => (
  <div className={styles.container}>
    <h2>{'Create Colony'}</h2>
    <input
      onChange={handleChange}
      placeholder="token address"
      type="text"
    />
    <button onClick={handleClick}>
      {'Create Colony'}
    </button>
    {createColonyError &&
      <p className={styles.message}>
        {createColonyError}
      </p>
    }
    {colonyAddress &&
      <p className={styles.message}>
        {'address: ' + colonyAddress}
      </p>
    }
  </div>
)

export default CreateColony

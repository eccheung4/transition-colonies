import React from 'react'
import styles from './CreateMarket.scss'

const CreateMarket = ({
  colonyAddress,
  createColonyError,
  createColonyLoading,
  createColonySuccess,
  handleChange,
  handleClick,
}) => (
  <div className={styles.container}>
    <h2>{'Create Market'}</h2>
    <input
      onChange={handleChange}
      placeholder="token address"
      type="text"
    />
    <button onClick={handleClick}>
      {'Create Market'}
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

export default CreateMarket

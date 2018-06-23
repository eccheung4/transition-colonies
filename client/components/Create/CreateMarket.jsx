import React from 'react'
import styles from './CreateMarket.scss'

const CreateMarket = ({
  createColonyError,
  createColonyLoading,
  createColonySuccess,
  handleChange,
  handleClick,
}) => (
  <div className={styles.container}>
    <h2>{'Create Market'}</h2>
    <div className={styles.field}>
      <label htmlFor="tokenAddress">
        {'token address:'}
      </label>
      <input
        id="tokenAddress"
        onChange={handleChange}
        placeholder="0x0"
        type="text"
      />
    </div>
    <div className={styles.buttons}>
      <button onClick={handleClick}>
        {'Create Market'}
      </button>
    </div>
    {createColonyError &&
      <div className={styles.message}>
        <span className={styles.error}>
          {createColonyError}
        </span>
      </div>
    }
    {createColonyLoading &&
      <div className={styles.message}>
        <span>
          {'loading...'}
        </span>
      </div>
    }
  </div>
)

export default CreateMarket

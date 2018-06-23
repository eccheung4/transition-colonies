import React from 'react'
import styles from './GetMarket.scss'

const GetMarket = ({
  getColonyClientError,
  getColonyClientLoading,
  getColonyClientSuccess,
  handleClick,
  handleChange,
}) => (
  <div className={styles.container}>
    <h2>{'Get Market'}</h2>
    <input
      onChange={handleChange}
      placeholder="market address"
      type="text"
    />
    <button onClick={handleClick}>
      {'Get Market'}
    </button>
    {getColonyClientError &&
      <p className={styles.message}>
        {getColonyClientError}
      </p>
    }
  </div>
)

export default GetMarket

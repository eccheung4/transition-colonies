import React from 'react'
import styles from './CreateToken.scss'

const CreateToken = ({
  createTokenError,
  createTokenLoading,
  createTokenSuccess,
  handleChange,
  handleClick,
  tokenAddress,
}) => (
  <div className={styles.container}>
    <h2>{'Create Token'}</h2>
    <input
      id="tokenName"
      onChange={handleChange}
      placeholder="token name"
      type="text"
    />
    <input
      id="tokenSymbol"
      onChange={handleChange}
      placeholder="token symbol"
      type="text"
    />
    <button onClick={handleClick}>
      {'Create Token'}
    </button>
    {createTokenError &&
      <p className={styles.message}>
        {createTokenError}
      </p>
    }
    {tokenAddress &&
      <p className={styles.message}>
        {'address: ' + tokenAddress}
      </p>
    }
  </div>
)

export default CreateToken

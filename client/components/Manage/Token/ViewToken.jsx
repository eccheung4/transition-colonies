import React from 'react'
import styles from './ViewToken.scss'

const ViewToken = ({
  getTokenError,
  getTokenLoading,
  getTokenSuccess,
  token,
}) => (
  <div className={styles.container}>
    <h2>{'View Token'}</h2>
    {!token || getTokenLoading ?
      <div>{'loading...'}</div>
    :
      <div>
        <p>{'address: ' + token.address}</p>
        <p>{'name: ' + token.name}</p>
        <p>{'symbol: ' + token.symbol}</p>
        <p>{'decimals: ' + token.decimals}</p>
        <p>{'supply: ' + token.supply}</p>
      </div>
    }
  </div>
)

export default ViewToken

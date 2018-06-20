import React from 'react'
import styles from './ViewToken.scss'

const ViewToken = ({ token }) => (
  <div className={styles.container}>
    <h2>{'View Token'}</h2>
    <p>{'address: ' + token.address}</p>
    <p>{'name: ' + token.name}</p>
    <p>{'symbol: ' + token.symbol}</p>
    <p>{'decimals: ' + token.decimals}</p>
    <p>{'totalSupply: ' + token.totalSupply.amount.toNumber()}</p>
  </div>
)

export default ViewToken

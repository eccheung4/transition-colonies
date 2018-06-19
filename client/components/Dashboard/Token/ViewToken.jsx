import React from 'react'
import styles from './ViewToken.scss'

const ViewToken = ({ token }) => (
  <div className={styles.container}>
    <h2>{'View Token'}</h2>
    <p>{'address: ' + token.address}</p>
    <p>{'amount: ' + token.amount}</p>
  </div>
)

export default ViewToken

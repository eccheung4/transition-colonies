import React from 'react'
import styles from './ViewMarket.scss'

const ViewMarket = ({ address }) => (
  <div className={styles.container}>
    <h2>{'View Market'}</h2>
    <p>{'address: ' + address}</p>
  </div>
)

export default ViewMarket

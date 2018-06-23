import React from 'react'
import styles from './ViewMarket.scss'

const ViewMarket = ({ colonyClient }) => (
  <div className={styles.container}>
    <h2>{'View Market'}</h2>
    <p>{'address: ' + colonyClient.contract.address}</p>
  </div>
)

export default ViewMarket

import React from 'react'
import styles from './ViewColony.scss'

const ViewColony = ({ colonyClient }) => (
  <div className={styles.container}>
    <h2>{'View Colony'}</h2>
    <p>{'Address: ' + colonyClient.contract.address}</p>
  </div>
)

export default ViewColony

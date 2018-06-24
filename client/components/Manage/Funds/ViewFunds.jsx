import React from 'react'
import styles from './ViewFunds.scss'

const ViewFunds = ({
  getPotsError,
  getPotsLoading,
  getPotsSuccess,
  pots,
}) => (
  <div className={styles.container}>
    <h2>{'View Funds'}</h2>
    {!pots || getPotsLoading ?
      <div>{'loading...'}</div>
    :
      <ul className={styles.list}>
        {pots.map((pot, index) => (
          <li key={index} className={styles.item}>
            <p>{'id: ' + pot.id}</p>
            <p>{'type: ' + pot.type}</p>
            <p>{'title: ' + pot.title}</p>
            <p>{'balance: ' + pot.balance}</p>
          </li>
        ))}
      </ul>
    }
  </div>
)

export default ViewFunds

import React from 'react'
import styles from './ViewDomains.scss'

const ViewDomains = ({
  getDomainsError,
  getDomainsLoading,
  getDomainsSuccess,
  domains,
}) => (
  <div className={styles.container}>
    <h2>{'View Domains'}</h2>
    {!domains || getDomainsLoading ?
      <div>{'loading...'}</div>
    :
      <ul className={styles.list}>
        {domains.map((domain, index) => (
          <li key={index} className={styles.item}>
            <p>{'title: ' + domain.title}</p>
            <p>{'localSkillId: ' + domain.localSkillId}</p>
            <p>{'potId: ' + domain.potId}</p>
            <p>{'potBalance: ' + domain.potBalance.balance.toNumber()}</p>
          </li>
        ))}
      </ul>
    }
  </div>
)

export default ViewDomains

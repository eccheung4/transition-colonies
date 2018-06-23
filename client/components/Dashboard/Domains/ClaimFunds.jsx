import React from 'react'
import styles from './ClaimFunds.scss'

const ClaimFunds = ({
  claimFundsError,
  claimFundsLoading,
  claimFundsSuccess,
  handleClick,
}) => (
  <div className={styles.container}>
    <h2>{'Claim Funds'}</h2>
    <button onClick={handleClick}>
      {'Claim Funds'}
    </button>
    {claimFundsError &&
      <span className={styles.message}>
        <span className={styles.error}>
          {claimFundsError}
        </span>
      </span>
    }
    {claimFundsSuccess &&
      <span className={styles.message}>
        {'success'}
      </span>
    }
  </div>
)

export default ClaimFunds

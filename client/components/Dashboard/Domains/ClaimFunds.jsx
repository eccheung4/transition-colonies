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
    <div className={styles.buttons}>
      <button onClick={handleClick}>
        {'Claim Funds'}
      </button>
    </div>
    {claimFundsError &&
      <div className={styles.message}>
        <span className={styles.error}>
          {claimFundsError}
        </span>
      </div>
    }
    {claimFundsLoading &&
      <div className={styles.message}>
        <span>
          {'loading...'}
        </span>
      </div>
    }
    {claimFundsSuccess &&
      <div className={styles.message}>
        {'success'}
      </div>
    }
  </div>
)

export default ClaimFunds

import React from 'react'
import styles from './ClaimTokens.scss'

const ClaimTokens = ({
  claimTokensError,
  claimTokensLoading,
  claimTokensSuccess,
  handleClick,
}) => (
  <div className={styles.container}>
    <h2>{'Claim Tokens'}</h2>
    <button onClick={handleClick}>
      {'Claim Tokens'}
    </button>
    {claimTokensError &&
      <p className={styles.message}>
        <span className={styles.error}>
          {claimTokensError}
        </span>
      </p>
    }
    {claimTokensSuccess &&
      <p className={styles.message}>
        {'success'}
      </p>
    }
  </div>
)

export default ClaimTokens

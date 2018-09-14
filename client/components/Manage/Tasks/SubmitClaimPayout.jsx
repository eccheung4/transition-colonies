import React from 'react'
import styles from './SubmitClaimPayout.scss'

const SubmitClaimPayout = ({
  handleChange,
  handleClick,
  token,
  role,
  submitClaimPayoutError,
  submitClaimPayoutLoading,
  submitClaimPayoutSuccess,
}) => (
  <div className={styles.container}>
    <h2>{'Submit Claim Payout'}</h2>
    <div className={styles.field}>
      <label htmlFor="role">
        {'role:'}
      </label>
      <select id="role" value={role} onChange={handleChange}>
        <option value={'MANAGER'}>
          {'Manager'}
        </option>
        <option value={'EVALUATOR'}>
          {'Evaluator'}
        </option>
        <option value={'WORKER'}>
          {'Worker'}
        </option>
      </select>
    </div>
    <div className={styles.field}>
      <label htmlFor="token">
        {'Token Address:'}
      </label>
      <input
        id="token"
        onChange={handleChange}
        placeholder="0x0"
        type="text"
      />
    </div>
    <div className={styles.buttons}>
      <button onClick={handleClick}>
        {'Submit Claim Payout'}
      </button>
    </div>
    {submitClaimPayoutError &&
      <div className={styles.message}>
        <span className={styles.error}>
          {submitClaimPayoutError}
        </span>
      </div>
    }
    {submitClaimPayoutLoading &&
      <div className={styles.message}>
        <span>
          {'loading...'}
        </span>
      </div>
    }
    {submitClaimPayoutSuccess &&
      <div className={styles.message}>
        <span>
          {'success'}
        </span>
      </div>
    }
  </div>
)

export default SubmitClaimPayout

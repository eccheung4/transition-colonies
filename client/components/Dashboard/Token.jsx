import React from 'react'
import ClaimTokens from '../../containers/Dashboard/Token/ClaimTokens'
import MintTokens from '../../containers/Dashboard/Token/MintTokens'
import ViewToken from '../../containers/Dashboard/Token/ViewToken'
import styles from './Token.scss'

const Token = () => (
  <div>
    <MintTokens />
    <ClaimTokens />
    <ViewToken />
  </div>
)

export default Token

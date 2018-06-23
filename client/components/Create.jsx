import React from 'react'
import CreateMarket from '../containers/Create/CreateMarket'
import CreateToken from '../containers/Create/CreateToken'
import styles from './Create.scss'

const Create = () => (
  <div className={styles.container}>
    <CreateToken />
    <CreateMarket />
  </div>
)

export default Create

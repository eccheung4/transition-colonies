import React, { Component } from 'react'
import { connect } from 'react-redux'
import ViewToken from '../../../components/Dashboard/Token/ViewToken'

class ViewTokenContainer extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return <ViewToken />
  }

}

export default connect(null, null)(ViewTokenContainer)

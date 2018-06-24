import React, { Component } from 'react'
import { connect } from 'react-redux'
import Manage from '../components/Manage'

class ManageContainer extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Manage
        colonyClient={this.props.colonyClient}
      />
    )
  }

}

const mapStateToProps = state => ({
  colonyClient: state.colony.colonyClient,
})

export default connect(mapStateToProps, null)(ManageContainer)

import React, { Component } from 'react'
import { connect } from 'react-redux'
import ViewColony from '../../components/Dashboard/ViewColony'

class ViewColonyContainer extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    if (this.props.colonyClient === null) {
      return <div />
    }
    return (
      <ViewColony
        colonyClient={this.props.colonyClient}
      />
    )
  }

}

const mapStateToProps = state => ({
  colonyClient: state.colony.colonyClient,
})

export default connect(mapStateToProps, null)(ViewColonyContainer)

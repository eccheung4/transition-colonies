import React, { Component } from 'react'
import { connect } from 'react-redux'
import ViewMarket from '../../../components/Dashboard/Home/ViewMarket'

class ViewMarketContainer extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    if (this.props.colonyClient === null) {
      return <div />
    }
    return (
      <ViewMarket
        colonyClient={this.props.colonyClient}
      />
    )
  }

}

const mapStateToProps = state => ({
  colonyClient: state.colony.colonyClient,
})

export default connect(mapStateToProps, null)(ViewMarketContainer)

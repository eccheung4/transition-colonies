import React, { Component } from 'react'
import { connect } from 'react-redux'
import ViewMarket from '../../../components/Dashboard/Home/ViewMarket'

class ViewMarketContainer extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <ViewMarket
        address={this.props.colonyClient.contract.address}
      />
    )
  }

}

const mapStateToProps = state => ({
  colonyClient: state.colony.colonyClient,
})

export default connect(mapStateToProps, null)(ViewMarketContainer)

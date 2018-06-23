import React, { Component } from 'react'
import { connect } from 'react-redux'
import { claimFunds } from '../../../actions/colonyActions'
import ClaimFunds from '../../../components/Dashboard/Domains/ClaimFunds'

class ClaimFundsContainer extends Component {

  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.props.claimFunds(this.props.colonyClient)
  }

  render() {
    return (
      <ClaimFunds
        claimFundsError={this.props.claimFundsError}
        claimFundsLoading={this.props.claimFundsLoading}
        claimFundsSuccess={this.props.claimFundsSuccess}
        handleClick={this.handleClick}
      />
    )
  }

}

const mapStateToProps = state => ({
  claimFundsError: state.token.claimFundsError,
  claimFundsLoading: state.token.claimFundsLoading,
  claimFundsSuccess: state.token.claimFundsSuccess,
  colonyClient: state.colony.colonyClient,
})

const mapDispatchToProps = dispatch => ({
  claimFunds(colonyClient) {
    dispatch(claimFunds(colonyClient))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(ClaimFundsContainer)

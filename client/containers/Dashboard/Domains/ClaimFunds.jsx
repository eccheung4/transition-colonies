import React, { Component } from 'react'
import { connect } from 'react-redux'
import { claimFunds, getClaimableFunds } from '../../../actions/domainActions'
import ClaimFunds from '../../../components/Dashboard/Domains/ClaimFunds'

class ClaimFundsContainer extends Component {

  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    if (this.props.claimableFunds === null) {
      this.props.getClaimableFunds(this.props.colonyClient)
    }
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.claimableFunds !== null &&
      this.props.claimableFunds === null &&
      this.props.claimableFundsError === null &&
      this.props.claimableFundsLoading === false
    ) {
      this.props.getClaimableFunds(this.props.colonyClient)
    }
    if (this.props.claimFundsSuccess && prevProps.claimFundsSuccess !== this.props.claimFundsSuccess) {
      this.props.getClaimableFunds(this.props.colonyClient)
    }
  }

  handleClick() {
    this.props.claimFunds(this.props.colonyClient)
  }

  render() {
    return (
      <ClaimFunds
        claimableFunds={this.props.claimableFunds}
        claimFundsError={this.props.claimFundsError}
        claimFundsLoading={this.props.claimFundsLoading}
        claimFundsSuccess={this.props.claimFundsSuccess}
        getClaimableFundsError={this.props.getClaimableFundsError}
        getClaimableFundsLoading={this.props.getClaimableFundsLoading}
        getClaimableFundsSuccess={this.props.getClaimableFundsSuccess}
        handleClick={this.handleClick}
      />
    )
  }

}

const mapStateToProps = state => ({
  claimableFunds: state.domain.claimableFunds,
  claimFundsError: state.domain.claimFundsError,
  claimFundsLoading: state.domain.claimFundsLoading,
  claimFundsSuccess: state.domain.claimFundsSuccess,
  colonyClient: state.colony.colonyClient,
  getClaimableFundsError: state.domain.getClaimableFundsError,
  getClaimableFundsLoading: state.domain.getClaimableFundsLoading,
  getClaimableFundsSuccess: state.domain.getClaimableFundsSuccess,
})

const mapDispatchToProps = dispatch => ({
  claimFunds(colonyClient) {
    dispatch(claimFunds(colonyClient))
  },
  getClaimableFunds(colonyClient) {
    dispatch(getClaimableFunds(colonyClient))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(ClaimFundsContainer)

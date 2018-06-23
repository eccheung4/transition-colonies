import React, { Component } from 'react'
import { connect } from 'react-redux'
import { claimTokens } from '../../../actions/tokenActions'
import ClaimTokens from '../../../components/Dashboard/Token/ClaimTokens'

class ClaimTokensContainer extends Component {

  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.props.claimTokens(this.props.colonyClient)
  }

  render() {
    return (
      <ClaimTokens
        claimTokensError={this.props.claimTokensError}
        claimTokensLoading={this.props.claimTokensLoading}
        claimTokensSuccess={this.props.claimTokensSuccess}
        handleClick={this.handleClick}
      />
    )
  }

}

const mapStateToProps = state => ({
  claimTokensError: state.token.claimTokensError,
  claimTokensLoading: state.token.claimTokensLoading,
  claimTokensSuccess: state.token.claimTokensSuccess,
  colonyClient: state.colony.colonyClient,
})

const mapDispatchToProps = dispatch => ({
  claimTokens(colonyClient) {
    dispatch(claimTokens(colonyClient))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(ClaimTokensContainer)

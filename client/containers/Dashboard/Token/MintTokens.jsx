import React, { Component } from 'react'
import { connect } from 'react-redux'
import { mintTokens } from '../../../actions/tokenActions'
import MintTokens from '../../../components/Dashboard/Token/MintTokens'

class MintTokensContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      amount: 0,
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleChange(event) {
    this.setState({ amount: event.target.value })
  }

  handleClick() {
    this.props.mintTokens(this.props.colonyClient, this.state.amount)
  }

  render() {
    return (
      <MintTokens
        handleChange={this.handleChange}
        handleClick={this.handleClick}
        mintTokensError={this.props.mintTokensError}
        mintTokensLoading={this.props.mintTokensLoading}
        mintTokensSuccess={this.props.mintTokensSuccess}
      />
    )
  }

}

const mapStateToProps = state => ({
  colonyClient: state.colony.colonyClient,
  mintTokensError: state.token.mintTokensError,
  mintTokensLoading: state.token.mintTokensLoading,
  mintTokensSuccess: state.token.mintTokensSuccess,
})

const mapDispatchToProps = dispatch => ({
  mintTokens(colonyClient, amount) {
    dispatch(mintTokens(colonyClient, amount))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(MintTokensContainer)

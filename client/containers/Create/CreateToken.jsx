import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createToken } from '../../actions/tokenActions'
import CreateToken from '../../components/Create/CreateToken'

class CreateTokenContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      tokenName: '',
      tokenSymbol: '',
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleChange(event) {
    if (event.target.id === 'tokenName') {
      this.setState({ tokenName: event.target.value })
    } else if (event.target.id === 'tokenSymbol') {
      this.setState({ tokenSymbol: event.target.value })
    }
  }

  handleClick() {
    this.props.createToken(this.props.networkClient, this.state.tokenName, this.state.tokenSymbol)
  }

  render() {
    return (
      <CreateToken
        createTokenError={this.props.createTokenError}
        createTokenLoading={this.props.createTokenLoading}
        createTokenSuccess={this.props.createTokenSuccess}
        handleChange={this.handleChange}
        handleClick={this.handleClick}
        tokenAddress={this.props.tokenAddress}
      />
    )
  }

}

const mapStateToProps = state => ({
  createTokenError: state.token.createTokenError,
  createTokenLoading: state.token.createTokenLoading,
  createTokenSuccess: state.token.createTokenSuccess,
  networkClient: state.network.networkClient,
  tokenAddress: state.token.tokenAddress,
})

const mapDispatchToProps = dispatch => ({
  createToken(networkClient, tokenName, tokenSymbol) {
    dispatch(createToken(networkClient, tokenName, tokenSymbol))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateTokenContainer)

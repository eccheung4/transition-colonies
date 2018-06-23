import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { getColonyClient } from '../../actions/colonyActions'
import GetMarket from '../../components/Login/GetMarket'

class GetMarketContainer extends Component {

  constructor(props) {
    super(props)
    this.state = { colonyAddress: '' }
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidUpdate(prevProps) {
    if (this.props.getColonyClientSuccess && prevProps.getColonyClientSuccess !== this.props.getColonyClientSuccess) {
      this.props.history.push('/dashboard')
    }
  }

  handleChange(event) {
    let state = this.state
    state[event.target.id] = event.target.value
    this.setState({ ...state })
  }

  handleClick() {
    this.props.getColonyClient(this.props.networkClient, this.state.colonyAddress)
  }

  render() {
    return (
      <GetMarket
        colonyAddress={this.state.colonyAddress}
        getColonyClientError={this.props.getColonyClientError}
        getColonyClientLoading={this.props.getColonyClientLoading}
        getColonyClientSuccess={this.props.getColonyClientSuccess}
        handleChange={this.handleChange}
        handleClick={this.handleClick}
      />
    )
  }

}

const mapStateToProps = state => ({
  getColonyClientError: state.colony.getColonyClientError,
  getColonyClientLoading: state.colony.getColonyClientLoading,
  getColonyClientSuccess: state.colony.getColonyClientSuccess,
  networkClient: state.network.networkClient,
})

const mapDispatchToProps = dispatch => ({
  getColonyClient(networkClient, colonyAddress) {
    dispatch(getColonyClient(networkClient, colonyAddress))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(GetMarketContainer))

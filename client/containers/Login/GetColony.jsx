import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { getColonyClientByAddress } from '../../actions/colonyActions'
import GetColony from '../../components/Login/GetColony'

class GetColonyContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      colonyAddress: '',
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidUpdate(prevProps) {
    if (this.props.getColonyClientByAddressSuccess) {
      this.props.history.push('/dashboard')
    }
  }

  handleChange(event) {
    this.setState({ colonyAddress: event.target.value })
  }

  handleClick() {
    this.props.getColonyClientByAddress(this.props.networkClient, this.state.colonyAddress)
  }

  render() {
    return (
      <GetColony
        getColonyClientByAddressError={this.props.getColonyClientByAddressError}
        getColonyClientByAddressLoading={this.props.getColonyClientByAddressLoading}
        getColonyClientByAddressSuccess={this.props.getColonyClientByAddressSuccess}
        handleChange={this.handleChange}
        handleClick={this.handleClick}
      />
    )
  }

}

const mapStateToProps = state => ({
  getColonyClientByAddressError: state.colony.getColonyClientByAddressError,
  getColonyClientByAddressLoading: state.colony.getColonyClientByAddressLoading,
  getColonyClientByAddressSuccess: state.colony.getColonyClientByAddressSuccess,
  networkClient: state.network.networkClient,
})

const mapDispatchToProps = dispatch => ({
  getColonyClientByAddress(networkClient, colonyAddress) {
    dispatch(getColonyClientByAddress(networkClient, colonyAddress))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(GetColonyContainer))

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { setStateColonyClient } from '../actions/colonyActions'
import Header from '../components/Header'

class HeaderContainer extends Component {

  constructor(props) {
    super(props)
    this.logout = this.logout.bind(this)
  }

  logout() {
    this.props.setStateColonyClient(null)
    this.props.history.push('/dashboard')
  }

  render() {
    return (
      <Header
        colonyClient={this.props.colonyClient}
        logout={this.logout}
      />
    )
  }

}

const mapStateToProps = state => ({
  colonyClient: state.colony.colonyClient,
})

const mapDispatchToProps = dispatch => ({
  setStateColonyClient(colonyClient) {
    dispatch(setStateColonyClient(colonyClient))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(HeaderContainer))

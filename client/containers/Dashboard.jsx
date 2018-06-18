import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Dashboard from '../components/Dashboard'

class DashboardContainer extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    if (this.props.colonyClient === null) {
      this.props.history.push('/login')
    }
  }

  componentDidUpdate() {
    if (this.props.colonyClient === null) {
      this.props.history.push('/login')
    }
  }

  render() {
    return <Dashboard />
  }

}

const mapStateToProps = state => ({
  colonyClient: state.colony.colonyClient,
})

export default connect(mapStateToProps, null)(withRouter(DashboardContainer))

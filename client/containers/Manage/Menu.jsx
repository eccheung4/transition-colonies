import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { setStateColonyClient } from '../../actions/colonyActions'
import Menu from '../../components/Manage/Menu'

class MenuContainer extends Component {

  constructor(props) {
    super(props)
    this.logout = this.logout.bind(this)
  }

  logout() {
    this.props.setStateColonyClient(null)
    this.props.history.push('/manage')
  }

  render() {
    return <Menu logout={this.logout} />
  }

}

const mapDispatchToProps = dispatch => ({
  setStateColonyClient(colonyClient) {
    dispatch(setStateColonyClient(colonyClient))
  },
})

export default connect(null, mapDispatchToProps)(withRouter(MenuContainer))

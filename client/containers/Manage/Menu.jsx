import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { logout } from '../../actions/appActions'
import Menu from '../../components/Manage/Menu'

class MenuContainer extends Component {

  constructor(props) {
    super(props)
    this.logout = this.logout.bind(this)
  }

  logout() {
    this.props.history.push('/manage')
    this.props.logout()
  }

  render() {
    return <Menu logout={this.logout} />
  }

}

const mapDispatchToProps = dispatch => ({
  logout() {
    dispatch(logout())
  },
})

export default connect(null, mapDispatchToProps)(withRouter(MenuContainer))

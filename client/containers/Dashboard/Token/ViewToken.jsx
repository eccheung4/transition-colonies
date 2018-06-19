import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getToken } from '../../../actions/tokenActions'
import ViewToken from '../../../components/Dashboard/Token/ViewToken'

class ViewTokenContainer extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    if (this.props.token === null) {
      this.props.getToken(this.props.colonyClient)
    }
  }

  render() {
    if (this.props.getTokenError) {
      return <div>{this.props.getTokenError}</div>
    }
    if (this.props.getTokenLoading || this.props.token === null) {
      return <div>{'loading...'}</div>
    }
    return (
      <ViewToken
        getTokenError={this.props.getTokenError}
        getTokenLoading={this.props.getTokenLoading}
        getTokenSuccess={this.props.getTokenSuccess}
        token={this.props.token}
      />
    )
  }

}

const mapStateToProps = state => ({
  colonyClient: state.colony.colonyClient,
  getTokenError: state.token.getTokenError,
  getTokenLoading: state.token.getTokenLoading,
  getTokenSuccess: state.token.getTokenSuccess,
  token: state.token.token,
})

const mapDispatchToProps = dispatch => ({
  getToken(colonyClient) {
    dispatch(getToken(colonyClient))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(ViewTokenContainer)

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getNetworkClient } from '../actions/networkActions'
import App from '../components/App'

class AppContainer extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.getNetworkClient()
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      scroll(0,0)
    }
  }

  render() {
    if (this.props.getNetworkClientError) {
      return (
        <div>
          {this.props.getNetworkClientError}
        </div>
      )
    }
    if (this.props.getNetworkClientLoading || this.props.networkClient === null) {
      return (
        <div>
          {'loading...'}
        </div>
      )
    }
    return <App />
  }

}

const mapStateToProps = state => ({
  networkClient: state.network.networkClient,
  getNetworkClientError: state.network.getNetworkClientError,
  getNetworkClientLoading: state.network.getNetworkClientLoading,
  getNetworkClientSuccess: state.network.getNetworkClientSuccess,
})

const mapDispatchToProps = dispatch => ({
  getNetworkClient() {
    dispatch(getNetworkClient())
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer)

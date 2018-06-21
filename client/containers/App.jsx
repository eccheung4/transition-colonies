import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getNetworkClient } from '../actions/networkActions'
import App from '../components/App'

class AppContainer extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    let testAccountIndex = prompt('test account index:', '0')
    this.props.getNetworkClient(Number(testAccountIndex))
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
  getNetworkClient(testAccountIndex) {
    dispatch(getNetworkClient(testAccountIndex))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer)

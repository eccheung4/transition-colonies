import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getNetworkClient } from '../actions/networkActions'
import App from '../components/App'

class AppContainer extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    if (process.env.NODE_ENV !== 'production') {
      let testAccountIndex = prompt('test account index:', '0')
      this.props.getNetworkClient(Number(testAccountIndex))
    } else {
      this.props.getNetworkClient()
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      scroll(0,0)
    }
  }

  render() {
    return (
      <App
        getNetworkClientError={this.props.getNetworkClientError}
        getNetworkClientLoading={this.props.getNetworkClientLoading || this.props.networkClient === null}
        getNetworkClientSuccess={this.props.getNetworkClientSuccess}
      />
    )
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

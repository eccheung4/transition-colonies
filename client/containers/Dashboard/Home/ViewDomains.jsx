import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getDomains } from '../../../actions/domainActions'
import ViewDomains from '../../../components/Dashboard/Home/ViewDomains'

class ViewDomainsContainer extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    if (this.props.domains === null) {
      this.props.getDomains(this.props.colonyClient)
    }
  }

  componentDidUpdate() {
    if (this.props.domains === null && !this.props.getDomainsLoading) {
      this.props.getDomains(this.props.colonyClient)
    }
  }

  render() {
    return (
      <ViewDomains
        domains={this.props.domains}
        getDomainsError={this.props.getDomainsError}
        getDomainsLoading={this.props.getDomainsLoading}
        getDomainsSuccess={this.props.getDomainsSuccess}
      />
    )
  }

}

const mapStateToProps = state => ({
  colonyClient: state.colony.colonyClient,
  domains: state.domain.domains,
  getDomainsError: state.domain.getDomainsError,
  getDomainsLoading: state.domain.getDomainsLoading,
  getDomainsSuccess: state.domain.getDomainsSuccess,
})

const mapDispatchToProps = dispatch => ({
  getDomains(colonyClient) {
    dispatch(getDomains(colonyClient))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(ViewDomainsContainer)

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fundDomain } from '../../../actions/domainActions'
import FundDomain from '../../../components/Dashboard/Home/FundDomain'

class FundDomainContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      amount: 0,
      domainId: 2,
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    let state = this.state
    state[event.target.id] = event.target.value
    this.setState({ ...state })
  }

  handleClick() {
    this.props.fundDomain(
      this.props.colonyClient,
      Number(this.state.domainId),
      this.state.amount,
    )
  }

  render() {
    return (
      <FundDomain
        amount={this.state.amount}
        domainId={this.state.domainId}
        fundDomainError={this.props.fundDomainError}
        fundDomainLoading={this.props.fundDomainLoading}
        fundDomainSuccess={this.props.fundDomainSuccess}
        handleClick={this.handleClick}
        handleChange={this.handleChange}
      />
    )
  }

}

const mapStateToProps = state => ({
  colonyClient: state.colony.colonyClient,
  fundDomainError: state.token.fundDomainError,
  fundDomainLoading: state.token.fundDomainLoading,
  fundDomainSuccess: state.token.fundDomainSuccess,
})

const mapDispatchToProps = dispatch => ({
  fundDomain(colonyClient, domainId, amount) {
    dispatch(fundDomain(colonyClient, domainId, amount))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(FundDomainContainer)

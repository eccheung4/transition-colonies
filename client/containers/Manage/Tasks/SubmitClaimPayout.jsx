import React, { Component } from 'react'
import { connect } from 'react-redux'
import { submitClaimPayout } from '../../../actions/tasksActions'
import SubmitClaimPayout from '../../../components/Manage/Tasks/SubmitClaimPayout'

class SubmitClaimPayoutContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      role: 'MANAGER',
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidUpdate(prevProps) {
    if (this.props.submitClaimPayoutSuccess && prevProps.submitClaimPayoutSuccess !== this.props.submitClaimPayoutSuccess) {
      this.setState({
        role: 'MANAGER',
      })
    }
  }

  handleChange(event) {
    let state = this.state
    state[event.target.id] = event.target.value
    this.setState({ ...state })
  }

  handleClick() {
    this.props.submitClaimPayout(
      this.props.colonyClient,
      Number(this.props.match.params.id),
      this.state.role,
      this.state.token
    )
  }

  render() {
    return (
      <SubmitClaimPayout
        handleChange={this.handleChange}
        handleClick={this.handleClick}
        token={this.state.token}
        role={this.state.role}
        submitClaimPayoutError={this.props.submitClaimPayoutError}
        submitClaimPayoutLoading={this.props.submitClaimPayoutLoading}
        submitClaimPayoutSuccess={this.props.submitClaimPayoutSuccess}
      />
    )
  }

}

const mapStateToProps = state => ({
  colonyClient: state.colony.colonyClient,
  submitClaimPayoutError: state.tasks.submitClaimPayoutError,
  submitClaimPayoutLoading: state.tasks.submitClaimPayoutLoading,
  submitClaimPayoutSuccess: state.tasks.submitClaimPayoutSuccess,
})

const mapDispatchToProps = dispatch => ({
  submitClaimPayout(colonyClient, taskId, role, token) {
    dispatch(submitClaimPayout(colonyClient, taskId, role, token))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(SubmitClaimPayoutContainer)

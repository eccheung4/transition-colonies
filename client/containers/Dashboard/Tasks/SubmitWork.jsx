import React, { Component } from 'react'
import { connect } from 'react-redux'
import { submitWork } from '../../../actions/taskActions'
import SubmitWork from '../../../components/Dashboard/Tasks/SubmitWork'

class SubmitWorkContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      deliverable: {
        message: '',
      },
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {

    // set deliverable
    let deliverable = this.state.deliverable

    // set deliverable property
    deliverable[event.target.id] = event.target.value

    // set state
    this.setState({ deliverable })

  }

  handleClick() {

    // submit task
    this.props.submitWork(
      this.props.colonyClient,
      Number(this.props.match.params.id),
      this.state.deliverable
    )

  }

  render() {
    return (
      <SubmitWork
        deliverable={this.state.deliverable}
        handleChange={this.handleChange}
        handleClick={this.handleClick}
        submitWorkError={this.props.submitWorkError}
        submitWorkLoading={this.props.submitWorkLoading}
        submitWorkSuccess={this.props.submitWorkSuccess}
      />
    )
  }

}

const mapStateToProps = state => ({
  colonyClient: state.colony.colonyClient,
  submitWorkError: state.task.submitWorkError,
  submitWorkLoading: state.task.submitWorkLoading,
  submitWorkSuccess: state.task.submitWorkSuccess,
})

const mapDispatchToProps = dispatch => ({
  submitWork(colonyClient, taskId, deliverable) {
    dispatch(submitWork(colonyClient, taskId, deliverable))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(SubmitWorkContainer)

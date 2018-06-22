import React, { Component } from 'react'
import { connect } from 'react-redux'
import { submitTask } from '../../../actions/taskActions'
import SubmitTask from '../../../components/Dashboard/Tasks/SubmitTask'

class SubmitTaskContainer extends Component {

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
    this.props.submitTask(
      this.props.colonyClient,
      Number(this.props.match.params.id),
      this.state.deliverable
    )

  }

  render() {
    return (
      <SubmitTask
        deliverable={this.state.deliverable}
        handleChange={this.handleChange}
        handleClick={this.handleClick}
        submitTaskError={this.props.submitTaskError}
        submitTaskLoading={this.props.submitTaskLoading}
        submitTaskSuccess={this.props.submitTaskSuccess}
      />
    )
  }

}

const mapStateToProps = state => ({
  colonyClient: state.colony.colonyClient,
  submitTaskError: state.task.submitTaskError,
  submitTaskLoading: state.task.submitTaskLoading,
  submitTaskSuccess: state.task.submitTaskSuccess,
})

const mapDispatchToProps = dispatch => ({
  submitTask(colonyClient, taskId, deliverable) {
    dispatch(submitTask(colonyClient, taskId, deliverable))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(SubmitTaskContainer)

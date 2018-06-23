import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import * as taskActions from '../../../actions/taskActions'
import Task from '../../../components/Dashboard/Tasks/Task'

class TaskContainer extends Component {

  constructor(props) {
    super(props)
    this.cancelTask = this.cancelTask.bind(this)
    this.editTask = this.editTask.bind(this)
    this.finalizeTask = this.finalizeTask.bind(this)
    this.signTask = this.signTask.bind(this)
    this.submitRating = this.submitRating.bind(this)
    this.submitWork = this.submitWork.bind(this)
  }

  cancelTask() {
    this.props.cancelTask(this.props.colonyClient, this.props.task.id)
  }

  editTask() {
    this.props.history.push(`/dashboard/tasks/edit/${this.props.task.id}`)
  }

  finalizeTask() {
    this.props.finalizeTask(this.props.colonyClient, this.props.task.id)
  }

  signTask() {
    this.props.signTask(this.props.colonyClient, this.props.task.id)
  }

  submitRating() {
    this.props.history.push(`/dashboard/tasks/rate/${this.props.task.id}`)
  }

  submitWork() {
    this.props.history.push(`/dashboard/tasks/submit/${this.props.task.id}`)
  }

  render() {
    return (
      <Task
        cancelTask={this.cancelTask}
        cancelTaskError={this.props.cancelTaskError}
        cancelTaskLoading={this.props.cancelTaskLoading}
        cancelTaskSuccess={this.props.cancelTaskSuccess}
        editTask={this.editTask}
        finalizeTask={this.finalizeTask}
        finalizeTaskError={this.props.finalizeTaskError}
        finalizeTaskLoading={this.props.finalizeTaskLoading}
        finalizeTaskSuccess={this.props.finalizeTaskSuccess}
        signTask={this.signTask}
        signTaskError={this.props.signTaskError}
        signTaskLoading={this.props.signTaskLoading}
        signTaskSuccess={this.props.signTaskSuccess}
        submitRating={this.submitRating}
        submitWork={this.submitWork}
        task={this.props.task}
      />
    )
  }

}

const mapStateToProps = state => ({
  cancelTaskError: state.task.cancelTaskError,
  cancelTaskLoading: state.task.cancelTaskLoading,
  cancelTaskSuccess: state.task.cancelTaskSuccess,
  colonyClient: state.colony.colonyClient,
  finalizeTaskError: state.task.finalizeTaskError,
  finalizeTaskLoading: state.task.finalizeTaskLoading,
  finalizeTaskSuccess: state.task.finalizeTaskSuccess,
  signTaskError: state.task.signTaskTaskError,
  signTaskLoading: state.task.signTaskTaskLoading,
  signTaskSuccess: state.task.signTaskTaskSuccess,
})

const mapDispatchToProps = dispatch => ({
  cancelTask(colonyClient, taskId) {
    dispatch(taskActions.cancelTask(colonyClient, taskId))
  },
  finalizeTask(colonyClient, taskId) {
    dispatch(taskActions.finalizeTask(colonyClient, taskId))
  },
  signTask(colonyClient, taskId) {
    dispatch(taskActions.signTask(colonyClient, taskId))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(TaskContainer))

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import * as taskActions from '../../../actions/taskActions'
import TaskActions from '../../../components/Dashboard/Tasks/TaskActions'

class TaskActionsContainer extends Component {

  constructor(props) {
    super(props)
    this.cancelTask = this.cancelTask.bind(this)
    this.editTask = this.editTask.bind(this)
    this.finalizeTask = this.finalizeTask.bind(this)
    this.fundTask = this.fundTask.bind(this)
    this.signTask = this.signTask.bind(this)
    this.submitRating = this.submitRating.bind(this)
    this.submitWork = this.submitWork.bind(this)
    this.viewTask = this.viewTask.bind(this)
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

  fundTask() {
    this.props.history.push(`/dashboard/tasks/fund/${this.props.task.id}`)
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

  viewTask() {
    this.props.history.push(`/dashboard/tasks/${this.props.task.id}`)
  }

  render() {
    return (
      <TaskActions
        cancelTask={this.cancelTask}
        editTask={this.editTask}
        error={
          this.props.cancelTaskError ||
          this.props.finalizeTaskError ||
          this.props.signTaskError
        }
        finalizeTask={this.finalizeTask}
        fundTask={this.fundTask}
        loading={
          this.props.cancelTaskLoading ||
          this.props.finalizeTaskLoading ||
          this.props.signTaskLoading
        }
        signTask={this.signTask}
        submitRating={this.submitRating}
        submitWork={this.submitWork}
        success={
          this.props.cancelTaskSuccess ||
          this.props.finalizeTaskSuccess ||
          this.props.signTaskSuccess
        }
        task={this.props.task}
        viewTask={this.viewTask}
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
  fundTaskError: state.task.fundTaskError,
  fundTaskLoading: state.task.fundTaskLoading,
  fundTaskSuccess: state.task.fundTaskSuccess,
  signTaskError: state.task.signTaskError,
  signTaskLoading: state.task.signTaskLoading,
  signTaskSuccess: state.task.signTaskSuccess,
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(TaskActionsContainer))

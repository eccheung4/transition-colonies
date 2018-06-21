import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as taskActions from '../../../actions/taskActions'
import Task from '../../../components/Dashboard/Tasks/Task'

class TaskContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      dueDate: null,
    }
    this.cancelTask = this.cancelTask.bind(this)
    this.claimTask = this.claimTask.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.setDueDate = this.setDueDate.bind(this)
    this.signDueDate = this.signDueDate.bind(this)
  }

  cancelTask() {
    this.props.cancelTask(this.props.colonyClient, this.props.task.id)
  }

  claimTask() {
    this.props.claimTask(this.props.colonyClient, this.props.task.id)
  }

  setDueDate() {
    if (this.state.dueDate !== null) {
      this.props.setTaskDueDate(this.props.colonyClient, this.props.task.id, this.state.dueDate)
    }
  }

  signDueDate() {
    this.props.signTaskDueDate(this.props.colonyClient, this.props.task.id)
  }

  handleChange(event) {
    this.setState({ dueDate: event.target.value })
  }

  render() {
    return (
      <Task
        cancelTask={this.cancelTask}
        cancelTaskError={this.props.cancelTaskError}
        cancelTaskLoading={this.props.cancelTaskLoading}
        cancelTaskSuccess={this.props.cancelTaskSuccess}
        claimTask={this.claimTask}
        claimTaskError={this.props.claimTaskError}
        claimTaskLoading={this.props.claimTaskLoading}
        claimTaskSuccess={this.props.claimTaskSuccess}
        handleChange={this.handleChange}
        setDueDate={this.setDueDate}
        setTaskDueDateError={this.props.setTaskDueDateError}
        setTaskDueDateLoading={this.props.setTaskDueDateLoading}
        setTaskDueDateSuccess={this.props.setTaskDueDateSuccess}
        signDueDate={this.signDueDate}
        signTaskDueDateError={this.props.signTaskDueDateError}
        signTaskDueDateLoading={this.props.signTaskDueDateLoading}
        signTaskDueDateSuccess={this.props.signTaskDueDateSuccess}
        task={this.props.task}
      />
    )
  }

}

const mapStateToProps = state => ({
  cancelTaskError: state.task.cancelTaskError,
  cancelTaskLoading: state.task.cancelTaskLoading,
  cancelTaskSuccess: state.task.cancelTaskSuccess,
  claimTaskError: state.task.claimTaskError,
  claimTaskLoading: state.task.claimTaskLoading,
  claimTaskSuccess: state.task.claimTaskSuccess,
  colonyClient: state.colony.colonyClient,
  setTaskDueDateError: state.task.setTaskDueDateError,
  setTaskDueDateLoading: state.task.setTaskDueDateLoading,
  setTaskDueDateSuccess: state.task.setTaskDueDateSuccess,
  signTaskDueDateError: state.task.signTaskDueDateError,
  signTaskDueDateLoading: state.task.signTaskDueDateLoading,
  signTaskDueDateSuccess: state.task.signTaskDueDateSuccess,
})

const mapDispatchToProps = dispatch => ({
  cancelTask(colonyClient, taskId) {
    dispatch(taskActions.cancelTask(colonyClient, taskId))
  },
  claimTask(colonyClient, taskId) {
    dispatch(taskActions.claimTask(colonyClient, taskId))
  },
  setTaskDueDate(colonyClient, taskId, dueDate) {
    dispatch(taskActions.setTaskDueDate(colonyClient, taskId, dueDate))
  },
  signTaskDueDate(colonyClient, taskId) {
    dispatch(taskActions.signTaskDueDate(colonyClient, taskId))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(TaskContainer)

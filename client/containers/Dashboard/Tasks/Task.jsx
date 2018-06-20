import React, { Component } from 'react'
import { connect } from 'react-redux'
import { cancelTask, claimTask, setTaskDueDate } from '../../../actions/taskActions'
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
  }

  cancelTask() {
    this.props.cancelTask(this.props.colonyClient, this.props.task.id)
  }

  claimTask() {
    this.props.claimTask(this.props.colonyClient, this.props.task.id)
  }

  setDueDate() {

    console.log('setDueDate', this.state.dueDate)

    if (this.state.dueDate !== null) {
      this.props.setTaskDueDate(this.props.colonyClient, this.props.task.id, this.state.dueDate)
    }
  }

  handleChange(event) {

    console.log('handlChange', event.target.value)

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
})

const mapDispatchToProps = dispatch => ({
  cancelTask(colonyClient, taskId) {
    dispatch(cancelTask(colonyClient, taskId))
  },
  claimTask(colonyClient, taskId) {
    dispatch(claimTask(colonyClient, taskId))
  },
  setTaskDueDate(colonyClient, taskId, dueDate) {
    dispatch(setTaskDueDate(colonyClient, taskId, dueDate))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(TaskContainer)

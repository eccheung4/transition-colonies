import React, { Component } from 'react'
import { connect } from 'react-redux'
import { cancelTask, claimTask } from '../../../actions/taskActions'
import Task from '../../../components/Dashboard/Tasks/Task'

class TaskContainer extends Component {

  constructor(props) {
    super(props)
    this.cancelTask = this.cancelTask.bind(this)
    this.claimTask = this.claimTask.bind(this)
  }

  cancelTask() {
    this.props.cancelTask(this.props.colonyClient, this.props.task.id)
  }

  claimTask() {
    this.props.claimTask(this.props.colonyClient, this.props.task.id)
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
})

export default connect(mapStateToProps, mapDispatchToProps)(TaskContainer)

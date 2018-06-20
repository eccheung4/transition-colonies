import React, { Component } from 'react'
import { connect } from 'react-redux'
import { cancelTask } from '../../../actions/taskActions'
import Task from '../../../components/Dashboard/Tasks/Task'

class TaskContainer extends Component {

  constructor(props) {
    super(props)
    this.cancelTask = this.cancelTask.bind(this)
  }

  cancelTask() {
    this.props.cancelTask(this.props.colonyClient, this.props.task.id)
  }

  render() {
    return (
      <Task
        cancelTask={this.cancelTask}
        cancelTaskError={this.props.cancelTaskError}
        cancelTaskLoading={this.props.cancelTaskLoading}
        cancelTaskSuccess={this.props.cancelTaskSuccess}
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
})

const mapDispatchToProps = dispatch => ({
  cancelTask(colonyClient, taskId) {
    dispatch(cancelTask(colonyClient, taskId))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(TaskContainer)

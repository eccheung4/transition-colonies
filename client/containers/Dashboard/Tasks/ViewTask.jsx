import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getTask } from '../../../actions/taskActions'
import ViewTask from '../../../components/Dashboard/Tasks/ViewTask'

class ViewTaskContainer extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const taskId = Number(this.props.match.params.id)
    const task = this.props.tasks.find(task => task.id === taskId)
    this.props.getTask(this.props.colonyClient, task)
  }

  render() {
    return (
      <ViewTask
        getTaskError={this.props.getTaskError}
        getTaskLoading={this.props.getTaskLoading}
        getTaskSuccess={this.props.getTaskSuccess}
        task={this.props.task}
      />
    )
  }

}

const mapStateToProps = state => ({
  colonyClient: state.colony.colonyClient,
  getTaskError: state.task.getTaskError,
  getTaskLoading: state.task.getTaskLoading,
  getTaskSuccess: state.task.getTaskSuccess,
  task: state.task.task,
  tasks: state.task.tasks,
})

const mapDispatchToProps = dispatch => ({
  getTask(colonyClient, task) {
    dispatch(getTask(colonyClient, task))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(ViewTaskContainer)

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createTask } from '../../../actions/taskActions'
import CreateTask from '../../../components/Dashboard/Tasks/CreateTask'

class CreateTaskContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      taskTitle: '',
      taskDescription: '',
      taskDomainId: 1,
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleChange(event) {
    if (event.target.id === 'taskTitle') {
      this.setState({ taskTitle: event.target.value })
    } else if (event.target.id === 'taskDescription') {
      this.setState({ taskDescription: event.target.value })
    } else if (event.target.id === 'taskDomainId') {
      this.setState({ taskDomainId: Number(event.target.value) })
    }
  }

  handleClick() {
    this.props.createTask(
      this.props.colonyClient,
      this.state.taskTitle,
      this.state.taskDescription,
      this.state.taskDomainId
    )
  }

  render() {
    if (this.props.colonyClient === null) {
      return <div />
    }
    return (
      <CreateTask
        createTaskError={this.props.createTaskError}
        createTaskLoading={this.props.createTaskLoading}
        createTaskSuccess={this.props.createTaskSuccess}
        handleChange={this.handleChange}
        handleClick={this.handleClick}
      />
    )
  }

}

const mapStateToProps = state => ({
  createTaskError: state.task.createTaskError,
  createTaskLoading: state.task.createTaskLoading,
  createTaskSuccess: state.task.createTaskSuccess,
  colonyClient: state.colony.colonyClient,
})

const mapDispatchToProps = dispatch => ({
  createTask(colonyClient, taskTitle, taskDescription, taskDomainId) {
    dispatch(createTask(colonyClient, taskTitle, taskDescription, taskDomainId))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateTaskContainer)

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createTask } from '../../../actions/taskActions'
import CreateTask from '../../../components/Dashboard/Tasks/CreateTask'

class CreateTaskContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      task: {
        domainId: 1,
        dueDate: '',
        roles: {
          evaluator: '',
          manager: '',
          worker: '',
        },
        skillId: 0,
        specification: {
          description: '',
          title: '',
        },
      },
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleChange(event) {

    // set task
    let task = this.state.task

    // check event target id
    switch (event.target.id) {

      // roles

      case 'evaluator':
      case 'manager':
      case 'worker':
        task.roles[event.target.id] = event.target.value
        break

      // specification

      case 'description':
      case 'title':
        task.specification[event.target.id] = event.target.value
        break

      // default

      default:
        task[event.target.id] = event.target.value
        break

    }

    // set state
    this.setState({ task })

  }

  handleClick() {

    // set task
    const task = {
      domainId: this.state.task.domainId,
      dueDate: this.state.task.dueDate,
      roles: this.state.task.roles,
      skillId: this.state.task.skillId,
      specification: this.state.task.specification,
    }

    // create task
    this.props.createTask(this.props.colonyClient, task)

  }

  render() {
    return (
      <CreateTask
        createTaskError={this.props.createTaskError}
        createTaskLoading={this.props.createTaskLoading}
        createTaskSuccess={this.props.createTaskSuccess}
        handleChange={this.handleChange}
        handleClick={this.handleClick}
        task={this.state.task}
      />
    )
  }

}

const mapStateToProps = state => ({
  colonyClient: state.colony.colonyClient,
  createTaskError: state.task.createTaskError,
  createTaskLoading: state.task.createTaskLoading,
  createTaskSuccess: state.task.createTaskSuccess,
})

const mapDispatchToProps = dispatch => ({
  createTask(colonyClient, task) {
    dispatch(createTask(colonyClient, task))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateTaskContainer)

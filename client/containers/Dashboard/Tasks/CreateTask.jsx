import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createTask } from '../../../actions/taskActions'
import CreateTask from '../../../components/Dashboard/Tasks/CreateTask'

class CreateTaskContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      submitted: false,
      task: {
        domainId: 2,
        dueDate: '',
        payouts: {
          evaluator: 0,
          manager: 0,
          worker: 0,
        },
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

  componentDidUpdate() {
    if (this.state.submitted && this.props.createTaskSuccess) {
      this.props.history.push(`/dashboard/tasks/${this.props.task.id}`)
    }
  }

  handleChange(event) {

    // set task
    let task = this.state.task

    // check event target id
    switch (event.target.id) {

      // payouts

      case 'payout-evaluator':
      case 'payout-manager':
      case 'payout-worker':
        task.payouts[event.target.id.substring(7)] = event.target.value
        break

      // roles

      case 'role-evaluator':
      case 'role-manager':
      case 'role-worker':
        task.roles[event.target.id.substring(5)] = event.target.value
        break

      // specification

      case 'specification-description':
      case 'specification-title':
        task.specification[event.target.id.substring(14)] = event.target.value
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
      payouts: this.state.task.payouts,
      roles: this.state.task.roles,
      skillId: this.state.task.skillId,
      specification: this.state.task.specification,
    }

    // create task
    this.props.createTask(this.props.colonyClient, task)

    // set state
    this.setState({ submitted: true })

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
  task: state.task.task,
})

const mapDispatchToProps = dispatch => ({
  createTask(colonyClient, task) {
    dispatch(createTask(colonyClient, task))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateTaskContainer)

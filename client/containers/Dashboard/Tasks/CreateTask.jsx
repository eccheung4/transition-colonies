import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createTask } from '../../../actions/taskActions'
import CreateTask from '../../../components/Dashboard/Tasks/CreateTask'

class CreateTaskContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      description: '',
      domainId: 1,
      dueDate: null,
      roles: {
        evaluator: '',
        manager: '',
        worker: '',
      },
      skillId: 0,
      title: '',
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleChange(event) {
    if (event.target.id === 'title') {
      this.setState({ title: event.target.value })
    } else if (event.target.id === 'description') {
      this.setState({ description: event.target.value })
    } else if (event.target.id === 'domainId') {
      this.setState({ domainId: Number(event.target.value) })
    } else if (event.target.id === 'dueDate') {
      this.setState({ dueDate: event.target.value })
    } else if (event.target.id === 'evaluator') {
      this.setState({ roles: { ...this.state.roles, evaluator: event.target.value } })
    } else if (event.target.id === 'manager') {
      this.setState({ roles: { ...this.state.roles, manager: event.target.value } })
    } else if (event.target.id === 'worker') {
      this.setState({ roles: { ...this.state.roles, worker: event.target.value } })
    } else if (event.target.id === 'skillId') {
      this.setState({ skillId: Number(event.target.value) })
    }
  }

  handleClick() {
    this.props.createTask(
      this.props.colonyClient,
      this.state.title,
      this.state.description,
      this.state.domainId,
      this.state.dueDate,
      this.state.roles,
      this.state.skillId,
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
  colonyClient: state.colony.colonyClient,
  createTaskError: state.task.createTaskError,
  createTaskLoading: state.task.createTaskLoading,
  createTaskSuccess: state.task.createTaskSuccess,
})

const mapDispatchToProps = dispatch => ({
  createTask(colonyClient, title, description, domainId, dueDate, roles, skillId) {
    dispatch(createTask(colonyClient, title, description, domainId, dueDate, roles, skillId))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateTaskContainer)

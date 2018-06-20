import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createTask } from '../../../actions/taskActions'
import CreateTask from '../../../components/Dashboard/Tasks/CreateTask'

class CreateTaskContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      title: '',
      description: '',
      domainId: 1,
      dueDate: null,
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
    }
  }

  handleClick() {
    this.props.createTask(
      this.props.colonyClient,
      this.state.title,
      this.state.description,
      this.state.domainId,
      this.state.dueDate
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
  createTask(colonyClient, title, description, domainId, dueDate) {
    dispatch(createTask(colonyClient, title, description, domainId, dueDate))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateTaskContainer)

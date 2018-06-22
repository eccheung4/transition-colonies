import React, { Component } from 'react'
import { connect } from 'react-redux'
import ViewTask from '../../../components/Dashboard/Tasks/ViewTask'

class ViewTaskContainer extends Component {

  constructor(props) {
    super(props)
    this.state = { task: null }
  }

  componentDidUpdate(prevProps) {
    if (
      (this.state.task === null || prevProps.task !== this.props.task) &&
      (!this.props.createTaskLoading && !this.props.submitWorkLoading && !this.props.updateTaskLoading) &&
      this.props.getTaskSuccess
    ) {
      this.setState({ task: this.props.task })
    } else if (
      this.state.task !== null &&
      (this.props.createTaskLoading || this.props.submitWorkLoading || this.props.updateTaskLoading)
    ) {
      this.setState({ task: null })
    }
  }

  render() {
    if (this.state.task === null) {
      return <div />
    }
    return (
      <ViewTask
        task={this.state.task}
      />
    )
  }

}

const mapStateToProps = state => ({
  createTaskLoading: state.task.createTaskLoading,
  getTaskSuccess: state.task.getTaskSuccess,
  task: state.task.task,
  submitWorkLoading: state.task.submitWorkLoading,
  updateTaskLoading: state.task.updateTaskLoading,
})

export default connect(mapStateToProps, null)(ViewTaskContainer)

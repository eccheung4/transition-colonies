import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getTasks } from '../../../actions/taskActions'
import ViewTasks from '../../../components/Dashboard/Tasks/ViewTasks'

class ViewTasksContainer extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    if (this.props.tasks === null) {
      this.props.getTasks(this.props.colonyClient)
    }
  }

  render() {
    if (this.props.getTasksError) {
      return <div>{this.props.getTasksError}</div>
    }
    if (this.props.getTasksLoading || this.props.tasks === null) {
      return <div>{'loading...'}</div>
    }
    return (
      <ViewTasks
        getTasksError={this.props.getTasksError}
        getTasksLoading={this.props.getTasksLoading}
        getTasksSuccess={this.props.getTasksSuccess}
        tasks={this.props.tasks}
      />
    )
  }

}

const mapStateToProps = state => ({
  colonyClient: state.colony.colonyClient,
  getTasksError: state.task.getTasksError,
  getTasksLoading: state.task.getTasksLoading,
  getTasksSuccess: state.task.getTasksSuccess,
  tasks: state.task.tasks,
})

const mapDispatchToProps = dispatch => ({
  getTasks(colonyClient) {
    dispatch(getTasks(colonyClient))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(ViewTasksContainer)

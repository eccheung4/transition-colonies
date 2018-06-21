import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as taskActions from '../../../actions/taskActions'
import Task from '../../../components/Dashboard/Tasks/Task'

class TaskContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      dueDate: null,
      role: 'EVALUATOR',
      skill: 0,
      user: '0x0'
    }
    this.cancelTask = this.cancelTask.bind(this)
    this.claimTask = this.claimTask.bind(this)
    this.finalizeTask = this.finalizeTask.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.setDueDate = this.setDueDate.bind(this)
    this.setRole = this.setRole.bind(this)
    this.setSkill = this.setSkill.bind(this)
    this.signDueDate = this.signDueDate.bind(this)
  }

  cancelTask() {
    this.props.cancelTask(this.props.colonyClient, this.props.task.id)
  }

  claimTask() {
    this.props.claimTask(this.props.colonyClient, this.props.task.id)
  }

  finalizeTask() {
    this.props.finalizeTask(this.props.colonyClient, this.props.task.id)
  }

  setDueDate() {
    if (this.state.dueDate !== null) {
      this.props.setTaskDueDate(this.props.colonyClient, this.props.task.id, this.state.dueDate)
    }
  }

  setRole() {
    if (this.state.user !== '0x0') {
      this.props.setTaskRole(this.props.colonyClient, this.props.task.id, this.state.role, this.state.user)
    }
  }

  setSkill() {
    if (this.state.user !== 0) {
      this.props.setTaskSkill(this.props.colonyClient, this.props.task.id, this.state.skill)
    }
  }

  signDueDate() {
    this.props.signTaskDueDate(this.props.colonyClient, this.props.task.id)
  }

  handleChange(event) {
    if (event.target.id === 'dueDate') {
      this.setState({ dueDate: event.target.value })
    } else if (event.target.id === 'role') {
      this.setState({ role: event.target.value })
    } else if (event.target.id === 'skill') {
      this.setState({ skill: Number(event.target.value) })
    } else if (event.target.id === 'user') {
      this.setState({ user: event.target.value })
    }
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
        finalizeTask={this.finalizeTask}
        finalizeTaskError={this.props.finalizeTaskError}
        finalizeTaskLoading={this.props.finalizeTaskLoading}
        finalizeTaskSuccess={this.props.finalizeTaskSuccess}
        handleChange={this.handleChange}
        setDueDate={this.setDueDate}
        setTaskDueDateError={this.props.setTaskDueDateError}
        setTaskDueDateLoading={this.props.setTaskDueDateLoading}
        setTaskDueDateSuccess={this.props.setTaskDueDateSuccess}
        setRole={this.setRole}
        setTaskRoleError={this.props.setTaskRoleError}
        setTaskRoleLoading={this.props.setTaskRoleLoading}
        setTaskRoleSuccess={this.props.setTaskRoleSuccess}
        setSkill={this.setSkill}
        setTaskSkillError={this.props.setTaskSkillError}
        setTaskSkillLoading={this.props.setTaskSkillLoading}
        setTaskSkillSuccess={this.props.setTaskSkillSuccess}
        signDueDate={this.signDueDate}
        signTaskDueDateError={this.props.signTaskDueDateError}
        signTaskDueDateLoading={this.props.signTaskDueDateLoading}
        signTaskDueDateSuccess={this.props.signTaskDueDateSuccess}
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
  finalizeTaskError: state.task.finalizeTaskError,
  finalizeTaskLoading: state.task.finalizeTaskLoading,
  finalizeTaskSuccess: state.task.finalizeTaskSuccess,
  setTaskDueDateError: state.task.setTaskDueDateError,
  setTaskDueDateLoading: state.task.setTaskDueDateLoading,
  setTaskDueDateSuccess: state.task.setTaskDueDateSuccess,
  setTaskRoleError: state.task.setTaskRoleError,
  setTaskRoleLoading: state.task.setTaskRoleLoading,
  setTaskRoleSuccess: state.task.setTaskRoleSuccess,
  signTaskDueDateError: state.task.signTaskDueDateError,
  signTaskDueDateLoading: state.task.signTaskDueDateLoading,
  signTaskDueDateSuccess: state.task.signTaskDueDateSuccess,
})

const mapDispatchToProps = dispatch => ({
  cancelTask(colonyClient, taskId) {
    dispatch(taskActions.cancelTask(colonyClient, taskId))
  },
  claimTask(colonyClient, taskId) {
    dispatch(taskActions.claimTask(colonyClient, taskId))
  },
  finalizeTask(colonyClient, taskId) {
    dispatch(taskActions.finalizeTask(colonyClient, taskId))
  },
  setTaskDueDate(colonyClient, taskId, dueDate) {
    dispatch(taskActions.setTaskDueDate(colonyClient, taskId, dueDate))
  },
  setTaskRole(colonyClient, taskId, role, user) {
    dispatch(taskActions.setTaskRole(colonyClient, taskId, role, user))
  },
  setTaskSkill(colonyClient, taskId, skillId) {
    dispatch(taskActions.setTaskSkill(colonyClient, taskId, skillId))
  },
  signTaskDueDate(colonyClient, taskId) {
    dispatch(taskActions.signTaskDueDate(colonyClient, taskId))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(TaskContainer)

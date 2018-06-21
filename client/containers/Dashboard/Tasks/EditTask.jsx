import React, { Component } from 'react'
import { connect } from 'react-redux'
import formatDate from '../../../helpers/formatDate'
import { updateTask } from '../../../actions/taskActions'
import EditTask from '../../../components/Dashboard/Tasks/EditTask'

class EditTaskContainer extends Component {

  constructor(props) {
    super(props)
    this.state = { task: null }
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    this.findAndSetTask()
  }

  componentDidUpdate(prevProps) {
    if (this.props.tasks !== prevProps.tasks) {
      this.findAndSetTask()
    }
  }

  findAndSetTask() {
    const task = this.props.tasks.find(task => task.id === Number(this.props.match.params.id))
    this.setState({
      task: {
        domainId: task.domainId,
        dueDate: formatDate(task.dueDate),
        payouts: {
          evaluator: task.payouts.evaluator,
          worker: task.payouts.worker,
        },
        roles: {
          evaluator: task.roles.evaluator.address || '',
          manager: task.roles.manager.address || '',
          worker: task.roles.worker.address || '',
        },
        skillId: task.skillId,
        specification: {
          description: task.specification.description,
          title: task.specification.title,
        },
      },
    })
  }

  handleChange(event) {

    // set task
    let task = this.state.task

    // check event target id
    switch (event.target.id) {

      // payouts

      case 'payout-evaluator':
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

    // set prev and next
    const prev = this.props.tasks.find(task => task.id === Number(this.props.match.params.id))
    const next = this.state.task

    // declare task parameters
    let domainId, dueDate, payouts = {}, roles = {}, skillId, specification

    // set domainId if domainId has changed
    if (prev.domainId !== next.domainId) {
      domainId = next.domainId
    }

    // set dueDate if dueDate has changed
    if (prev.dueDate !== next.dueDate) {
      dueDate = next.dueDate
    }

    // set evaluator payout if evaluator payout has changed
    if (prev.payouts.evaluator.address !== next.payouts.evaluator) {
      payouts.evaluator = next.payouts.evaluator
    }

    // set worker payout if worker payout has changed
    if (prev.payouts.worker.address !== next.payouts.worker) {
      payouts.worker = next.payouts.worker
    }

    // set evaluator if evaluator has changed
    if (prev.roles.evaluator.address !== next.roles.evaluator) {
      roles.evaluator = next.roles.evaluator
    }

    // set manager if manager has changed
    if (prev.roles.manager.address !== next.roles.manager) {
      roles.manager = next.roles.manager
    }

    // set worker if worker has changed
    if (prev.roles.worker.address !== next.roles.worker) {
      roles.worker = next.roles.worker
    }

    // set skillId if skillId has changed
    if (prev.skillId !== next.skillId) {
      skillId = next.skillId
    }

    // set specification if specification has changed
    if (
      prev.specification.description !== next.specification.description ||
      prev.specification.title !== next.specification.title
    ) {
      specification = next.specification
    }

    // set task
    const task = {
      domainId,
      dueDate,
      id: prev.id,
      payouts,
      roles,
      skillId,
      specification,
    }

    // update task
    this.props.updateTask(this.props.colonyClient, task)

  }

  render() {
    if (this.state.task === null) {
      return <div />
    }
    return (
      <EditTask
        handleChange={this.handleChange}
        handleClick={this.handleClick}
        task={this.state.task}
        updateTaskError={this.props.updateTaskError}
        updateTaskLoading={this.props.updateTaskLoading}
        updateTaskSuccess={this.props.updateTaskSuccess}
      />
    )
  }

}

const mapStateToProps = state => ({
  colonyClient: state.colony.colonyClient,
  tasks: state.task.tasks,
  updateTaskError: state.task.updateTaskError,
  updateTaskLoading: state.task.updateTaskLoading,
  updateTaskSuccess: state.task.updateTaskSuccess,
})

const mapDispatchToProps = dispatch => ({
  updateTask(colonyClient, task) {
    dispatch(updateTask(colonyClient, task))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(EditTaskContainer)

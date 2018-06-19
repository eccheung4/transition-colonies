import React, { Component } from 'react'
import { connect } from 'react-redux'
import ViewTask from '../../../components/Dashboard/Tasks/ViewTask'

class ViewTaskContainer extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    if (this.props.task === null) {
      return <div />
    }
    return (
      <ViewTask
        task={this.props.task}
      />
    )
  }

}

const mapStateToProps = state => ({
  task: state.task.task,
})

export default connect(mapStateToProps, null)(ViewTaskContainer)

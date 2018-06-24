import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getSkills } from '../../../actions/skillsActions'
import ViewSkills from '../../../components/Manage/Skills/ViewSkills'

class ViewSkillsContainer extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    if (this.props.skills === null) {
      this.props.getSkills(this.props.networkClient)
    }
  }

  render() {
    return (
      <ViewSkills
        getSkillsError={this.props.getSkillsError}
        getSkillsLoading={this.props.getSkillsLoading}
        getSkillsSuccess={this.props.getSkillsSuccess}
        skills={this.props.skills}
      />
    )
  }

}

const mapStateToProps = state => ({
  getSkillsError: state.skills.getSkillsError,
  getSkillsLoading: state.skills.getSkillsLoading,
  getSkillsSuccess: state.skills.getSkillsSuccess,
  networkClient: state.network.networkClient,
  skills: state.skills.skills,
})

const mapDispatchToProps = dispatch => ({
  getSkills(networkClient) {
    dispatch(getSkills(networkClient))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(ViewSkillsContainer)

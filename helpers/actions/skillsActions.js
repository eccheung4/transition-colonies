// getSkillTitle

export const getSkillTitle = (skillId) => {

  // return skill title
  switch (skillId) {
    case 3:
      return 'Agriculture'
    case 4:
      return 'Communication'
    case 5:
      return 'Construction'
    case 6:
      return 'Economics'
    case 7:
      return 'Engineering'
    case 8:
      return 'Healthcare'
    case 9:
      return 'Technology'
    case 10:
      return 'Transportation'
    default:
      break
  }

}

// getSkill

export const getSkill = async (networkClient, skillId) => {

  // get skill
  const skill = await networkClient.getSkill.call({ skillId })

  // return skill
  return skill

}

// getSkills

export const getSkills = async (networkClient) => {

  // set skill id
  let skillId = 3

  // set skills
  let skills = []

  // get skills
  while (skillId <= 10) {

    // get skill
    let skill = await getSkill(networkClient, skillId)

    // append skill id
    skill.id = skillId

    // append skill title
    skill.title = getSkillTitle(skillId)

    // add skill to skills
    skills.push(skill)

    // increment id
    skillId++

  }

  // return skills
  return skills

}

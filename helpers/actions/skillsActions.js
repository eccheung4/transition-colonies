// getSkill

export const getSkill = async (networkClient, skillId) => {

  // get skill
  const skill = await networkClient.getSkill.call({ skillId })

  // return skill
  return skill

}

// getSkills

export const getSkills = async (networkClient) => {

  // get skill count
  const { count: skillCount } = await networkClient.getSkillCount.call()

  // set skill id
  let skillId = 1

  // set skills
  let skills = []

  // get skills
  while (skillId <= skillCount) {

    // get skill
    let skill = await getSkill(networkClient, skillId)

    // append skill id
    skill.id = skillId

    // add skill to skills
    skills.push(skill)

    // increment id
    skillId++

  }

  // return skills
  return skills

}

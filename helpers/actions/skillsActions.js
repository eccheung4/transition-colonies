// getSkill

export const getSkill = async (colonyClient, skillId) => {

  // get skill
  const skill = await colonyClient.getSkill.call({ skillId })

  // return skill
  return skill

}

// getSkills

export const getSkills = async (networkClient, colonyClient) => {

  // get skill count
  const { count: skillCount } = await networkClient.getSkillCount.call()

  // set skill id
  let skillId = 1

  // set skills
  let skills = []

  // get skills
  while (skillId <= skillCount) {

    // get skill
    const skill = await getSkill(networkClient, skillId)

    // add skill to skills
    skills.push(skill)

    // increment id
    skillId++

  }

  // return skills
  return skills

}

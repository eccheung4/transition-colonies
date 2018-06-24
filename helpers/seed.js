// seedGlobalSkills

export const seedGlobalSkills = async (networkClient) => {

  // get meta colony client
  const metaColonyClient = await networkClient.getMetaColonyClient()

  // add global skill "Agriculture" with id 3
  await metaColonyClient.addGlobalSkill.send({ parentSkillId: 1 })

  // add global skill "Communication" with id 4
  await metaColonyClient.addGlobalSkill.send({ parentSkillId: 1 })

  // add global skill "Construction" with id 5
  await metaColonyClient.addGlobalSkill.send({ parentSkillId: 1 })

  // add global skill "Economics" with id 6
  await metaColonyClient.addGlobalSkill.send({ parentSkillId: 1 })

  // add global skill "Engineering" with id 7
  await metaColonyClient.addGlobalSkill.send({ parentSkillId: 1 })

  // add global skill "Healthcare" with id 8
  await metaColonyClient.addGlobalSkill.send({ parentSkillId: 1 })

  // add global skill "Technology" with id 9
  await metaColonyClient.addGlobalSkill.send({ parentSkillId: 1 })

  // add global skill "Transportation" with id 10
  await metaColonyClient.addGlobalSkill.send({ parentSkillId: 1 })

  // return true
  return true

}

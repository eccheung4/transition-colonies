// import extended colony protocol
const ecp = require('../ecp')

// createTask

export const createTask = async (colonyClient, taskTitle, taskDescription, taskDomainId) => {

  // initialize extended colony protocol
  await ecp.init()

  // create specification hash
  const specificationHash = await ecp.saveTaskSpecification({
    title: taskTitle,
    description: taskDescription,
  })

  // stop extended colony protocol
  await ecp.stop()

  // create task
  const { eventData: { taskId }} = await colonyClient.createTask.send({
    domainId: taskDomainId,
    specificationHash,
  })

  // return task id
  return taskId

}

// getTask

export const getTask = async (colonyClient, taskId) => {

  // get task
  const task = await colonyClient.getTask.call({ taskId })

  // initialize extended colony protocol
  await ecp.init()

  // get specification from hash
  const specification = await ecp.getTaskSpecification(task.specificationHash)

  // stop extended colony protocol
  await ecp.stop()

  // return task with appended specification
  return { ...task, specification: { ...specification } }

}

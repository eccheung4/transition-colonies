// import extended colony protocol
const ecp = require('../ecp')

// cancelTask

export const cancelTask = async (colonyClient, taskId) => {

  // cancel task
  await colonyClient.cancelTask.send({ taskId })

  // return task id
  return taskId

}

// claimTask

export const claimTask = async (colonyClient, taskId) => {

  // set current user as task role worker
  await colonyClient.setTaskRoleUser.send({
    taskId,
    role: 'WORKER',
    user: colonyClient.adapter.wallet.address,
  })

  // return task id
  return taskId

}

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

  // get evaluator
  const evaluator = await colonyClient.getTaskRole.call({ taskId, role: 'EVALUATOR' })

  // get manager
  const manager = await colonyClient.getTaskRole.call({ taskId, role: 'MANAGER' })

  // get worker
  const worker = await colonyClient.getTaskRole.call({ taskId, role: 'WORKER' })

  // initialize extended colony protocol
  await ecp.init()

  // get specification from hash
  const specification = await ecp.getTaskSpecification(task.specificationHash)

  // stop extended colony protocol
  await ecp.stop()

  // return task with appended properties
  return {
    ...task,
    roles: {
      evaluator,
      manager,
      worker,
    },
    specification: {
      ...specification,
    },
  }

}

// getTasks

export const getTasks = async (colonyClient) => {

  // get task count
  const { count: taskCount } = await colonyClient.getTaskCount.call()

  // set task id
  let taskId = 1

  // set tasks
  let tasks = []

  // get tasks
  while (taskId <= taskCount) {

    // get task
    const task = await getTask(colonyClient, taskId)

    // push task to tasks
    tasks.push(task)

    // increment task id
    taskId++

  }

  // return tasks
  return tasks

}

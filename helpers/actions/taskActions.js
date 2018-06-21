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

export const createTask = async (colonyClient, title, description, domainId, dueDate, roles, skillId) => {

  // initialize extended colony protocol
  await ecp.init()

  // create specification hash
  const specificationHash = await ecp.saveTaskSpecification({ title, description })

  // stop extended colony protocol
  await ecp.stop()

  // create task
  const { eventData: { taskId }} = await colonyClient.createTask.send({ domainId, specificationHash })

  // check due date
  if (dueDate) {

    // set task due date
    await setTaskDueDate(colonyClient, taskId, dueDate)

  }

  // check skill id
  if (skillId) {

    // set task due date
    await setTaskSkill(colonyClient, taskId, skillId)

  }

  console.log('roles', roles)

  // check evaluator
  if (roles.evaluator) {

    // set task role
    await setTaskRole(colonyClient, taskId, 'EVALUATOR', roles.evaluator)

  }

  // check manager
  if (roles.manager) {

    // set task role
    await setTaskRole(colonyClient, taskId, 'MANAGER', roles.manager)

  }

  // check worker
  if (roles.worker) {

    // set task role
    await setTaskRole(colonyClient, taskId, 'WORKER', roles.worker)

  }

  // return task id
  return taskId

}

// finalizeTask

export const finalizeTask = async (colonyClient, taskId) => {

  // finalize task
  await colonyClient.finalizeTask.send({ taskId })

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

  // get pot balance
  const potBalance = await colonyClient.getPotBalance.call({
    potId: task.potId,
    source: colonyClient.token._contract.address,
  })

  // initialize extended colony protocol
  await ecp.init()

  // get specification from hash
  const specification = await ecp.getTaskSpecification(task.specificationHash)

  // stop extended colony protocol
  await ecp.stop()

  // return task with appended properties
  return {
    ...task,
    potBalance,
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

// setTaskDueDate

export const setTaskDueDate = async (colonyClient, taskId, dueDate) => {

  // start task due date operation
  const setDueDateOperation = await colonyClient.setTaskDueDate.startOperation({ taskId, dueDate: new Date(dueDate) })

  // check required signees includes current user address
  if (setDueDateOperation.requiredSignees.includes(colonyClient.adapter.wallet.address)) {

    // sign task due date operation
    await setDueDateOperation.sign()

  }

  // check for missing signees
  if (setDueDateOperation.missingSignees.length === 0) {

    // send task due date operation
    await setDueDateOperation.send()

  } else {

    // convert task due date operation to json
    const pendingOperation = setDueDateOperation.toJSON()

    // TODO update temporary solution
    localStorage.setItem('pendingOperation', pendingOperation)

    console.log('pendingOperation', pendingOperation)

  }

  // return task id
  return taskId

}

// setTaskRole

export const setTaskRole = async (colonyClient, taskId, role, user) => {

  // set task role
  const setTaskRoleUser = await colonyClient.setTaskRoleUser.send({ taskId, role, user })

  // return task id
  return taskId

}

// setTaskSkill

export const setTaskSkill = async (colonyClient, taskId, skillId) => {

  // set task role
  const setTaskRoleUser = await colonyClient.setTaskSkill.send({ taskId, skillId })

  // return task id
  return taskId

}

// signTaskDueDate

export const signTaskDueDate = async (colonyClient, taskId, operation) => {

  // TODO update temporary solution
  const pendingOperation = localStorage.getItem('pendingOperation')

  // restore operation
  const setDueDateOperation = await colonyClient.setTaskDueDate.restoreOperation(pendingOperation)

  // check required signees includes current user address
  if (setDueDateOperation.requiredSignees.includes(colonyClient.adapter.wallet.address)) {

    // sign task due date operation
    await setDueDateOperation.sign()

  }

  // check for missing signees
  if (setDueDateOperation.missingSignees.length === 0) {

    // send task due date operation
    await setDueDateOperation.send()

  } else {

    // convert task due date operation to json
    const pendingOperation = setDueDateOperation.toJSON()

    // TODO update temporary solution
    localStorage.setItem('pendingOperation', pendingOperation)

    console.log('pendingOperation', pendingOperation)

  }

  // return task id
  return taskId

}

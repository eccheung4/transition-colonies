// import extended protocol
const ecp = require('../ecp')

// cancelTask

export const cancelTask = async (colonyClient, taskId) => {

  // cancel task
  await colonyClient.cancelTask.send({ taskId })

  // return id
  return taskId

}

// claimTask

export const claimTask = async (colonyClient, taskId) => {

  // set current user as worker
  await colonyClient.setTaskRoleUser.send({
    taskId,
    role: 'WORKER',
    user: colonyClient.adapter.wallet.address,
  })

  // return id
  return taskId

}

// createTask

export const createTask = async (colonyClient, task) => {

  // initialize extended protocol
  await ecp.init()

  // create specification hash
  const specificationHash = await ecp.saveTaskSpecification(task.specification)

  // stop extended protocol
  await ecp.stop()

  // format domain id
  const domainId = Number(task.domainId)

  // create task
  const { eventData: { taskId }} = await colonyClient.createTask.send({
    domainId,
    specificationHash,
  })

  // check due date
  if (task.dueDate) {

    // format due date
    const dueDate = new Date(task.dueDate)

    // set task due date
    await setTaskDueDate(colonyClient, taskId, dueDate)

  }

  // check skill id
  if (task.skillId) {

    // format skillId
    const skillId = Number(task.skillId)

    // set task skill
    await setTaskSkill(colonyClient, taskId, skillId)

  }

  // check evaluator
  if (task.roles.evaluator) {

    // set task role
    await setTaskRole(colonyClient, taskId, 'EVALUATOR', task.roles.evaluator)

  }

  // check manager
  if (task.roles.manager) {

    // set task role
    await setTaskRole(colonyClient, taskId, 'MANAGER', task.roles.manager)

  }

  // check worker
  if (task.roles.worker) {

    // set task role
    await setTaskRole(colonyClient, taskId, 'WORKER', task.roles.worker)

  }

  // return id
  return taskId

}

// finalizeTask

export const finalizeTask = async (colonyClient, taskId) => {

  // finalize task
  await colonyClient.finalizeTask.send({ taskId })

  // return id
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

  // initialize extended protocol
  await ecp.init()

  // get specification from specification hash
  const specification = await ecp.getTaskSpecification(task.specificationHash)

  // stop extended protocol
  await ecp.stop()

  // return task
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

  // set id
  let taskId = 1

  // set tasks
  let tasks = []

  // get tasks
  while (taskId <= taskCount) {

    // get task
    const task = await getTask(colonyClient, taskId)

    // add task to tasks
    tasks.push(task)

    // increment id
    taskId++

  }

  // return tasks
  return tasks

}

// setTaskDomain

export const setTaskDomain = async (colonyClient, taskId, domainId) => {

  // set task domain
  const setTaskDomain = await colonyClient.setTaskDomain.send({ taskId, domainId })

  // return id
  return taskId

}

// setTaskDueDate

export const setTaskDueDate = async (colonyClient, taskId, dueDate) => {

  // start set task due date operation
  const setTaskDueDateOperation = await colonyClient.setTaskDueDate.startOperation({ taskId, dueDate })

  // check if required signees includes current user address
  if (setTaskDueDateOperation.requiredSignees.includes(colonyClient.adapter.wallet.address)) {

    // sign task due date operation
    await setTaskDueDateOperation.sign()

  }

  // check for missing signees
  if (setTaskDueDateOperation.missingSignees.length === 0) {

    // send task due date operation
    await setTaskDueDateOperation.send()

  } else {

    // serialize operation into JSON format
    const setTaskDueDateOperationJSON = setTaskDueDateOperation.toJSON()

    // save operation to local storage
    localStorage.setItem('setTaskDueDateOperationJSON', setTaskDueDateOperationJSON)

  }

  // return id
  return taskId

}

// setTaskRole

export const setTaskRole = async (colonyClient, taskId, role, user) => {

  // set task role
  const setTaskRoleUser = await colonyClient.setTaskRoleUser.send({ taskId, role, user })

  // return id
  return taskId

}

// setTaskSkill

export const setTaskSkill = async (colonyClient, taskId, skillId) => {

  // set task role
  const setTaskRoleUser = await colonyClient.setTaskSkill.send({ taskId, skillId })

  // return id
  return taskId

}

// setTaskBrief

export const setTaskBrief = async (colonyClient, taskId, specification) => {

  // initialize extended protocol
  await ecp.init()

  // create specification hash
  const specificationHash = await ecp.saveTaskSpecification(specification)

  // stop extended protocol
  await ecp.stop()

  // start set task brief operation
  const setTaskBriefOperation = await colonyClient.setTaskBrief.startOperation({ taskId, specificationHash })

  // serialize operation into JSON format
  const setTaskBriefOperationJSON = setTaskBriefOperation.toJSON()

  // sign task brief
  await signTaskBrief(colonyClient, setTaskBriefOperationJSON)

  // return id
  return taskId

}

// signTask

export const signTask = async (colonyClient, taskId) => {

  // get JSON formatted task brief operation from local storage
  const setTaskBriefOperationJSON = localStorage.getItem('setTaskBriefOperationJSON')

  // get JSON formatted task due date operation from local storage
  const setTaskDueDateOperationJSON = localStorage.getItem('setTaskDueDateOperationJSON')

  // check if task brief operation exists
  if (setTaskBriefOperationJSON) {

    // parse set task brief operation json
    const setTaskBriefOperation = JSON.parse(setTaskBriefOperationJSON)

    // check task id
    if (setTaskBriefOperation.payload.inputValues.taskId === taskId) {

      // sign task brief
      await signTaskBrief(colonyClient, setTaskBriefOperationJSON)

    }

  }

  // check if task due date operation exists
  if (setTaskDueDateOperationJSON) {

    // parse set task due date operation json
    const setTaskDueDateOperation = JSON.parse(setTaskDueDateOperationJSON)

    // check task id
    if (setTaskDueDateOperation.payload.inputValues.taskId === taskId) {

      // sign task due date
      await signTaskDueDate(colonyClient, setTaskDueDateOperationJSON)

    }

  }

  // return id
  return taskId

}

// signTaskBrief

export const signTaskBrief = async (colonyClient, operationJSON) => {

  // restore operation
  const setTaskBriefOperation = await colonyClient.setTaskBrief.restoreOperation(operationJSON)

  // check if required signees includes current user address
  if (setTaskBriefOperation.requiredSignees.includes(colonyClient.adapter.wallet.address)) {

    // sign set task brief operation
    await setTaskBriefOperation.sign()

  }

  // check for missing signees
  if (setTaskBriefOperation.missingSignees.length === 0) {

    // send set task brief operation
    await setTaskBriefOperation.send()

  } else {

    // serialize operation into JSON format
    const setTaskBriefOperationJSON = setTaskBriefOperation.toJSON()

    // save operation to local storage
    localStorage.setItem('setTaskBriefOperationJSON', setTaskBriefOperationJSON)

  }

  // return operation
  return setTaskBriefOperation

}

// signTaskDueDate

export const signTaskDueDate = async (colonyClient, operationJSON) => {

  // restore operation
  const setTaskDueDateOperation = await colonyClient.setTaskDueDate.restoreOperation(operationJSON)

  // check if required signees includes current user address
  if (setTaskDueDateOperation.requiredSignees.includes(colonyClient.adapter.wallet.address)) {

    // sign set task due date operation
    await setTaskDueDateOperation.sign()

  }

  // check for missing signees
  if (setTaskDueDateOperation.missingSignees.length === 0) {

    // send set task due date operation
    await setTaskDueDateOperation.send()

  } else {

    // serialize operation into JSON format
    const setTaskDueDateOperationJSON = setTaskDueDateOperation.toJSON()

    // save operation to local storage
    localStorage.setItem('setTaskDueDateOperationJSON', setTaskDueDateOperationJSON)

  }

  // return operation
  return setTaskDueDateOperation

}

// updateTask

export const updateTask = async (colonyClient, task) => {

  // set id
  const taskId = task.id

  // check domain id
  if (task.domainId) {

    // format domain id
    const domainId = Number(task.domainId)

    // set task domain
    await setTaskDomain(colonyClient, taskId, domainId)

  }

  // check due date
  if (task.dueDate) {

    // format due date
    const dueDate = new Date(task.dueDate)

    // set task due date
    await setTaskDueDate(colonyClient, taskId, dueDate)

  }

  // check evaluator
  if (task.roles.evaluator) {

    // set task role
    await setTaskRole(colonyClient, taskId, 'EVALUATOR', task.roles.evaluator)

  }

  // check manager
  if (task.roles.manager) {

    // set task role
    await setTaskRole(colonyClient, taskId, 'MANAGER', task.roles.manager)

  }

  // check worker
  if (task.roles.worker) {

    // set task role
    await setTaskRole(colonyClient, taskId, 'WORKER', task.roles.worker)

  }

  // check skill id
  if (task.skillId) {

    // format skillId
    const skillId = Number(task.skillId)

    // set task due date
    await setTaskSkill(colonyClient, taskId, skillId)

  }

  // check specification
  if (task.specification) {

    // set task brief
    await setTaskBrief(colonyClient, taskId, task.specification)

  }

  // return id
  return taskId

}

// addAdmin

export const addAdmin = async (colonyClient, userAddress) => {

  // add user role admin
  await colonyClient.setAdminRole.send({
    user: userAddress
  })

  // get updated admins
  const updatedAdmins = await getAdmins(colonyClient)

  // return updated admins
  return updatedAdmins

}

// getAdmins

export const getAdmins = async (colonyClient) => {

  // return admins
  return []

}

// removeAdmin

export const removeAdmin = async (colonyClient, userAddress) => {

  // remove user role admin
  await colonyClient.removeAdminRole.send({
    user: userAddress
  })

  // get updated admins
  const updatedAdmins = await getAdmins(colonyClient)

  // return updated admins
  return updatedAdmins

}

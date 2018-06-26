// addAdmin

export const addAdmin = async (colonyClient, userAddress) => {

  // set user address as user role admin
  const userRole = await colonyClient.authority.setUserRole.send({
    user: userAddress,
    role: 'ADMIN',
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

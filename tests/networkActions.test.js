const networkActions = require('../client/helpers/actions/networkActions')

// getNetworkClient

describe('getNetworkClient', () => {
  test('returns networkClient', async () => {

    // getNetworkClient
    const networkClient = await networkActions.getNetworkClient()

    // check for valid results
    expect(networkClient).toEqual(expect.objectContaining({
      _contract: expect.objectContaining({
        address: expect.any(String),
      }),
    }))

  })
})

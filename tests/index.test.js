const networkActions = require('../client/helpers/actions/networkActions')

describe('getNetworkClient', () => {
  test('returns networkClient', async () => {
    const networkClient = await networkActions.getNetworkClient()
    expect(networkClient).toEqual(expect.objectContaining({
      _contract: expect.objectContaining({
        address: expect.any(String),
      }),
    }));
  })
})

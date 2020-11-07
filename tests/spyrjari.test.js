const { hasProperty } = require('../index.js')

describe('Spyrjari: hasProperty', () => {
  test('Return boolean values', () => {
    const obj = {}
    const result = hasProperty(obj, null)

    expect(typeof result === 'boolean').toBeTruthy()
  })

  test('Detects object properties', () => {
    const obj = { id: 666, name: 'Number of the Beast' }
    const result = hasProperty(obj, 'id')
    const result2 = hasProperty(obj, 'author')

    expect(result).toBeTruthy()
    expect(result2).toBeFalsy()
  })
})

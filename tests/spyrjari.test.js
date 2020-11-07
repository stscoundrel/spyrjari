const { hasProperty } = require('../index.js')

describe('Spyrjari: hasProperty', () => {
  test('Throws error on missing argument', () => {
    expect(() => {
      hasProperty()
    }).toThrow('Missing argument: expects an object and string property key')
  })

  test('Return boolean values', () => {
    const obj = {}
    const result = hasProperty(obj, null)

    expect(typeof result === 'boolean').toBeTruthy()
  })

  test('Detects object properties', () => {
    const obj = { id: 666, name: 'Number of the Beast' }

    expect(hasProperty(obj, 'id')).toBeTruthy()
    expect(hasProperty(obj, 'author')).toBeFalsy()
  })

  test('Return false on non-objects', () => {
    expect(hasProperty('object', 'id')).toBeFalsy()
    expect(hasProperty(['id'], 'id')).toBeFalsy()
    expect(hasProperty(5, 'id')).toBeFalsy()
  })
})

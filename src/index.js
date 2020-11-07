const hasProperty = (object, property) => {
  if (object === undefined || property === undefined) throw new Error('Missing argument: expects an object and string property key')

  return Object.prototype.hasOwnProperty.call(object, property)
}

module.exports = {
  hasProperty,
}

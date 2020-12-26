export function hasProperty(entry: any, property: string): boolean {
  if (entry === undefined || property === undefined) throw new Error('Missing argument: expects an object and string property key');

  return Object.prototype.hasOwnProperty.call(entry, property);
}

export default {
  hasProperty,
};

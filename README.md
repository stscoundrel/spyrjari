# Spyrjari

Shorthand for Object.prototype.hasOwnProperty.call() madness.

### Install

`yarn add spyrjari`

### Usage


```javascript
const { hasProperty } = require('spyrjari')

const record = {
	name: 'The Number Of The Beast',
	year: 1982,
}

console.log( hasProperty(record, 'year') ) // true
console.log( hasProperty(record, 'band') ) // false

```

#### What's in the name?

"Spyrjari" comes from Old Norse verb for "spyrja" (to ask). Verb + ari structure, which makes it a noun, "someone who asks". Spyrjari is the one who asks about object properties when I don't feel like it.
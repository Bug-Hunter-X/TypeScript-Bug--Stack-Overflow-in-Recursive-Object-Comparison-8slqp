function compareObjects(obj1: any, obj2: any, visited = new Set()): boolean {
  // Check if the objects are of the same type
  if (typeof obj1 !== typeof obj2) {
    return false;
  }

  // Check if the objects are null or undefined
  if (obj1 === null || obj1 === undefined || obj2 === null || obj2 === undefined) {
    return obj1 === obj2; // Both null or undefined are equal
  }

  // Check if either object has already been visited
  if (visited.has(obj1) || visited.has(obj2)) {
    return true; // Objects are equal if visited
  }

  visited.add(obj1);
  visited.add(obj2);

  // Check if the objects are of primitive types
  if (typeof obj1 !== 'object') {
    return obj1 === obj2;
  }

  // Check if the objects have the same keys
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  if (keys1.length !== keys2.length) {
    return false;
  }

  // Check if the objects have the same values for each key
  for (let key of keys1) {
    if (!compareObjects(obj1[key], obj2[key], visited)) {
      return false;
    }
  }

  return true; // Objects are equal
}

// Test Cases
const obj1 = { a: 1, b: { c: 2 } };
const obj2 = { a: 1, b: { c: 2 } };
const obj3 = { a: 1, b: { c: 3 } };
console.log(compareObjects(obj1, obj2)); // true
console.log(compareObjects(obj1, obj3)); // false

// Circular Reference Test
const circularObj1 = {};
const circularObj2 = {};
circularObj1.circular = circularObj2;
circularObj2.circular = circularObj1;
console.log(compareObjects(circularObj1, circularObj2)); //true
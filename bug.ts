function compareObjects(obj1: any, obj2: any): boolean {
  // Check if the objects are of the same type
  if (typeof obj1 !== typeof obj2) {
    return false;
  }

  // Check if the objects are null or undefined
  if (obj1 === null || obj1 === undefined || obj2 === null || obj2 === undefined) {
    return obj1 === obj2; // Both null or undefined are equal
  }

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
    if (!compareObjects(obj1[key], obj2[key])) {
      return false;
    }
  }

  return true; // Objects are equal
}
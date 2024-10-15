export default function appendToEachArrayValue(array, appendString) {
  const newArray = [];
  for (const idx in array) {
    if (Object.prototype.hasOwnProperty.call(array, idx)) {
      const value = array[idx];
      newArray.push(appendString + value);
    }
  }

  return newArray;
}

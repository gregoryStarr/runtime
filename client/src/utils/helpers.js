export function removeObjectWithId(arr, id) {
    // Making a copy with the Array from() method
    const arrCopy = Array.from(arr);

    const objWithIdIndex = arrCopy.findIndex((obj) => {
      console.log(obj)
      return obj.id === id});
    arrCopy.splice(objWithIdIndex, 1);
    return arrCopy;
  }
export default function flatMap(arr) {
  let newArr = [];
  arr.forEach((item) => {
    if (Array.isArray(item)) {
      newArr.push(...flatMap(item));
    } else {
      newArr.push(item);
    }
  });
  return newArr;
}

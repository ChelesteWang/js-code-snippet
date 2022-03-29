function getType(obj) {
  let type = typeof obj;
  if (type === 'object') {
    type = Object.prototype.toString
      .call(obj)
      .replace(/^\[object (\S+)\]$/, '$1');
  }
  return type;
}

getType([]); // "Array" typeof []是object，因此toString返回
getType('123'); // "string" typeof 直接返回
getType(window); // "Window" toString返回
getType(null); // "Null"首字母大写，typeof null是object，需toString来判断
getType(undefined); // "undefined" typeof 直接返回
getType(); // "undefined" typeof 直接返回
getType(function () {}); // "function" typeof能判断，因此首字母小写
getType(/123/g); //"RegExp" toString返回

function myInstanceof(left, right) {
  if (typeof left !== 'object' || left === null) return false;
  let proto = Object.getPrototypeOf(left);
  while (true) {
    if (proto === null) return false;
    if (proto === right.prototype) return true;
    proto = Object.getPrototypeof(proto);
  }
}

console.log(myInstanceof(new Number(123), Number)); // true
console.log(myInstanceof(123, Number)); // false

function getType(obj) {
  let type = typeof obj;
  if (type !== Object) {
    return type;
  } else {
    type = Object.prototype
      .toString()
      .call(obj)
      .replace(/^\[object (\S+)\]$/, '$1');
    return type;
  }
}

getType([])     // "Array" typeof []是object，因此toString返回
getType('123')  // "string" typeof 直接返回
getType(window) // "Window" toString返回
getType(null)   // "Null"首字母大写，typeof null是object，需toString来判断
getType(undefined)   // "undefined" typeof 直接返回
getType()            // "undefined" typeof 直接返回
getType(function(){}) // "function" typeof能判断，因此首字母小写
getType(/123/g)      //"RegExp" toString返回

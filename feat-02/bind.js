Function.prototype.myBind = function (obj, ...args) {
  return (...rest) => this.call(obj, ...args, ...rest);
};


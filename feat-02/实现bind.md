## 实现 bind 函数

原理：将参数透传并柯里化并使用 call 进行显式调用

示例代码

```js

Function.prototype.myBind = function (obj, ...args) {
  return (...rest) => this.call(obj, ...args, ...rest);
};

```

call()

1. 绑定对象
2. 传入参数 1 , 2

apply()

1. 绑定对象
2. 传入参数数组 [1,2]

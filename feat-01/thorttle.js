export default function thorttle(fn, wait) {
  let timer;
  return function () {
    let _this = this;
    let args = arguments;
    if (timer) {
      timer = setTimeout(() => {
        fn.apply(_this, args);
        timer = null;
      }, wait);
    }
  };
}

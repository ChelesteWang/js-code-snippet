function debounce(fn, wait) {
  let timer;
  return function () {
    if (timer) {
      clearTimeout(timer);
    }
    let _this = this;
    let args = arguments;
    timer = setTimeout(() => {
      fn.apply(_this.arguments);
    }, wait);
  };
}

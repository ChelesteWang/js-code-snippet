export default function promisify(fn) {
  return function (...args) {
    let hasCb = args.some((v) => typeof v === 'function');
    if (hasCb) {
      fn(...args);
    } else {
      return new Promise((resolve, reject) => {
        fn(...args, cb);

        function cb(err, data) {
          if (err) {
            reject(err);
          } else {
            resolve(data);
          }
        }
      });
    }
  };
}

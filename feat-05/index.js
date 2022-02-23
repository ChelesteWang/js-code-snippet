import promisify from './promisify';

export default function main() {
  function test(res, cb) {
    cb(res);
  }

  test('callback', (res) => {
    console.log('hello', res);
  });

  const promisifyTest = promisify(test);

  promisifyTest('promisify').then((res) => {
    console.log('hello', res);
  });
}

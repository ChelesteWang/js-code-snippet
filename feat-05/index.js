import promisify from './promisify';

export default function main() {
  function test(res, cb) {
    cb(null, res);
  }

  test('callback', (err, res) => {
    if (err) {
      console.error(err);
    }
    console.log('hello', res);
  });

  const promisifyTest = promisify(test);

  promisifyTest('promisify')
    .then((res) => console.log('hello', res))
    .catch((err) => {
      console.error(err);
    });
}

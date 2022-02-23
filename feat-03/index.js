import flatMap from './flatMap';

export default function main() {
  const flatlist = [[1, 2, 3, 4], 1, 5, 6, 8, [9, 10]];
  const newlist = flatMap(flatlist);
  console.log(newlist);
}

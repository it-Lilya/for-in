export function sortObject(obj, args = []) {
  let arr = [];
  for (const item in obj) {
    if (args.indexOf(item) === -1) {
      arr.push(item);
    }
  }
  arr = [...args, ...arr.sort()];
  const result = [];
  for (const item of arr) {
    result.push({ key: item, value: obj[item] });
  }
  return result;
}

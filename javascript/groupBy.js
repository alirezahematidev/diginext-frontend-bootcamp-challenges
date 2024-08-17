function groupBy(arr, callback) {
  return arr.reduce((prev, curr) => {
    const group = callback(curr);

    return { ...prev, [group]: arr.filter((item) => callback(item) === group) };
  }, {});
}

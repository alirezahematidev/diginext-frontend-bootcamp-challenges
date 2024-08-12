function groupBy(arr, callback) {
  if (!Array.isArray(arr)) throw new Error("the input must be an array.");

  return arr.reduce((prev, curr) => {
    const group = callback(curr);

    return { ...prev, [group]: arr.filter((item) => callback(item) === group) };
  }, {});
}

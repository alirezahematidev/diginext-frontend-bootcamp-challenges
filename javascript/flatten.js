function flatten(object) {
  const keys = [];

  const result = {};

  function traverse(obj) {
    for (const key in obj) {
      keys.push(key);

      if (typeof obj[key] === "object") traverse(obj[key]);
      else result[keys.join(".")] = obj[key];
    }
    keys.length = 0;
  }

  traverse(object);

  return result;
}

function revertFlatten(object) {
  let result = {};

  for (const key in object) {
    if (key.includes(".")) {
      const keys = key.split(".");

      const valueObject = keys.reduceRight((prev, curr) => ({ [curr]: prev }), object[key]);

      result = { ...result, ...valueObject };
    } else result[key] = object[key];
  }

  return result;
}

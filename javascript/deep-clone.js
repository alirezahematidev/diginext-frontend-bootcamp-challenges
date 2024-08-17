function deepClone(arg) {
  if (typeof structuredClone !== "undefined") return structuredClone(arg);

  if (arg === null || typeof arg !== "object") return arg;

  if (Array.isArray(arg)) {
    const clonedArr = new Array();

    for (let i = 0; i < arg.length; i++) {
      clonedArr.push(deepClone(arg[i]));
    }

    return clonedArr;
  }

  const clonedObj = Object.create(Object.getPrototypeOf(arg));

  for (const key in arg) {
    if (Object.prototype.hasOwnProperty.call(arg, key)) {
      clonedObj[key] = deepClone(arg[key]);
    }
  }

  return clonedObj;
}

function deepClone(arg, cache = new WeakMap()) {
  if (arg === null || typeof arg !== "object") return arg;

  if (cache.has(arg)) return cache.get(arg);

  if (Array.isArray(arg)) {
    const clonedArr = new Array();

    for (let i = 0; i < arg.length; i++) {
      clonedArr.push(clone(arg[i], cache));
    }

    cache.set(arg, clonedArr);

    return clonedArr;
  }

  const clonedObj = Object.create(Object.getPrototypeOf(arg));

  for (const key in arg) {
    if (Object.prototype.hasOwnProperty.call(arg, key)) {
      clonedObj[key] = clone(arg[key], cache);
    }
  }

  cache.set(arg, clonedObj);

  return clonedObj;
}

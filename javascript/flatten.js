/**
 * Returns a flatten object. Remember that the level of nesting is not specified.
 * Use case. Form creation for nested objects or lists.
 *
 * @param {object} object An object that may be nested.
 *
 * @returns flatten object.
 *
 * @example flatten({"a": {"b": {"c": "d"}}}) => {"a.b.c": "d"}
 *
 */
function flatten(object) {
  const keys = [];

  let result = {};

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

/**
 * Returns a nested object. Remember that the level of nesting is not specified.
 *
 * @param {object} object A flat object
 *
 * @returns maybe nested object
 *
 * @example revertFlatten({"a.b.c": "d"}) => {"a": {"b": {"c": "d"}}}
 *
 */
function revertFlatten(object) {}

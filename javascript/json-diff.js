function jsonDiff(oldObject, newObject) {
  for (const key in oldObject) {
    if (key in newObject) {
      if (oldObject[key] === newObject[key]) continue;

      const oldValue = oldObject[key];

      oldObject[key] = {
        type: "modified",
        oldValue,
        newValue: newObject[key],
      };
    } else {
      const oldValue = oldObject[key];

      oldObject[key] = {
        type: "removed",
        oldValue,
      };
    }
  }

  for (const key in newObject) {
    if (key in oldObject) continue;

    oldObject[key] = {
      type: "added",
      newValue: newObject[key],
    };
  }

  return oldObject;
}

function throttle(callback, n, p) {
  let calls = 0;
  let startTime = Date.now();

  return function (...args) {
    const currentTime = Date.now();
    if (currentTime - startTime >= p) {
      calls = 0;
      startTime = currentTime;
    }

    if (calls < n) {
      calls++;
      callback(...args);
    }
  };
}

function advancedThrottle(callback, n, p, blockTime, exponent) {
  let calls = 0;
  let startTime = Date.now();
  let blocked = 0;
  let count = 0;

  return function (...args) {
    const currentTime = Date.now();

    if (currentTime < blocked) return;

    if (currentTime - startTime >= p) {
      calls = 0;
      startTime = currentTime;
      count = 0;
    }

    if (calls < n) {
      calls++;
      callback(...args);
    } else {
      count++;
      blocked = currentTime + blockTime * Math.pow(exponent, count - 1);
    }
  };
}

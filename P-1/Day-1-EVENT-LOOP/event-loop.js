const { performance } = require("node:perf_hooks");
//It is used to measure
//how fast your code runs down
//to fractions of a millisecond.

const assert = require("node:assert");

const log = [];

const mark = (label) => log.push({ label, time: performance.now() });

mark("event loop start - the paper");
setTimeout(() => mark("timeout- the first envelope"), 0);
Promise.resolve().then(() => mark("promise.then- the yellow sticky note"));
process.nextTick(() => mark("nextTick- the pink sticky note"));
setImmediate(() => mark("immediate - the second envelope"));
mark("event loop end - the paper");

setTimeout(() => console.log(log), 10);

const indexOf = (text) => log.findIndex((entry) => entry.label.includes(text));

setTimeout(() => {
  assert.ok(
    indexOf("nextTick") < indexOf("timeout"),
    "nextTick should run before timeout",
  );
  assert.ok(
    indexOf("promise") < indexOf("timeout"),
    "promise should run before timeout",
  );
  assert.ok(
    indexOf("nextTick") < indexOf("immediate"),
    "nextTick should run before immediate",
  );
  assert.ok(
    indexOf("promise") < indexOf("immediate"),
    "promise should run before immediate",
  );

  console.log("assertions passed");
}, 10);

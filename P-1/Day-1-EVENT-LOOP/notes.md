# Event loop, call stack and microtask queue

- Synchronous code always runs first.
- Macro-tasks like `setTimeout()` or `setImmediate()` are executed one at a time.
- Before moving on to the next macro-task, micro-tasks like `process.nextTick()` and `Promise.then()` are executed. They are more urgent than the macro-task, thus get executed before them and in between before another macro-task if picked up to be completed.
- `process.nextTick()` runs before `Promise.then`.
- Synchronous code -> then `nextTick`-> then `Promise.then` ->then one macro-task(`setTimeout` / `setImmediate`) -> then micro-task again.

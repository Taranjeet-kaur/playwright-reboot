# Promises, async/await and running things in parallel

- A promise is like a ticket, and it can be pending, fulfilled or rejected.
- await pauses only the async function, not the whole program.
- Promise.all fails if even one promise gets rejected.
- Promise.allSettled never rejects and gives each result a status.
- An unhandled rejection (not having .catch(), try/catch block) can crash the node process.

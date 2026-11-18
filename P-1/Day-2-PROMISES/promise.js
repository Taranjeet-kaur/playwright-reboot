// fetch(URL,options)

function mockFetch(url, timer, status) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (status === true) {
        resolve("fetched:" + url);
      } else if (status === false) {
        reject(new Error("failed to fetch:" + url));
      }
    }, timer);
  });
}

// mockFetch("mockURL.com", 1000, true).then(console.log);

// function allSettledExample() {
//   const p1 = new Promise((resolve, reject) => setTimeout(resolve, 0, "1"));
//   // when is the new Promise constructor is
//   // needed? when waiting is needed like setTimeout()- IT IS REQUIRED.
//   const p2 = Promise.resolve(2);
//   // the ones being used here are static methods. that's why
//   // they don't need the constructor. mixed both constructor promise
//   // and static method.
//   const p3 = Promise.resolve(3);
//   const p4 = new Promise((resolve, reject) => setTimeout(reject, 1000, "4"));
//   const p5 = Promise.reject(5);

//   const promises = [p1, p2, p3, p4, p5];

//   Promise.allSettled(promises).then((results) =>
//     results.forEach((result) => console.log(result.status)),
//   );
// }

// allSettledExample();

function allSettled() {
  const p1 = mockFetch("contraddittorio.com", 100, true);
  const p2 = mockFetch("consapevole.com", 200, false);
  const p3 = mockFetch("deterioramento.com", 300, true);
  const p4 = mockFetch("intenzione.com", 400, false);
  const p5 = mockFetch("pazienza.com", 500, true);

  const promises = [p1, p2, p3, p4, p5];
  Promise.allSettled(promises).then((results) =>
    results.forEach((result) => {
      if (result.status === "fulfilled") {
        console.log(result.value);
      } else {
        console.log(result.reason.message);
      }
    }),
  );
}

allSettled();

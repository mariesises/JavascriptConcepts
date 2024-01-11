const promisify = (item, delay) =>
  new Promise((resolve) =>
    setTimeout(() =>
      resolve(item), delay));

const a = () => promisify('a', 100);
const b = () => promisify('b', 5000);
const c = () => promisify('c', 3000);

async function parallel() {
  const promises = [a(), b(), c()];
  const [output1, output2, output3] = await Promise.all(promises);
  return `prallel is done: ${output1} ${output2} ${output3}`
}

async function race() {
  const promises = [a(), b(), c()];
  const output1 = await Promise.race(promises);
  return `race is done: ${output1}`;
}

async function sequence() {
  const output1 = await a();
  const output2 = await b();
  const output3 = await c();
  return `sequence is done ${output1} ${output2} ${output3}`
}

sequence().then(console.log)
parallel().then(console.log)
race().then(console.log)

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => reject("A"), Math.floor(Math.random() * 1000));
  });
  const p2 = new Promise((resolve, reject) => {
    setTimeout(() => reject("B"), Math.floor(Math.random() * 1000));
  });
  const p3 = new Promise((resolve, reject) => {
    setTimeout(() => reject("C"), Math.floor(Math.random() * 1000));
  });

  (async function () {
    const result = await Promise.any([p1, p2, p3]);
    console.log(result); // Prints "A", "B" or "C"
  })();
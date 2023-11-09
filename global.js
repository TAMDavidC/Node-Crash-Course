// Global object


// console.log(global);

// setTimeout(() => {
//     console.log("in the timeout");
//     clearInterval(int);
// }, 3000);

// const int = setInterval(()=>{
//     console.log("in the interval")
// }, 1000)

// console.log(__dirname)
// console.log(__filename)

console.log(document.querySelector); // doesn't work since we don't have a web browser open.

/*
Got it
<ref *1> Object [global] {
  global: [Circular *1],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  queueMicrotask: [Function: queueMicrotask],
  structuredClone: [Getter/Setter],
  atob: [Getter/Setter],
  btoa: [Getter/Setter],
  performance: [Getter/Setter],
  navigator: [Getter],
  fetch: [Function: fetch],
  crypto: [Getter]
}
*/
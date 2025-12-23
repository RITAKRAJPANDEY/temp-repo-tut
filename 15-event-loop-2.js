
console.log('first')

// setTimeout is asynchronous
// Even with a delay of 0ms, the callback does NOT run immediately
// It is sent to the task queue and will execute only
// after all synchronous code has finished executing
setTimeout(() => {
    console.log('second')
}, 0)

console.log('third')

// At this point, all synchronous code is done
// The event loop then picks the setTimeout callback
// from the task queue and executes it

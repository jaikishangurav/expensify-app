const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('This is resolved data');
    }, 5000)
});

console.log('Before');

promise.then((data) => {
    console.log(data)
}).then(() => {
    console.log('does this run');
}).catch((error) => {
    console.log(error)
});

console.log('After');
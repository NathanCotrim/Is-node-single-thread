// To do more test, you can change the thread pool size: 

// UV_THREADPOOL_SIZE= any_num

const crypto = require('crypto');

const start = Date.now();

crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
    console.log(`1: ${(Date.now() - start) / 1000}s`);
})

crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
    console.log(`2: ${(Date.now() - start) / 1000}s`);
})

crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
    console.log(`3: ${(Date.now() - start) / 1000}s`);
})

crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
    console.log(`4: ${(Date.now() - start) / 1000}s`);
})

// crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
//     console.log(`5: ${(Date.now() - start) / 1000}s`);
// })

// Run: node threads.js
// You can see that all execution time are similar, because this function use the libuv thread pool, if we increase and execute 5 functions, last will need wait one of them finish to execute, because by default, libuv thread pool size = 4;
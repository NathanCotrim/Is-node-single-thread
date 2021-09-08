const https = require('https');

const start = Date.now()

function doRequest() {
    https.request('https://www.google.com', res => {
        res.on('data', () => { })
        res.on('end', () => {
            console.log(`${(Date.now() - start) / 1000 }s`);
        })
    }).end()
}

doRequest();
doRequest();
doRequest();
doRequest();
doRequest();
doRequest();
doRequest();

// run it:
    // node os-delegations.js

// You can see that the execution time is practically the same, because this network tasks are delegated to the OS.

// To prove it you can run just one time the function, and will see similar times.  

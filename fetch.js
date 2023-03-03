//first run these commands :
// 1. npm init (to initialise this script with the npm)
// 2. npm install node-fetch (to install the browser function 'fetch' for node.js)
// 3. add "type": "module", to package.json
import fetch from 'node-fetch'

fetch('https://jsonplaceholder.typicode.com/posts/10') //sample public JSON API for use in testing
    .then(response => response.json()) //this gets the entire HTTP response, so we use the .json() function which also returns a promise
    .then(json => console.log(`Post #10: ${json.title}`)) //this promise includes the json returned from the fetched URL if successful
    .catch(error => console.error(`Caught error: ${error}`)) //can optionally include this to show any errors
    .finally(() => console.log('done fetching')) //can optionally include this after all fetching done

    let post2 = await fetch('https://jsonplaceholder.typicode.com/posts/2')
    let post2Json = await post2.json()
    console.log(`post #2: ${JSON.stringify(post2Json)}`)
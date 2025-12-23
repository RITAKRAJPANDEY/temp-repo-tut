// Import only the readFile function from Node.js's built-in 'fs' (file system) module
const { readFile ,writeFile} = require('fs/promises');
// const util=require('util')
// const readFilePromise=util.promisify(readFile)
// const writeFilePromise=util.promisify(writeFile)

const start = async()=>{
    try{
        const first = await readFile('./content/subfolder/first.txt','utf8');
        const second = await readFile('./content/subfolder/second.txt','utf8');
        await writeFile('./content/subfolder/result-mind-grenade.txt',`THIS IS AWESOME : ${first} ${second}`,{flag: 'a'})
        console.log(first,second)
    } 
    catch(error){
        console.log(error)
    }}
    start()
    
    // Create a function named getText
    // It takes one argument: path (path of the file we want to read)
    // const getText = (path) => {
    
    //     return new Promise((resolve, reject) => {
    
           
    //         readFile('./content/subfolder/first.txt', 'utf8', (err, data) => {
    //             if (err) {   
    //                 reject(err);
    //             } 
    //             else {
    //                 resolve(data);
    //             }
    //         });
    //     });
    // };
// Call the getText function
// It returns a Promise
// getText('./content/subfolder/first.txt')

    // .then() runs if the Promise is resolved successfully
    // "result" contains the data passed from resolve(data)
    // .then(result => console.log(result))

    // .catch() runs if the Promise is rejected
    // "err" contains the error passed from reject(err)
    // .catch(err => console.log(err));

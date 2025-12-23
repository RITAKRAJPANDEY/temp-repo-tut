//another way to use a predefined module 

const {readFileSync,writeFileSync}= require('fs')
// this module is used to read a file

// need to provide 2 parameters first is path 
console.log('start')
const first=readFileSync('./content/subfolder/first.txt','utf-8');
const second=readFileSync('./content/subfolder/second.txt','utf-8');

console.log(first,second);



// how to make a file and write text in it using fs module

writeFileSync('./content/result-sync.txt',`here is the result : ${first}, ${second}`,{flag: 'a'})

// the flag helps to append  the file with the text every  time so it's a w

console.log('done with this task');
console.log('starting the next  task');




// see in the terminal that it does the task then it's ready for other user while in async way its faster see file 11-fs-async.js
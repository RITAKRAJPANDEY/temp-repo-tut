 

const {readFile,writeFile}= require('fs')

// this is the way to only extract functions which you want to use from a certain module


console.log('start')



// readFile(path, encoding, callback) is the file structure below

// readFile is a asyncronomous function won't return the data automatically


readFile('./content/subfolder/first.txt','utf8',(err,result)=>{
    if(err){
        console.log(err)
        return
    }
    const first=result
    readFile('./content/subfolder/second.txt','utf8',(err,result)=>{
         if(err){
        console.log(err)
        return
    }
    const second=result
    writeFile('./content/result-async.txt',`here is the result : ${first},${second}`,{flag: 'a'},(err,result)=>{
         if(err){
        console.log(err)
        return;
    }
    console.log('done with this task');
    })
    })
})
console.log('starting next task')
// now this is called callback hell 

// so here you can see that as soon as the task starts its ready to do another one as seen by the chronology in the terminal 

// these differences between async and sync are more visible on larger userbase models

// but this is a mess so we are going to learn async await   and later promises
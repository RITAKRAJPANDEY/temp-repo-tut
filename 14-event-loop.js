const {readFile,writeFile}=require('fs')

console.log('started the first task user 1')

readFile('./content/subfolder/first.txt','utf8',(err,result)=>{
    if (err) {
        console.log(err)
        return
    }
    console.log(result)
    console.log('completed first task user 1')
})
console.log('starting next task')


// this way multiple requests can be pulled from the app and all will start instead of executing one by one
//Common JS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum )
const names = require('./04-Name')
const SayHi = require('./03-utlis')
const dontKnow=require('./05-Alternative-flavor')

require('./06-mind-granade')
// works without invoking it on the function module




console.log(names)



//  SayHi(`susan`)
//  SayHi(names.john)
//  SayHi(`peter`)
//  console.log(dontKnow)

 // as you can see that 03,04,05 are being connected together so if you want to make a function exportable from a file "a" use 
 // module.export=function_Name
 //and on the file in whiich you want to export the function use
 //  const name = require(./FileName)

const _ = require('lodash')
 
const itmes =[1,[2,[3,[4]]]]
const newItems =_.flattenDeep(itmes)
console.log(newItems)
console.log("hello world")
//lodash is installed
//nodemon is installed 
// no if i use nodemon to run this file it will automatially restart the server when i make changes to this file
// command to run nodemon : npm nodemon app.js
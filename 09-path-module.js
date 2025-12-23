const path =require('path');
 console.log(path.sep)


// for the complete file path
const filePath = path.join('/content','subfolder','test.txt')
 console.log(filePath)


// for the last location if the base
const base = path.basename(filePath)
 console.log(base)



// to provide absolute path of the file
const absolute = path.resolve(__dirname,'content','subfolder','test.txt')

console.log(absolute)
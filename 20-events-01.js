const EventEmmiter = require('events');

const customEmmiter= new EventEmmiter()

 customEmmiter.on('response',(name,id)=>{
    console.log(`data recieved user : ${name} with  id : ${id}`)
 })
  customEmmiter.on('response',()=>{
    console.log('some other logic here')
 })
 customEmmiter.emit('response','john',34)
 // first listen for events then we emmit it 
 // if emit is placed above then below emmited string won't be visible
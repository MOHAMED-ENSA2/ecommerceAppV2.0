// const io = require("socket.io")(3007 , {
//     cors : {
//       origin : "http://localhost:3006"
//     }
//   })
  
// module.exports = function (){

//   let adminID
//   let users = []
//   io.on("connection" , (socket) => {
//         let username ;  
    
//         console.log("number of users : " , io.engine.clientsCount)
        
//         socket.emit("walcome" , "hello "  + socket.id )
        
//         let count = 0 
//         socket.on("user" , (usr) => {
//           username  = usr
//           if(usr == "admin"){
//             adminID = socket.id
//             socket.emit("users" , users)
//           }
//           else{

//             users.map(user => {
//               if(user.username === usr){
//                  user.id = socket.id   
//                  count = 1 
//             }})
//             if(count === 0){
//               users.push({ id : socket.id , username : usr})
//             }

//           }
//         })

//         socket.on("chat message" , (message) => {
//           if(adminID && socket.id != adminID)
//             socket.to(adminID).emit("message" , username ,  message)      

//           socket.on("dist" , (dist) => {
//             console.log("dist",dist)
//             socket.to(dist).emit("message" , "admin" , message)
//           })
//         })
      
//     })
      
// }  



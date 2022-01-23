import React, {useState ,  useEffect, useRef } from 'react'

import "./Chat.css"

function Chat({socket}) {

    const [users ,setUsers] = useState([])
    const [targetUser , setTargetUser] = useState([])
    const [messages, setMessages] = useState([])
    const input = useRef()

    const username =  !localStorage.getItem("user")
                      ?  "guest"   
                      : JSON.parse(localStorage.getItem("user")).isAdmin 
                      ? "admin"
                      : JSON.parse(localStorage.getItem("user")).name 

    useEffect(() => {
        if (socket){
            socket.on('walcome', function(msg) {
                
                handleReceivedMessages(msg)
            });
            socket.emit("user" , username )
            
            socket.on("message" , function(username, msg){
                handleReceivedMessages(username + ' : ' + msg)
            })
            
            // to admin
            if(username === "admin"){
                socket.on("users" , function(users){
                    setUsers(users) 
                    console.log(users)               
                }) 
            }
            console.log("rendring")
        }
    }, [socket, users])


    useEffect(() => {
        if(socket){
            if(username != "admin"){ 
            socket.emit("user" , username )

        }}
    }, [socket])
    
    // useEffect(() => {
    //     if(socket){
    //         // to admin
    //         socket.on("users" , function(users){
    //             setUsers(users) 
    //             console.log(users)               
    //         }) 
    //     }
    // }, [users])

    const handleReceivedMessages = (msg) => {
        setMessages(state => [...state , msg]);
    }

    const handleClick = () => {
        socket.emit('chat message',input.current.value);
        input.current.value = ""

        if (username == "admin"){
            console.log(targetUser)
            socket.emit('dist', targetUser);
        }
    }

    return (
    <div className="chat">
            <div className="chat--box">
                {
                  messages.map(elm => {
                    return (
                    <div className="chat--message">
                        {elm}
                    </div>
                    )   
                })
                }
            </div>

            <div className="chat--down">
                <input className="chat--input" ref = {input} type="text"/>
                <button className="chat--btn" onClick={handleClick} >
                Send
                </button>
            </div>

           { username == "admin" && <div className="chat--down">
                {/* <input className="chat--input" type="text" ref = {distInput} /> */}
                <select  onChange={e => setTargetUser(e.target.value) } >
                    
                  {
                      users.map( user => { 
                          return <option value = {user.id}> {user.id} </option>
                        })
                  }
                </select>

            </div>
            }
    </div>
    )
}

export default Chat

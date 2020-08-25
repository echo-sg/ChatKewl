import React,{useState,useEffect} from 'react'
import db from "../../firebase.js";
import Messages from "./messages/messages";
import {  
    useParams
  } from "react-router-dom";
// 2:39

const Messagelist = () => {

    const [roomMessages,setRoomMessages] = useState([]);

    const {roomId} = useParams() ;
    
    useEffect(() => {
    db.collection("rooms") // message retrieved
        .doc(roomId)
        .collection("messages")
        .orderBy("timestamp","asc")
        .onSnapshot(
            (snapshot) => (
                setRoomMessages(
                    snapshot.docs.map(doc => doc.data())
                )
            )
        )
    }, [])

    console.log("messages >>>>>>>",roomMessages)

    return (
        <div>
            {roomMessages.map(({message,timestamp}) => (
                <Messages 
                message={message} 
                timestamp={timestamp}
                />
            ))}
        </div>
    )
}

export default Messagelist
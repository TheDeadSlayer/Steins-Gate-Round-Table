import { Avatar, Button, TextField } from "@mui/material";
import React from "react";
import Navbar from "../Navbar/Navbar";
import './Chatroom.css'
import { db } from "../fbconfig";
import { useParams } from "react-router-dom";
import { doc, getDoc, onSnapshot, collection, updateDoc, arrayUnion } from "firebase/firestore";
import { Send,Call,VideoCall} from '@mui/icons-material';
import VideoCall1 from "../VideoCall/VideoCall"
import {useState} from "react"
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
function Chatroom() {
    const [data, setData] = React.useState([]);
    const [inCall,setInCall]= useState(false)
    const navigate = useNavigate();
    let { id: roomId } = useParams();


    React.useEffect(() => {
        if (data.length === 0) {
          // for first time loading
          updateChat();
        }
        const unsubscribe = onSnapshot(collection(db, "Chatrooms"), () => {
            updateChat();
          });

        return () => {
          unsubscribe();
        };
    }, []);

    const updateChat = async () => {
        try {
            const docRef = doc(db, "Chatrooms", roomId);
            const docSnap = await getDoc(docRef);
            setData(docSnap.data().messages)
        } catch(error) {
            console.log(error)
        }
      };
    const sendMessage = (e) => {
        e.preventDefault();
        const message = e.target.elements[0].value;
        const docRef = doc(db, "Chatrooms", roomId);
        updateDoc(docRef, {
            messages: arrayUnion(message)
        });
        e.target.elements[0].value = '';
    }
  return (
    <>
      <Navbar />
          <div id="chatroom-container">
              <div id="messages-container" className="scrollable">
                  {data.map((item) => (
                        <div key={item} id="message-box">
                        <Avatar alt="Remy Sharp" src="https://cdn.discordapp.com/attachments/525396976531931156/1061842790226600047/893bfbf8-897c-4a8f-9e83-07f88eeb12e8.jpg" />
                        <div id="message">
                            {item}
                        </div>
                        </div>  
                  ))}
              </div>
              <form id="send-message" onSubmit={sendMessage}>
                  <TextField id="outlined-basic" label="Outlined" variant="outlined" sx={{
                      width: '83%',
                      marginTop: '12px',
                      display: 'flex',
                      justifyContent: 'center',
                      alignSelf: 'center',
                      background: '#202124',
                      border: "2px solid #0D1324",
                      input: { color: 'white' }
                  }} color="secondary" />
                  <div>
                  <Button  sx={{
                      height: '60%',
                      marginTop: '12px',
                          border: "2px solid #0D1324",
                          marginLeft:'5px',
                          background:'black'
                      }}
                          variant="outlined"
                          type="submit"
                          endIcon={<Send />} >Send</Button>
                    <Button color='success'sx={{
                      height: '60%',
                      marginTop: '12px',
                          border: "2px solid #0D1324",
                          marginLeft:'5px',
                          background:'black'
                      }}
                          variant="outlined"
                          onClick={()=> navigate("/video")}
                          startIcon={<VideoCall />}>Start Call</Button> 
                          {inCall? <VideoCall1 setIncCall={setInCall} />:"."} 
                  </div>
              </form>
          </div>
    </>
  );
}

export default Chatroom;

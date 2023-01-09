import { Avatar, Button, TextField } from "@mui/material";
import React from "react";
import Navbar from "../Navbar/Navbar";
import './Chatroom.css'


function Chatroom() {
    const sendMessage = (e) => {
        const message = e.target.elements[0].value;
    }
  return (
    <>
      <Navbar />
          <div id="chatroom-container">
              <div id="messages-container">
                  <div id="message-box">
                      <Avatar alt="Remy Sharp" src="https://media.licdn.com/dms/image/D4D03AQHLu-BOm6iilQ/profile-displayphoto-shrink_800_800/0/1669032927505?e=1678924800&v=beta&t=Y4QLXPdfLY2t0zO8q5lXbPcE5jGDES1HVeYFWyL5_pI" />
                      <div id="message">
                          I am 
                      </div>
                      {/*  */}
                  </div>
                  <div id="message-box">
                      <Avatar alt="Remy Sharp" src="https://media.licdn.com/dms/image/D4D03AQHLu-BOm6iilQ/profile-displayphoto-shrink_800_800/0/1669032927505?e=1678924800&v=beta&t=Y4QLXPdfLY2t0zO8q5lXbPcE5jGDES1HVeYFWyL5_pI" />
                      <div id="message">
                          I am 
                      </div>
                      {/*  */}
                  </div>
                  <div id="message-box">
                      <Avatar alt="Remy Sharp" src="https://media.licdn.com/dms/image/D4D03AQHLu-BOm6iilQ/profile-displayphoto-shrink_800_800/0/1669032927505?e=1678924800&v=beta&t=Y4QLXPdfLY2t0zO8q5lXbPcE5jGDES1HVeYFWyL5_pI" />
                      <div id="message">
                          I am 
                      </div>
                      {/*  */}
                  </div>
                  <div id="message-box">
                      <Avatar alt="Remy Sharp" src="https://media.licdn.com/dms/image/D4D03AQHLu-BOm6iilQ/profile-displayphoto-shrink_800_800/0/1669032927505?e=1678924800&v=beta&t=Y4QLXPdfLY2t0zO8q5lXbPcE5jGDES1HVeYFWyL5_pI" />
                      <div id="message">
                          I am 
                      </div>
                      {/*  */}
                  </div>
              </div>
              <form id="send-message" onSubmit={sendMessage}>
                  <TextField id="outlined-basic" label="Outlined" variant="outlined" sx={{
                      width: '80%',
                      marginTop: '12px',
                      display: 'flex',
                      justifyContent: 'center',
                      alignSelf: 'center',
                      background: '#202124',
                      border: "2px solid #0D1324",
                  }} />
                  <div>
                  <Button sx={{
                      height: '56px',
                      marginTop: '12px',
                          border: "2px solid #0D1324",
                          marginLeft:'5px'
                      }}
                          variant="outlined"
                          type="submit"
                      >Send</Button>   
                  </div>
              </form>
          </div>
    </>
  );
}

export default Chatroom;

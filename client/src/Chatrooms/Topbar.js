import { fontFamily } from "@mui/system";
import React from "react";
import "./Topbar.css";

export default function Topbar({ OnlineUsers }) {
  return (
    <div className="toptopbar-div">
      <div className="topbar-div">
        <button className="createRoom-btn">Create Room</button>
        <p style={{fontFamily: 'monospace'}}>Online: {OnlineUsers}</p>
      </div>
    </div>
  );
}

import React from "react";
import Navbar from "../Navbar/Navbar";
import Room from "./Room";
import { useEffect } from "react";
import { useState } from "react";
import "./Chatrooms.css";
import Topbar from "./Topbar";

export default function Chatrooms() {
  const [OnlineUsers, setOnlineUsers] = useState(0);
  const [list, setList] = useState([]);
  useEffect(() => {
    setOnlineUsers(1)
    setList([
      { name: "Room 1", count: 2 },
      { name: "Room 2", count: 2 },
      { name: "Room 3", count: 2 },
      { name: "Room 4", count: 2 },
      { name: "Room 5", count: 2 },
      { name: "Room 6", count: 2 },
      { name: "Room 7", count: 2 },
      { name: "Room 8", count: 2 },
      { name: "Room 9", count: 2 },
      { name: "Room 10", count: 2 },
      { name: "Room 11", count: 2 },
      { name: "Room 12", count: 2 },
      { name: "Room 13", count: 2 },
      { name: "Room 14", count: 2 },
    ]);
  }, []);

  return (
    <div className="room-div">
      <Navbar />
      <div className="roomfront-div">
        <Topbar OnlineUsers={OnlineUsers} />
        <div className="roomback-div">
          {list.map((item) => (
            <Room room={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

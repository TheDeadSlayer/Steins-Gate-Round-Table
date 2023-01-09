import React from "react";
import Navbar from "../Navbar/Navbar";
import Room from "./Room";
import { useEffect } from "react";
import { useState } from "react";
import "./Chatrooms.css";
import Topbar from "./Topbar";
import generateUID from "../utils/generateUID";

export default function Chatrooms() {
  const [OnlineUsers, setOnlineUsers] = useState(0);
  const [list, setList] = useState([
    {id: generateUID(), name: "Room 1", count: 2 },
    {id: generateUID(), name: "Room 2", count: 2 },
    {id: generateUID(), name: "Room 3", count: 2 },
    {id: generateUID(), name: "Room 4", count: 2 },
    {id: generateUID(), name: "Room 5", count: 2 },
    {id: generateUID(), name: "Room 6", count: 2 },
    {id: generateUID(), name: "Room 7", count: 2 },
    {id: generateUID(), name: "Room 8", count: 2 },
    {id: generateUID(), name: "Room 9", count: 2 },
    {id: generateUID(), name: "Room 10", count: 2 },
    {id: generateUID(), name: "Room 11", count: 2 },
    {id: generateUID(), name: "Room 12", count: 2 },
    {id: generateUID(), name: "Room 13", count: 2 },
    {id: generateUID(), name: "Room 14", count: 2 },
  ]);
  useEffect(() => {
    setOnlineUsers(1)
  }, []);

  return (
    <div className="room-div">
      <Navbar />
      <div className="roomfront-div">
        <Topbar OnlineUsers={OnlineUsers} />
        <div className="roomback-div">
          {list.map((item) => (
            <Room key={item.id} room={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

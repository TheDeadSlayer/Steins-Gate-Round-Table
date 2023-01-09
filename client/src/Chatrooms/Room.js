import React from "react";
import "./Room.css";
import { BsPeople } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function Room({room:{name,count,id}}) {
  return (
    <div className="bigroom-div">
      <div className="container-div">
        <div className="left-div">
          <div className="room-name">{name}</div>
          <div className="user-count">
            <p>{count}</p>
            <BsPeople className="room-icon"/>
          </div>
        </div>
        <button className="join-btn"><Link to={id}>Join</Link></button>
      </div>
    </div>
  );
}

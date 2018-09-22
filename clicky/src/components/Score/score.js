import React from "react";
import "./Score.css";

//stateless component
const Score = props => (
    <div className="userScore">
        <h3 className="score">Your Current Score {props.total}</h3>
        <h3 className="status">{props.status}</h3>
    </div>

);

export default Score;

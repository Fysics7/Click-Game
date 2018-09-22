import React from "react";
import "./score.css";
import Arrow from 'react-icons/lib/fa/caret-right';

//stateless component
const Score = props => (
    <div className="userScore">
        <h3 className="score">Your Current Score <Arrow /> {props.total}</h3>
        <h3 className="status">{props.status}</h3>
    </div>

);

export default Score
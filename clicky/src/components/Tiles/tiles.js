import React from "react";
import "./Tiles.css";

//tiles component is rending the tiles on the screen
// this component is stateless
const Tiles = props => (
    <div className="tile img-container hover">
        <img alt={props.name} src={props.image} id={props.id}
        onClick={() => props.shuffleScoreTiles(props.id)} className="shuffleTiles" />
    </div>
);

export default Tiles;





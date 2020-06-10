import React from "react";
import './Car.css';

export default (props) => (
    <div className='mainCars'>
        <h1>{props.name}</h1>
        <p style={{fontSize: '20px'}}><strong>Год випуска: {props.year}</strong></p>
        <input type="text" onChange={props.onChageCar} value={props.name}/>
        <button onClick={props.onDelateCar}> Delate car </button>
    </div>
)

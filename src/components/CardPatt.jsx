import React from 'react';
import './bootstrap.css';

function CardPatt (props) {
    return (
        <div class="card" style={{width: "30%"}}>
            <img src={props.imgSrc} class="card-img-top" alt={props.imgHint}></img>
            <div class="card-body">
                <h5 class="card-title">{props.title}</h5>
                <p class="card-text">{props.text}</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    )
}

export default CardPatt;

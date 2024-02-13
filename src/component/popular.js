import React from "react";
//import { useSelector } from 'react-redux';
//import { selectPopular } from "./popularSlice";
//import { popular } from "../util/reddit";
//import { useDispatch } from "react-redux";
//import { reddit } from "./popularSlice";
//import Card from "./card";

export default function Popular(props) {
    
    return (
        <div className='Card'>
            <span className='titleHeader'>
                <span className="subreddit">
                    <img src='' alt=""/>
                    <p>{props.subreddit}</p>
                    <p className="author">{props.author}</p>
                </span>
            </span>
            <span className="content">
                <span className="title">
                    <h2>{props.title}</h2>
                </span>
                <img src={props.thumbnail} alt=""/>
            </span>
            <span className="footer">
                <span className="up/down">
                    <p>&#8679; {props.up} upvotes</p>
                </span>
                <span className="comments">
                    <p>&#128488; {props.numberComments} Comments</p>
                </span>
            </span>
        </div>
    )
}
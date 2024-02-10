import React, {useState} from "react";
import { subredditInfo } from "../util/reddit";

const Card = (props) => {
   const [iconImg, setIconImg] = useState();
   const handleSubIcon = (props) => {
    if(!props.subreddit) {
        return ''
    }
    subredditInfo(props.subreddit).then(setIconImg)
   }
    
    return (
        <div className='Card'>
            <span className='titleHeader'>
                <span className="subreddit">
                    <h6>{props.subreddit}</h6>
                    <img src={iconImg} alt="" subIcon={handleSubIcon(props)}/>
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
                    <p>{props.up} upvotes</p>
                </span>
                <span className="comments">
                    <p>{props.numberComments} Comments</p>
                </span>
            </span>
        </div>
    )
};

export default Card;
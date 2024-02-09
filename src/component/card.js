import React, {useCallback} from "react";

const Card = (props) => {
    return (
        <div className='Card'>
            <span className='titleHeader'>
                <span className="subreddit">
                    <h6>{props.subreddit}</h6>
                </span>
                <span className="title">
                    <h2>{props.title}</h2>
                </span>
            </span>
            <span className="content">
            <img src={props.thumbnail} />
            </span>
            <span className="footer">
                <span className="up/down">
                    <img src="" />
                    <p>{props.up}</p>
                    <p>{props.numberComments}</p>
                </span>
            </span>
        </div>
    )
};

export default Card;
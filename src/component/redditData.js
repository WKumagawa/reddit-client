import React from 'react';
import Card from './card';

const Popular = (props) => {
    return (
    <div className="popular">
        {props.cards.map((x) => {
            return (
                <Card 
                title={x.title}
                subreddit={x.subreddit}
                thumbnail={x.thumbnail}
                commentsLink={x.commentsLink}
                media={x.media}
                up={x.ups}
                numberComments={x.numberComments}
                author={x.author}

                />
            )
        })}
    </div>
    );
};

export default Popular
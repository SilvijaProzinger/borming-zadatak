import React from 'react';
import data from './data'

const MostPopular = () => {
  return (
    <div>
        <h2 className="text-center">Most popular stories</h2>
        <div className="bottom-wrap">
            {data.mostLiked.map((item, index) => {
                return (
                    <div key={index} className="story">
                        <img className="bg-image" src={'https://www.lovezagreb.hr/media/news/medium_' + item.FileName} alt=""/>
                        <h3>{item.naslov}</h3>
                        <p>{item.heading}</p>
                    <div className="row-details">
                        <p className="likes">{item.Likes}</p>
                    <div style={{'textAlign': 'right'}}>
                        <p className="datum">{item.datum_od}</p>
                        <p className="topic">{item.TopicName}</p>
                    </div>
            </div>
        </div>
                )
            })}
        </div>
    </div>
  );
}

export default MostPopular;

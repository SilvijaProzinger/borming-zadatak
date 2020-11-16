import React from 'react';
import data from './data'

const Topics = () => {
  return (
    <div>
        <h2 className="text-center">Explore topics</h2>
        <div className="topics-wrapper">
            {data.topics.map((item, index) => {
                return (
                    <div key={index} className="topic-container">{Object.keys(item.article).filter(element => element === 'TopicName' || element === 'naslov' || element === 'heading').map((element, index) => {
                        return (
                            <div key={index} className="topic">
                                <h3 className="topic" style={{'textAlign': 'center'}}>{element === 'TopicName' ? item.article[element] : null}</h3>
                                <h4 className="text-center" style={{'color': 'white'}}>{element === 'naslov' ? item.article[element] : null}</h4>
                                <p className="text-center" style={{'color': 'white'}}>{element === 'heading' ? item.article[element] : null}</p>
                            </div>
                        )
                    })}</div>
                )
            })}
        </div>
    </div>
  );
}

export default Topics;

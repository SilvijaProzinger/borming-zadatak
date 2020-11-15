import React from 'react';
import data from './data'

const Topics = () => {

  return (
    <div>
        <h2 className="text-center">Explore topics</h2>
        <div className="topics-wrapper">
            {data.topics.map((item, index) => {
                return (
                    <div key={index}>{Object.keys(item.article).map((element, index) => {
                        return (
                            <div key={index}>
                                <h2>{item.article[element]}</h2>
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

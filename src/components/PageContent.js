import React from 'react';
import data from './data'

const PageContent = () => {
  return (
    <div className="bottom-wrap">
        {data.map((item, index) => {
            return (
                <h1>{item.map(element => {
                    return (<p>{element.naslov}</p>)
                })}</h1>
            )
        })}
    </div>
  );
}

export default PageContent;
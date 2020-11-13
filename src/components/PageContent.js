import React from 'react';
import data from './data'

const PageContent = () => {
  const latest = data.latest.map((item, index) => {
        return (
            <div key={index} className="story">
                <h3>{item.naslov}</h3>
                <p>{item.heading}</p>
                <p>{item.Likes}</p>
                <p>{item.datum_od}</p>
            </div>
        )
    })

  return (
    <div className="bottom-wrap">
        {latest}
    </div>
  );
}

export default PageContent;

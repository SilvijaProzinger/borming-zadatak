import React from 'react';
import data from './data'

const PageContent = () => {
  const coverImg = data.latest.slice(0,1).map((item, index) => {
    return (
        <div key={index} className="cover" 
            style={{
                'backgroundImage': `url("https://www.lovezagreb.hr/media/news/medium_${item.FileName}")`,
                'backgroundPosition': 'center',
                'backgroundSize': 'cover',
                'backgroundRepeat': 'no-repeat'
            }}>
            <h3 className="cover-title">{item.naslov}</h3>
            <p className="cover-text">{item.heading}</p>
            <div className="row-details">
                <div style={{'textAlign': 'right'}}>
                    <p className="cover-topic cover-text">#{item.TopicName}</p>
                </div>
            </div>
        </div>
    )
  })

  const latest = data.latest.slice(1,8).map((item, index) => {
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
  })

  return (
    <div className="bottom-wrap">
        {coverImg}
        {latest}
    </div>
  );
}

export default PageContent;

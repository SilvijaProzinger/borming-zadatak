import React from 'react';
import data from './data'

const LatestImages = () => {
  return (
    <div>
    <h2 className="text-center">Latest Images</h2>
    <div className="latest-images">
    {data.latestImages.map((item, index) => {
        return (
                <div key={index} className="img-container">
                    <img className="latest-img" src={'https://www.lovezagreb.hr/media/galerije/' + item.FileName} alt="" />
                    <p className="img-author">{item.Description}</p>
                </div>
        )
    })}
    </div>
    <div style={{'paddingTop': '40px'}}>
        <h3 className="text-center">Share your photo</h3>
        <p className="text-center">Send us your photo of Zagreb with your personal details and we will share it on our Photo Wall</p>
        <div className="photo-buttons">
            <button className="more-photos-button"><a href="https://www.lovezagreb.hr/photo-wall">View more images</a></button>
            <button className="send-button"><a href="https://www.lovezagreb.hr/share-your-photo" className="send-photo-link">Send a photo</a></button>
        </div>
    </div>
    </div>
  );
}

export default LatestImages;

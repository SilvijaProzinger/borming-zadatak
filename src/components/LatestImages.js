import React from 'react';
import data from './data'

const LatestImages = () => {
  return (
    <div>
    <h2 className="text-center">Latest Images</h2>
    {data.latestImages.map((item, index) => {
        return (
            <div key={index} className="latest-images">
                <div className="img-container">
                    <img className="latest-img" src={'https://www.lovezagreb.hr/media/galerije/' + item.FileName} alt="" />
                    <p className="img-author">{item.Description}</p>
                </div>
            </div>
        )
    })}
    <div style={{'paddingTop': '40px'}}>
        <h3 className="text-center">Share your photo</h3>
        <p className="text-center">Send us your photo of Zagreb with your personal details and we will share it on our Photo Wall</p>
        <div className="photo-buttons">
            <button className="more-photos-button">View more images</button>
            <button className="send-button">Send a photo</button>
        </div>
    </div>
    </div>
  );
}

export default LatestImages;

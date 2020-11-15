import React from 'react';
import data from './data'

const Loops = () => {
  return (
    <div>
        <h2 className="text-center">Latest ZagrebLoops</h2>
        <p className="text-center">Move your cursor over the video to play it</p>
        <div className="loops">
            {data.loops.map((item, index) => {
                return (
                    <video className="loop" key={index} src={'https://www.lovezagreb.hr/media/news/' + item.FileName} controls/>
                )
            })}
        </div>
        <button className="more-button">More loops</button>
    </div>
  );
}

export default Loops;

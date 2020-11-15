import React from 'react';
import Latest from './Latest';
import Loops from './Loops';
import MostPopular from './MostPopular';
import Topics from './Topics';
import LatestImages from './LatestImages';

const PageContent = () => {
  return (
    <div>
        <Latest />
        <Loops />
        <MostPopular />
        <Topics />
        <LatestImages />
    </div>
  );
}

export default PageContent;

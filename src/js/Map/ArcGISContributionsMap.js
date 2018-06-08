import React from 'react';
import PropTypes from 'prop-types';

import MapContributions from '../Component/MapContributions';

const ArcGISContributionsMap = ({webMapId, userId}) => {

  return (
    <div style={{backgroundColor: '#EEEEEE', width: "500px", height: "300px", padding: '25px', marginTop:'20px'}}>
      <MapContributions id={webMapId} userId={userId}/>
    </div>
  );

};

ArcGISContributionsMap.propTypes = {
  webMapId: PropTypes.string.isRequired,
  userId: PropTypes.number,
};

export default ArcGISContributionsMap;
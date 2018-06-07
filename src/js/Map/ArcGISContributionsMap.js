import React from 'react';
import PropTypes from 'prop-types';

const ArcGISContributionsMap = ({webMapId, userId}) => {

  return (
    <div style={{backgroundColor: '#EEEEEE', width: "500px", padding: '25px', marginTop:'20px'}}>
      <div>Display the WebMap specified by props.webMapId and filter feature layer by props.userId</div>
      <br/>
      <div>webMapId: {webMapId}</div>
      <div>webMapId: {userId}</div>
    </div>
  );

};

ArcGISContributionsMap.propTypes = {
  webMapId: PropTypes.string.isRequired,
  userId: PropTypes.number,
};

export default ArcGISContributionsMap;
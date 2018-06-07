import React from 'react';
import PropTypes from 'prop-types';

const ArcGISExploreMap = ({webMapId, layers}) => {

  return (
    <div style={{backgroundColor: '#EEEEEE', width: "500px", padding: '25px', marginTop:'20px'}}>
      <div>Display the WebMap specified by props.webMapId and make all layers specified by props.layers visible</div>
      <br/>
      <div>webMapId: {webMapId}</div>
      <div>layers: {layers.join(' | ')}</div>
    </div>
  );

};

ArcGISExploreMap.propTypes = {
  webMapId: PropTypes.string,
  layers: PropTypes.array,
};

export default ArcGISExploreMap;
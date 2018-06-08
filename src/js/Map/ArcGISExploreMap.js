import React from 'react';
import PropTypes from 'prop-types';

import MapLayerViewer from '../Component/MapLayerViewer';

const ArcGISExploreMap = ({webMapId, layers}) => {

  return (
    <div style={{backgroundColor: '#EEEEEE', width: "500px", height: "300px", padding: '25px', marginTop:'20px'}}>
      <MapLayerViewer webMapId={webMapId} layers={layers} />
    </div>
  );

};

ArcGISExploreMap.propTypes = {
  webMapId: PropTypes.string,
  layers: PropTypes.array,
};

export default ArcGISExploreMap;
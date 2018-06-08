import React from 'react';
import PropTypes from 'prop-types';

import MapContributionCapture from '../Component/MapContributionCapture';

const ArcGISContributionCaptureMap = ({geoLocation, onLocationSelected}) => {

  return (
    <div style={{backgroundColor: '#EEEEEE', width: "500px", height: "300px", padding: '25px', marginTop: '20px'}}>
    {      
      // <div>Display a Map and put a marker at the location specified by props.geoLocation</div>
      // <div>When the user clicks on the map or enters an address, call the function provided by props.onLocationSelected and pass a location object .
      // </div>
      // <br/>
      // <div>countryCode: {geoLocation.countryCode}</div>
      // <div>geoLongitude: {geoLocation.geoLongitude}</div>
      // <div>geoLatitude: {geoLocation.geoLatitude}</div>
    }
    <MapContributionCapture geoLocation={geoLocation} onLocationSelected={onLocationSelected} />
    <br/>
    <br/>
    <div>countryCode: {geoLocation.countryCode}</div>
    <div>geoLongitude: {geoLocation.geoLongitude}</div>
    <div>geoLatitude: {geoLocation.geoLatitude}</div>
    </div>
  );

};

ArcGISContributionCaptureMap.propTypes = {
  geoLocation: PropTypes.object,
  onLocationSelected: PropTypes.func.isRequired
};

export default ArcGISContributionCaptureMap;
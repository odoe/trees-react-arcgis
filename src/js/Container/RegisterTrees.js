import React from 'react';

import ArcGISContributionCaptureMap from "../Map/ArcGISContributionCaptureMap";

class RegisterTrees extends React.Component {

  constructor(props) {
    super(props);

    // Rene: af5ea84835f24a6ca3df8d063044f1df
    // Thomas: de96a749d3904c2f87b34b92a052916a
    // Thomas: 534da741b327459eb117f4cc93acd98e
    const webMapId = '534da741b327459eb117f4cc93acd98e';
    const userId = 3643;

    this.state = {
      webMapId,
      userId,
      geoLocation: {}
    };

    this.onLocationSelected = this.onLocationSelected.bind(this);
  }

  onLocationSelected(geoLocation) {
    console.log(geoLocation);
    this.setState({geoLocation});
  }

  render() {
    return (
      <div style={{backgroundColor: '#CCCCCC', marginTop: '20px', padding: '8px', width: '550px'}}>
        <div style={{fontWeight: 'bold'}}>Register Trees</div>

        <ArcGISContributionCaptureMap geoLocation={this.state.geoLocation}
                                      onLocationSelected={this.onLocationSelected}/>
      </div>
    );
  }
}

export default RegisterTrees;
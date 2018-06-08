import React from 'react';

import ArcGISContributionsMap from '../Map/ArcGISContributionsMap';

class UserTrees extends React.Component {

  constructor(props) {
    super(props);

    // Rene: af5ea84835f24a6ca3df8d063044f1df
    // Thomas: de96a749d3904c2f87b34b92a052916a
    // Thomas: 534da741b327459eb117f4cc93acd98e
    const webMapId = 'd601683709dc415b99ddc1bc66a6d8eb';
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
        <div style={{fontWeight: 'bold'}}>User Trees</div>

        <ArcGISContributionsMap webMapId={this.state.webMapId} userId={this.state.userId}/>

      </div>
    );
  }
}

export default UserTrees;
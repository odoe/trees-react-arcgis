import React from 'react';

import MapLayerSelector from '../Component/MapLayerSelector';
import ArcGISExploreMap from '../Map/ArcGISExploreMap';

class Explore extends React.Component {

  constructor(props) {
    super(props);

    // Rene: af5ea84835f24a6ca3df8d063044f1df
    // Thomas: de96a749d3904c2f87b34b92a052916a
    // Thomas: 534da741b327459eb117f4cc93acd98e
    const webMapId = 'd601683709dc415b99ddc1bc66a6d8eb';

    const mapLayers = {
      'Tree Inventory': 'Planted Trees',
      existing_forest: 'Existing forest',
      restoration_opportunities: 'Restoration Opportunities'
    };

    const activeMapLayers = ['Tree Inventory'];

    this.state = {
      webMapId: webMapId,
      mapLayers: mapLayers,
      activeMapLayers: activeMapLayers
    };
    this.onActiveMapLayersChange = this.onActiveMapLayersChange.bind(this);
  }

  onActiveMapLayersChange(activeMapLayers) {
    this.setState({activeMapLayers});
  }

  render() {
    return (
      <div style={{backgroundColor: '#CCCCCC', marginTop: '20px', padding: '8px', width: '550px'}}>
        <div style={{fontWeight: 'bold'}}>Explore</div>

        <MapLayerSelector
          mapLayers={this.state.mapLayers}
          activeMapLayers={this.state.activeMapLayers}
          onStateUpdate={this.onActiveMapLayersChange}
        />
        <ArcGISExploreMap webMapId={this.state.webMapId} layers={this.state.activeMapLayers}/>

      </div>
    );
  }
}

export default Explore;

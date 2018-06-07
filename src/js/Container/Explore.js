import React from 'react';

import MapLayerSelector from '../Component/MapLayerSelector';
import ArcGISExploreMap from '../Map/ArcGISExploreMap';

class Explore extends React.Component {

  constructor(props) {
    super(props);

    // Rene: af5ea84835f24a6ca3df8d063044f1df
    // Thomas: de96a749d3904c2f87b34b92a052916a
    // Thomas: 534da741b327459eb117f4cc93acd98e
    const webMapId = '534da741b327459eb117f4cc93acd98e';

    const mapLayers = {
      ttc_trees: 'Planted Trees',
      existing_forest: 'Existing forest',
      restoration_opportunities: 'Restoration Opportunities'
    };

    const activeMapLayers = ['ttc_trees'];

    this.state = {
      webMapId: webMapId,
      mapLayers: mapLayers,
      activeMapLayers: activeMapLayers
    };

    console.log(activeMapLayers);

    this.onActiveMapLayersChange = this.onActiveMapLayersChange.bind(this);
  }

  onActiveMapLayersChange(activeMapLayers) {
    console.log(activeMapLayers);
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

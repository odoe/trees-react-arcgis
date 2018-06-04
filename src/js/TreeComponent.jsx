import * as React from 'react';
import { WebMap } from 'react-arcgis';

export default class TreeComponent extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            status: 'loading',
            map: null,
            view: null
        };

        this.handleFail = this.handleFail.bind(this);
    }

    render() {
        return <WebMap
                    loaderOptions={{
                        dojoConfig: {
                            has: {
                            "esri-promise-compatibility": 1,
                            "esri-featurelayer-webgl": 1
                            }
                        }
                    }}
                    id={this.props.id}
                    onLoad={this.handleLoad.bind(this)}
                    onFail={this.handleFail.bind(this)}
        />;
    }

    handleLoad(map, view) {
      const url = new URL(window.location.href);
      if (url.searchParams.has("user_id")) {
        const user_id = url.searchParams.get("user_id");
        // FIND TREE LAYER //
        const tree_inventory_layer = map.layers.find(layer => {
          return (layer.title === "TreeInventory");
        });

        //
        // https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-FeatureLayer.html
        //
        if(tree_inventory_layer) {

          // SET TREE INVENTORY FILTER TO USER ID //
          //
          // https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-FeatureLayer.html#definitionExpression
          //
          tree_inventory_layer.definitionExpression = `user_id = ${user_id}`;
          const query = tree_inventory_layer.createQuery();
          query.where = `user_id = ${user_id}`;
          tree_inventory_layer.queryFeatures(query)
          .then(({ features }) => {
            view.goTo({ target: features, scale: 10000 });
            console.log(features);
            // in this case we know we only have one tree
            const feature = features[0];
            console.log(this.props.store);
            this.props.store.tree = feature.attributes;
          })
          .catch(error => console.log(error.message));
        } else {
          /* CAN'T FIND TREE INVENTORY LAYER */
        }
      }
      this.setState({ map, view });
    }

    handleFail(e) {
        console.error(e);
        this.setState({ status: 'failed' });
    }
}
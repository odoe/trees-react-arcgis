import {loadModules} from 'react-arcgis';

export default loadModules(['esri/core/Accessor', 'esri/config']).then(([Accessor, esriConfig]) => {

  esriConfig.request.proxyUrl = "https://staging.trilliontreecampaign.org/esri/proxy.php";
  // urlUtils.addProxyRule({
  //   //urlPrefix: "https://staging.trilliontreecampaign.org/esri/proxy.php",
  //   proxyUrl: "https://staging.trilliontreecampaign.org/esri/proxy.php"
  // });

  const Store = Accessor.createSubclass({
    declaredClass: 'app-store',

    constructor() {
      this.tree = {};
    },

    properties: {
      tree: {}
    }
  });

  return new Store();
});
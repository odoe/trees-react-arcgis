import { loadModules } from 'react-arcgis';

export default loadModules(['esri/core/Accessor']).then(([Accessor]) => {
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
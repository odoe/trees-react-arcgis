import React from 'react';
import { Map } from 'react-arcgis';

import TreeComponent from './TreeComponent';
import Form from './Form';

const webmapId = 'af5ea84835f24a6ca3df8d063044f1df';

export default ({ store }) => (
    <div style={{ width: '100vw', height: '100vh' }}>
        <div class='tree-map'>
            <TreeComponent store={store} id={webmapId} />
        </div>
        <Form store={store} />
    </div> 
);

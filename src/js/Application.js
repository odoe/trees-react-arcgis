import React from 'react';
import {Map} from 'react-arcgis';

import TreeComponent from './TreeComponent';
import Explore from './Container/Explore';
import UserTrees from './Container/UserTrees';
import Form from './Form';
import RegisterTrees from "./Container/RegisterTrees";


const userId = 3643;

export default ({store}) => (
  <div style={{width: '100vw', height: '100vh'}}>
    {/*<div className='tree-map'>*/}
    {/*<TreeComponent store={store} id={webMapId} userId={3643}/>*/}
    {/*</div>*/}

    <Explore/>

    <UserTrees/>

    <RegisterTrees/>

    <Form store={store}/>
  </div>
);

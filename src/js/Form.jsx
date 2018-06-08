import * as React from 'react';

export default class FormComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            country: '',
            geo_latitude: null,
            geo_longitude: null,
            pftp_id: null,
            plant_date: null,
            plant_project_id: null,
            description: null,
            tpo_id: null,
            tree_count: null,
            tree_type: null,
            type: null,
            user_id: null,
            user_name: null
        };
        this.props.store.watch('tree', tree => {
          this.setState(tree);
        });
    }

    render() {
        return (
          <div className='tree-form'>
            <label>User ID: {this.state.user_id}</label>
            <br />
            <label>User Name: {this.state.user_name}</label>
          </div>
        )
    }
}
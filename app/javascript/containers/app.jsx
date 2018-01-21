// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import Ideas from './ideas';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {ideas: []};


    }

    componentWillMount() {
        let that = this;
        $.get('/posts', function (data) {
            that.setState({ideas: JSON.parse(data)});
        });
    }



    render() {
        return (
            <div>
                <Ideas ideas={this.state.ideas}/>
            </div>
        );
    }
}
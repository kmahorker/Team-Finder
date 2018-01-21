// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import Ideas from './ideas';

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            ideas: []
        };
    }

    componentWillMount() {
        let that = this;
        $.get('/posts', function (data) {
            that.setState({ideas: JSON.parse(data)});
        });
    }

    search(target) {
        var search_term = target.value;
        let that = this;
        $.get("/posts?term=" + search_term, function (data) {
            that.setState({ideas: JSON.parse(data)});
        });
    }


    render() {
        return (
            <div>
                <input ref={"myinput"}/>
                <button onClick={()=>this.search(this.refs["myinput"])}>Search</button>

                <Ideas ideas={this.state.ideas}/>
            </div>
        );
    }
}

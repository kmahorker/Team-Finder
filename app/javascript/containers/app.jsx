// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react';
import Ideas from './ideas';
import Create from './create';
import Button from 'react-bootstrap/lib/Button';
import FormControl from 'react-bootstrap/lib/FormControl';



const input_ref = "myinput",
    resource = "/posts";

function searchUrl(search_term) {
    return resource + "?term=" + search_term;
}

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            ideas: []
        };
    }

    componentWillMount() {
        $.get(resource, function (data) {
            var x = JSON.parse(data);
            x.reverse();
            this.setState({ideas: x});
        }.bind(this));
    }

    search({value}) {
        $.get(
            searchUrl(value),
            function (data) {
                this.setState({
                    ideas: JSON.parse(data)
                });
            }.bind(this)
        );
    }


    render() {
        return (
            <div>
                <Create onResult={()=>
                {
                        // $("#ideas").load(location.href + " #ideas");
                    location.reload();
                }}/>


                <FormControl ref={input_ref}/>
                <Button bsStyle="primary"
                        onClick={this.search.bind(this, this.refs[input_ref])}>
                    Search
                </Button>

                <Ideas ideas={this.state.ideas} id={"ideas"}/>
            </div>
        );
    }
}

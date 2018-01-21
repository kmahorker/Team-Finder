import React from 'react';
import Button from 'react-bootstrap/lib/Button';
import FormControl from 'react-bootstrap/lib/FormControl';


const idea_url = "/posts";

export default class Create extends React.Component {
    submit() {
        let data = {};
        _.each(this.refs, function (ref, index) {
            data[index] = ref.value;
        });
        delete data.skills;



        $.post(idea_url, data)
            .done(function (result) {
                this.props.onResult(result);
            }.bind(this));
    }

    render() {
        return (
            <div>
                <FormControl type={"text"} placeholder={"Title"}inputRef={ref => { this.input = ref; }} ref =>{"title"}/><br/>
                <FormControl placeholder={"Description"} ref={"description"} aria-rowcount="5" aria-colcount="40"/><br/>
                <FormControl placeholder={"Hours"} type={"number"} ref={"hours"}/><br/>
                <FormControl placeholder={"Weeks"} type={"number"} ref={"weeks"}/><br/>
                <FormControl placeholder={"Email"} type={"email"} ref={"email"}/><br/>
                <FormControl placeholder={"Github"} ref={"github"}/><br/>

                {/*<form ref={"skills"}>*/}
                    {/*<input type="checkbox" value={2}>Java</input>*/}
                {/*</form>*/}
                {/*Put skills here*/}<br/>

                <Button bsStyle="primary"
                        onClick={this.submit.bind(this)}>Create</Button>
            </div>
        );
    }
}
import React from 'react';
import Button from 'react-bootstrap/lib/Button';
// import TextInput  from 'react-bootstrap/lib/TextInput';
import FormControl  from 'react-bootstrap/lib/FormControl';
import FormGroup  from 'react-bootstrap/lib/FormGroup';



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
                    {/*<FormGroup*/}
                {/*controlId="formBasicText"*/}
                {/*validationState={this.getValidationState()}*/}
                {/*>*/}
                <input type={"text"} placeholder={"Title"} ref ={"title"}> </input> <br/>
                <input placeholder={"Description"} ref={"description"} aria-rowcount="5" aria-colcount="40"/><br/>
                <input placeholder={"Hours"} type={"number"} ref={"hours"}/><br/>
                <input placeholder={"Weeks"} type={"number"} ref={"weeks"}/><br/>
                <input placeholder={"Email"} type={"email"} ref={"email"}/><br/>
                <input type= {"text"} placeholder={"Github"} ref={"github"}/><br/>

                {/*<form ref={"skills"}>*/}
                    {/*<input type="checkbox" value={2}>Java</input>*/}
                {/*</form>*/}
                {/*Put skills here*/}

                <Button bsStyle="primary"
                        onClick={this.submit.bind(this)}>Create</Button>
            </div>
        );
    }
}
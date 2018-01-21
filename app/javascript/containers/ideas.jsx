function createIdeaBox(ideaObj, index) {
    return (
      <div key={"ideaObj" + index}>
          <Panel bsStyle="primary">
              <Panel.Heading>
                  <Panel.Title componentClass="h2"> {ideaObj.title} </Panel.Title>
              </Panel.Heading>
              <ListGroup>
                  <ListGroupItem> Description: {ideaObj.description}</ListGroupItem>
                  <ListGroupItem> Platforms: {ideaObj.platforms} </ListGroupItem>
                  <ListGroupItem> Hours Per Week: {ideaObj.hours} </ListGroupItem>
                  <ListGroupItem> Expected Duration: {ideaObj.weeks} week(s) </ListGroupItem>
                  <ListGroupItem> Skills: {ideaObj.skills} </ListGroupItem>
                  <ListGroupItem> Email: {ideaObj.email} </ListGroupItem>
                  <ListGroupItem> Github: {ideaObj.github} </ListGroupItem>
                  {/*<ListGroupItem>ideaObj.</ListGroupItem>*/}
                  {/*<ListGroupItem>&hellip;</ListGroupItem>*/}
                  <ListGroupItem><button onClick={()=>{
                      document.getElementById("button"+index).innerHTML++;
                  }} id={"button"+index}>{ideaObj.upvote_count}</button></ListGroupItem>

              </ListGroup>

          </Panel>
      </div>
    );
}

import React from 'react';
import Panel from 'react-bootstrap/lib/Panel';
import ListGroup from 'react-bootstrap/lib/ListGroup';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';

export default class Ideas extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ideas: props.ideas
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            ideas: nextProps.ideas
        });
    }

    render() {
        let ideas_html_array = [];
        _.each(this.state.ideas, function(idea, index) {
            ideas_html_array.push(createIdeaBox(idea, index));
        });

        return (
            <div>
                {ideas_html_array}
            </div>
        );
    }
}

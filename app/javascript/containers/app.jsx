// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'

export default class App extends React.Component {
    render() {
        return (
            <div>
                <button id="myBtn">Open Modal</button>
                <div id="myModal" className="modal">
                    <div className="modal-content">
                        <span className="close">&times;</span>
                        <p>Some text in the Modal..</p>
                    </div>
                </div>

                <script>
                    {/*// Get the modal*/}
                    var modal = document.getElementById('myModal');

                    {/*// Get the button that opens the modal*/}
                    var btn = document.getElementById("myBtn");

                    {/*// Get the <span> element that closes the modal*/}
                    var span = document.getElementsByClassName("close")[0];

                    {/*// When the user clicks the button, open the modal*/}
                    btn.onclick = function() {
                        modal.style.display = "block";
                    }

                    {/*// When the user clicks on <span> (x), close the modal*/}
                    span.onclick = function() {
                        modal.style.display = "none";
                    }

                    {/*// When the user clicks anywhere outside of the modal, close it*/}
                    window.onclick = function(event) {
                        if (event.target == modal) {
                            modal.style.display = "none";
                        }
                    }
                </script>
            </div>
        );
    }
}
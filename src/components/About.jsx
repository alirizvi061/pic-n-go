import React, { Component } from 'react'

export default class About extends Component {
    render() {
        return (
            <div>
                <div className="aboutDiv">
                    <h3>
                        About Us
                    </h3><br />
                    <p>Hello there! I see you're interested in making a travel bucket list. Well, you're in the right place! Pic-N-Go is a powerful bucket list app that allows you to browse thousands of pictures of adventurous places and add them to your bucketlist. Feel free to create a travel plan with the note taking feature available on every picture!</p><br />
                    <h4>If you haven't already signed up, <a href="/users">click here!</a></h4><br />
                </div>
            </div>
        )
    }
}

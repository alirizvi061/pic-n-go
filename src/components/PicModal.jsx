import React, { Component } from 'react'
import { Modal, Button } from "react-bootstrap"


export default class PicModal extends Component {
    render() {
        return (
            <div>
                {/* <button onClick={() => this.props.closeModal()}> X </button>
                <h1>Picture Modal</h1> */}

                <Modal.Dialog>
                    <Modal.Header closeButton>
                        <Modal.Title>Picture</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <p>Add the picture to your bucket list!</p>
                        <img src={`https://farm${this.props.farm}.staticflickr.com/${this.props.server}/${this.props.id}_${this.props.secret}.jpg`} alt="thumbnail url" />
                    </Modal.Body>

                    <Modal.Footer>
                        <Button onClick={() => this.props.closeModal()} variant="secondary">Close</Button>
                        <Button onClick={this.props.saveToList()} variant="primary">Save to list</Button>
                    </Modal.Footer>
                </Modal.Dialog>
            </div>
        )
    }
}

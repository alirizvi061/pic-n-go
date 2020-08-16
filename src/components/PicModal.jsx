import React, { Component } from 'react'
import { Modal, Button } from "react-bootstrap"


export default class PicModal extends Component {
    render() {
        return (
            <div>
                <button onClick={() => this.props.closeHomeImageShowModal()}> X </button>
                <h1>Picture Modal</h1>

                <Modal.Dialog>
                    <Modal.Header closeButton>
                        <Modal.Title>Picture</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <p>Add the picture to your bucket list!</p>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button onClick={() => this.props.closeHomeImageShowModal()} variant="secondary">Close</Button>
                        <Button variant="primary">Save changes</Button>
                    </Modal.Footer>
                </Modal.Dialog>
            </div>
        )
    }
}

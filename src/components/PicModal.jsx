import React, { Component } from 'react'
import { Modal, Button } from "react-bootstrap"


export default class PicModal extends Component {
    render() {
        return (
            <div>
                <button onClick={() => this.props.closeModal()}> X </button>
                <h1>Picture Modal</h1>

                <Modal.Dialog>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal title</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <p>Modal body text goes here.</p>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary">Close</Button>
                        <Button variant="primary">Save changes</Button>
                    </Modal.Footer>
                </Modal.Dialog>
            </div>
        )
    }
}

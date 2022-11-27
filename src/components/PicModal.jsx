import React, { Component } from 'react'
import axios from "axios";
import { Modal, Button } from "react-bootstrap"


export default class PicModal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            notes: "",
        }
    }

    handleChange = (event) => {
        this.setState({ [event.target.id]: event.target.value });
    }

    saveToList = () => {
        let imageURL = `${this.props.images.urls.full}`;

        axios
            .put(this.props.baseURL + "/users/list", {
                _id: this.props.userId,
                image: imageURL,
                notes: this.state.notes,
            })
            .then((res) => {
                this.props.closeModal()
            })
            .catch((error) => console.error({ Error: error }));
    };

    render() {
        return (
            <div className="searchedImageModal">
                <Modal.Dialog>
                    <Modal.Header className="bg-warning text-dark">
                        <Modal.Title>Picture</Modal.Title>
                    </Modal.Header>

                    <Modal.Body className="bg-warning text-dark">
                        <p>Add the picture to your bucket list!</p>
                        <img className="modalPicture" key={this.props.images.id} src={this.props.images.urls.regular} alt={this.props.images.alt_description} />

                        <form >
                            <label>
                                Notes:
                                <input type="text" name="notes" id="notes" value={this.state.notes} onChange={this.handleChange} />
                            </label>
                        </form>
                    </Modal.Body>

                    <Modal.Footer className="bg-warning">
                        <Button onClick={() => this.props.closeModal()} variant="secondary">Close</Button>
                        {this.props.userId
                            ? <Button onClick={() => this.saveToList()} variant="primary">Save to list</Button>
                            : <p>Log in to save</p>}
                    </Modal.Footer>
                </Modal.Dialog>
            </div>
        )
    }
}

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
        // console.log(event)
        // console.log("notes change entered")
        this.setState({ [event.target.id]: event.target.value });
        console.log(this.state.notes)
    }

    saveToList = () => {
        console.log("function entered");
        let imageURL = `https://farm${this.props.farm}.staticflickr.com/${this.props.server}/${this.props.id}_${this.props.secret}.jpg`;

        console.log(imageURL);
        console.log(this.props.baseURL);
        console.log(this.props.userId);
        console.log(this.state.notes);

        axios
            .put(this.props.baseURL + "/users/list", {
                _id: this.props.userId,
                image: imageURL,
                notes: this.state.notes,
            })
            .then((res) => {
                console.log(res.data);
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
                        <img id="modalPic" src={`https://farm${this.props.farm}.staticflickr.com/${this.props.server}/${this.props.id}_${this.props.secret}.jpg`} alt="thumbnail url" />
                        <form >
                            <label>
                                Notes:
                            <input type="text" name="notes" id="notes" value={this.state.notes} onChange={this.handleChange} />
                            </label>
                        </form>
                    </Modal.Body>

                    <Modal.Footer className="bg-warning">
                        <Button onClick={() => this.props.closeModal()} variant="secondary">Close</Button>
                        <Button onClick={() => this.saveToList()} variant="primary">Save to list</Button>
                    </Modal.Footer>
                </Modal.Dialog>
            </div>
        )
    }
}

import React, { Component } from 'react'
import { OverlayTrigger, Tooltip, Button } from "react-bootstrap"

export default class NotesModal extends Component {
    render() {
        return (
            <>
                {['right'].map((placement) => (
                    <OverlayTrigger
                        key={placement}
                        placement={placement}
                        overlay={
                            <Tooltip id={`tooltip-${placement}`}>
                                {/* Tooltip on <strong>{placement}</strong>. */}
                                {this.props.notes[this.props.index]}
                            </Tooltip>
                        }
                    >
                        <Button variant="secondary">notes</Button>
                    </OverlayTrigger>
                ))}
            </>
        )
    }
}

import React from "react"
import { } from "styled-components"

import "./modal.css"

const Modal = (props) => {
    return (
        <div

            style={{
                background: "red",
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                background: "rgba(0, 0, 0, .5)"
            }}
        >
            <div
                className="modal-container"
                style={{
                    width: "960px",
                    background: "white",
                    padding: "20px",
                    position: "relative",
                }}
            >
                <div className="modal-header">
                    <div className="modal-title" style={props.styles}>{props.title ? props.title : null}</div>
                    <button onClick={props.toggleModal}>X</button>
                </div>
                {props.children}
            </div>
        </div>
    )
}

export default Modal

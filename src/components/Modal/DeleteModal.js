import React from "react";
import "./modal.css";
function DeleteModal({ modal, setModal }) {
    return (
        <div className="delete-container">
            <div className="delete-heading">Did you want to delete this address?</div>
            <p className="delete-description">This action is irreversible.</p>
            <br/>
            <div>
                <button className="cancel-button" onClick={() => setModal(0)}>Cancel</button>
                <button className="delete-button" onClick={() => setModal(0)}>Delete</button>
            </div>
        </div>
    );
}

export default DeleteModal;
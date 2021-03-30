import React from "react";
import "./modal.css";
import btcLogo from "../../assets/btc.svg";
import ethLogo from "../../assets/ETH.png";
import ltcLogo from "../../assets/ltc.svg";
import bchLogo from "../../assets/bch.svg";
import xmlLogo from "../../assets/xlm.svg";


function DateOfBirth() {
    return (
        <div className="profile-input d-flex justify-content-between align-items-center">
            <input type="text" className="profile-calendar-input" />
            <i class="fas fa-calendar-alt mr-4 calendar-icon"></i>
        </div>
    );
}

function AssetDropdown() {
    return (
        <div class="dropdown">
            <button
                class="text-left d-flex justify-content-between align-items-center pr-4  profile-input dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
            >
                California, USA
				<i class="fas fa-caret-down caret-dropdown"></i>
            </button>
            <div
                class="profile-dropdown-select dropdown-menu"
                aria-labelledby="dropdownMenuButton"
            >
                <a class="dropdown-item" href="#">
                    Action
				</a>
                <a class="dropdown-item" href="#">
                    Another action
				</a>
                <a class="dropdown-item" href="#">
                    Something else here
				</a>
            </div>
        </div>
    );
}

function Inputs({ label }) {
    return (
        <div className="col-sm mt-3 ">
            <label className="profile-label" htmlFor="" >
                {label}
            </label>
            <br />
            {label === "Asset" ? (
                <AssetDropdown />
            ) : (
                <input className="profile-input" type="text" />
            )}
        </div>
    );
}
function EditModal({ modal, setModal }) {
    return (
        <div className="edit-container">
            <div>
                <div className="wallet-heading">Edit Address</div>
                <button className="wallet-quit" onClick={() => setModal(0)}><i className="fa fa-times"></i></button>
            </div>
            <div className="edit-head-line"></div>
            <div className="edit-body">
                <div className="mt-sm-5 row" style={{textAlign:'left'}}>
                    <Inputs label="Asset"/>
                    <Inputs label="Nickname" />
                </div>
                <div className=" mt-sm-5 row" style={{textAlign:'left'}}>
                    <Inputs label="Address" className="label"/>
                </div>
                <br/>
                <button className="save-button">Save </button>
            </div>
        </div>
    );
}

export default EditModal;
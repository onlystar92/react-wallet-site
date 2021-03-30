import React, { useState } from "react";
import "./modal.css";
import btcLogo from "../../assets/btc.svg";
import ethLogo from "../../assets/ETH.png";
import ltcLogo from "../../assets/ltc.svg";
import bchLogo from "../../assets/bch.svg";
import xlmLogo from "../../assets/xlm.svg";

function AssetDropdown() {
    const [select, setSelect] = useState(0);
    const assets = [
        { text: "Bitcoin BTC", image: btcLogo },
        { text: "Etherium ETH", image: ethLogo },
        { text: "Bitcoin Cash BCH", image: bchLogo },
        { text: "Chainlink LINK", image: ltcLogo },
        { text: "Stellar XML", image: xlmLogo },
    ];
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
                <div>
                    <img className="item-image" src={assets[select].image} alt="" />
                    <span className="item-text">{assets[select].text}</span>
                </div>
                <i class="fas fa-caret-down caret-dropdown"></i>
            </button>
            <div
                class="profile-dropdown-select dropdown-menu"
                aria-labelledby="dropdownMenuButton"
            >
                {
                    assets.map((value,index) =>
                        <a class="dropdown-item" href="#" onClick={() => setSelect(index)}>
                            <img className="item-image" src={value.image} alt="" />
                            <span className="item-text">{value.text}</span>
                        </a>
                    )
                }
            </div>
        </div>
    );
}

function Inputs({ label }) {
    return (
        <div className="col-sm mt-3 ">
            <label className="edit-label" htmlFor="" >
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
            <div className="wallet-header">
                <div className="wallet-heading">Edit Address</div>
                <button className="wallet-quit" onClick={() => setModal(0)}><i className="fa fa-times"></i></button>
            </div>
            <div className="head-line"></div>
            <div className="edit-body">
                <div className="mt-sm-5 row" style={{ textAlign: 'left' }}>
                    <Inputs label="Asset" />
                    <Inputs label="Nickname" />
                </div>
                <div className=" mt-sm-5 row" style={{ textAlign: 'left' }}>
                    <Inputs label="Address" className="label" />
                </div>
                <button className="save-button col-lg-5 col-sm-12 col-md-10">Save </button>
            </div>
        </div>
    );
}

export default EditModal;
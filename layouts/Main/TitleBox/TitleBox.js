import React, { useState } from 'react'
import {
    InputGroup,
    Input,
    InputGroupText,
} from "reactstrap";

import SearchIcon from '@mui/icons-material/Search';
import { darkText3, boxDarkBackground0 } from "../../../functions/Colors";
import Web3 from 'web3'
import { serverAddress } from '../../../functions/ServerAddress';
import toast from "react-hot-toast";

const TitleBox = ({ IsLightMode }) => {
    const web3 = new Web3(serverAddress)
    const [ProfileBox, setProfileBox] = useState(null);
    const [Text, SetText] = useState('')
    const handleProfileBoxClose = () => {
        setMobileMenuAnchor(null);
        setProfileBox(null);
    };

    function detectInputType(input) {
        if (web3.utils.isAddress(input)) {
            window.location.assign(`/address/${input}`)
        }
        else if (/^0x[0-9a-fA-F]{64}$/.test(input)) {
            window.location.assign(`/transaction/${input}`)
        }
        else if (/^\d+$/.test(input)) {
            window.location.assign(`/block/${input}`)
        }
        else if (/^0x[0-9a-fA-F]+$/.test(input)
            && !/^0x[0-9a-fA-F]{40}$/.test(input)
            && !/^0x[0-9a-fA-F]{64}$/.test(input)
        ) {
            window.location.assign(`/block/${input}`)
        } else {
            toast.error("Your search did not match any records!", {
                position: "bottom-left",
            }); 
        }
    }

    return (
        <div className='mt-4' style={{
            color: IsLightMode ? 'white' : darkText3
        }}>
            <h6 style={{ fontSize: '24px' }}>
                Nickchain explorer
            </h6>
            <form onSubmit={e => {
                e.preventDefault();
                detectInputType(Text);
            }}>
                <button type="submit" style={{ display: 'none' }} />
                <InputGroup
                    id="MainDashboardInputGroup"
                    className="input-group-merge mb-2 MainDashboardInputGroup"
                    style={{ direction: "rtl", width: "100%", background: IsLightMode ? 'white' : boxDarkBackground0 }}
                >

                    <input
                        type="text"
                        style={{ display: "none" }}
                        autocomplete="off"
                    />
                    <InputGroupText
                        id="PriceInputGroup"
                        style={{
                            background: "none",
                            padding: "0px",
                            marginRight: "4px",
                        }}
                    >
                        <div>
                            <SearchIcon
                                size={23}
                                style={{
                                    display: "block",
                                    borderStyle: "none",
                                    cursor: "pointer",
                                    color: 'white',
                                    borderRadius: "8px",
                                    padding: "4px",
                                    width: '36px',
                                    height: '36px',
                                    background: '#0784c3'
                                }}
                                onClick={() => { detectInputType(Text) }}
                            />
                        </div>
                    </InputGroupText>
                    <Input
                        autoComplete="false"
                        name="volume"
                        style={{
                            textAlign: "left",
                            direction: "ltr",
                            background: "none",
                        }}
                        id="MainDashboardInputBox"
                        placeholder="search by address / transaction / block number"
                        type="text"
                        onChange={(e) => { SetText(e.target.value) }}
                    />

                </InputGroup>
                <small style={{ color: darkText3 }}>Search your address or transactions with Nikchain explorer!</small>
            </form>

        </div>
    )
}

export default TitleBox

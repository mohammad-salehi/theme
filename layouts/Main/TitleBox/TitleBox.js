import React, { useState } from 'react'
import {
    Card,
    InputGroup,
    Input,
    InputGroupText,
    Modal,
    ModalBody,
} from "reactstrap";
import {
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    TextField,
    Menu,
    MenuItem,
    Box,
    useMediaQuery,
    useTheme,
} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { darkHeader, darkText1, darkText2, darkText3, darkText4, boxDarkBackground0, lightText1, lightText2, lightText3, darkBackground3 } from "../../../functions/Colors";
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import BedtimeIcon from '@mui/icons-material/Bedtime';

const TitleBox = ({ IsLightMode }) => {

    const [ProfileBox, setProfileBox] = useState(null);

    const handleProfileBoxClose = () => {
        setMobileMenuAnchor(null);
        setProfileBox(null);
    };
    return (
        <div className='mt-4' style={{
            color: IsLightMode ? 'white' : darkText3
        }}>
            <h6 style={{ fontSize: '24px' }}>
                Nickchain explorer
            </h6>
            <form onSubmit={() => { }}>

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
                    />

                </InputGroup>
                <small style={{ color: darkText3 }}>Search your address or transactions with Nikchain explorer!</small>
            </form>

        </div>
    )
}

export default TitleBox

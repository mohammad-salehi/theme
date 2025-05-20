import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { GetRequest } from '../../functions/GetRequest';
import { PostRequest } from '../../functions/PostRequest';
import { darkText3, lightText3, boxLightBackground0, boxDarkBackground0 } from '../../functions/Colors';
import { Paginator } from 'primereact/paginator';
import { networkData } from '../../functions/functions';
import DeleteIcon from '@mui/icons-material/Delete';
import AddNewAddress from '../AddNewAddress/AddNewAddress';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Col, Row } from 'reactstrap';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
const AddressChart = ({ IsLightMode }) => {

    const [ShowData, SetShowData] = useState([
        {
            address: 'TVHLSH8soGa8oKHSYd699iqi8fwpmU2eQR',
            network: 'ethereum',
            owner: 'alireza'
        },
        {
            address: 'TVHLSH8soGa8oKHSYd699iqi8fwpmU2eQR',
            network: 'tron',
            owner: 'alireza'
        },
        {
            address: 'TVHLSH8soGa8oKHSYd699iqi8fwpmU2eQR',
            network: 'tron',
            owner: 'alireza'
        },
        {
            address: 'TVHLSH8soGa8oKHSYd699iqi8fwpmU2eQR',
            network: 'tron',
            owner: 'alireza'
        },
        {
            address: 'TVHLSH8soGa8oKHSYd699iqi8fwpmU2eQR',
            network: 'tron',
            owner: 'alireza'
        },
        {
            address: 'TVHLSH8soGa8oKHSYd699iqi8fwpmU2eQR',
            network: 'tron',
            owner: 'alireza'
        },
        {
            address: 'TVHLSH8soGa8oKHSYd699iqi8fwpmU2eQR',
            network: 'tron',
            owner: 'alireza'
        },
        {
            address: 'TVHLSH8soGa8oKHSYd699iqi8fwpmU2eQR',
            network: 'tron',
            owner: 'alireza'
        },
        {
            address: 'TVHLSH8soGa8oKHSYd699iqi8fwpmU2eQR',
            network: 'tron',
            owner: 'alireza'
        },
        {
            address: 'TVHLSH8soGa8oKHSYd699iqi8fwpmU2eQR',
            network: 'tron',
            owner: 'alireza'
        },
    ])

    const onRowToggle = (e) => {
        setExpandedRowIds([])
        for (let i = 0; i < e.data.length; i++) {
            const rowId = e.data[i].id; // فرض می‌کنیم که `id` کلید منحصر به فرد هر ردیف است

            setExpandedRowIds(prevState => {
                // اگر ردیف جدید قبلاً باز بود، آن را بسته کنیم
                if (prevState.includes(rowId)) {
                    return []; // اگر ردیف جدید قبلاً باز است، همه را ببندیم
                } else {
                    // در غیر این صورت، فقط ردیف جدید را باز کنیم
                    return [rowId];
                }
            });
        }
        console.log(e)

    };

    const address = (row) => {
        return (
            <span>
                {row.address}
            </span>
        )
    }
    const network = (row) => {
        return (
            <span>
                <img

                    style={{ width: '25px', marginLeft: '4px', background: row.network === 'ethereum' ? 'rgb(251,251,251)' : null, borderRadius: row.network === 'ethereum' ? '50%' : null }}
                    src={networkData.find(item => item.name === row.network).logo}
                />
                {row.network.toUpperCase()}

            </span>
        )
    }
    const owner = (row) => {
        return (
            <span>
                {row.owner}

            </span>
        )
    }
    const deleteAddress = (row) => {
        return (
            <DeleteIcon
                className='tableActionIcon'
                style={{
                    fontSize: '28px',
                    cursor: 'pointer'
                }}
            />
        )
    }


    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div style={{ background: IsLightMode ? boxLightBackground0 : boxDarkBackground0, borderRadius: '8px', paddingBottom:'60px' }}>
            <Row>
                <Col xs="6" className='p-3 pe-4'>
                    <h6 style={{fontWeight:'bold', color:IsLightMode? null : darkText3}}>لیست آدرس‌ها</h6>
                </Col>
                <Col xs="6" style={{textAlign:'left'}} className='p-2 ps-4'>
                    <AddCircleOutlineOutlinedIcon style={{fontWeight:'bold', color:IsLightMode? null : darkText3, cursor:'pointer'}}/>
                </Col>
            </Row>
            <DataTable
                value={ShowData}
                onRowToggle={onRowToggle}
                className='custom-data-table no-row-background TaskTabelTd'
                style={{
                    // رنگ متن ردیف‌ها
                    color: IsLightMode ? lightText3 : darkText3,
                    // حاشیه دور جدول
                    border: `1px none ${IsLightMode ? '#ddd' : '#444'}`,
                }}
                tableStyle={{
                    minWidth: '68rem',
                    // اگر دوست داری داخل <table> هم ست کن
                    borderCollapse: 'collapse'
                }}

            >
                <Column body={address} headerStyle={{
                    textAlign: 'right',
                    color: IsLightMode ? lightText3 : darkText3,
                    borderBottom: `1px solid ${IsLightMode ? '#ddd' : '#444'}`
                }}
                    bodyStyle={{
                        textAlign: 'right',
                        color: IsLightMode ? lightText3 : darkText3,
                        borderBottom: `1px solid ${IsLightMode ? '#eee' : '#444'}`
                    }} header=" آدرس"></Column>
                <Column body={network} headerStyle={{
                    textAlign: 'right',
                    color: IsLightMode ? lightText3 : darkText3,
                    borderBottom: `1px solid ${IsLightMode ? '#ddd' : '#444'}`
                }}
                    bodyStyle={{
                        textAlign: 'right',
                        color: IsLightMode ? lightText3 : darkText3,
                        borderBottom: `1px solid ${IsLightMode ? '#eee' : '#444'}`
                    }} header={
                        <div>
                            شبکه
                            <FilterAltIcon style={{ fontSize: '18px', marginRight: '4px', cursor: 'pointer' }} onClick={handleClick} />
                            <Menu
                                id="demo-positioned-menu"
                                aria-labelledby="demo-positioned-button"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                PaperProps={{
                                    style: {
                                        backgroundColor: IsLightMode ? null : "rgb(20,20,20)",  // رنگ بک‌گراند منو
                                        color: IsLightMode ? null : darkText3
                                    },
                                }}
                            >
                                <MenuItem onClick={handleClose}
                                    sx={{
                                        '&:hover': {
                                            backgroundColor: "rgb(40,40,40)",
                                        },
                                    }}>
                                    همه
                                </MenuItem>
                                {
                                    networkData.map((item, index) => {
                                        return (
                                            <MenuItem onClick={handleClose}
                                                sx={{
                                                    '&:hover': {
                                                        backgroundColor: "rgb(40,40,40)",
                                                    },
                                                }}
                                            >
                                                <img src={item.logo} style={{ width: '20px', marginLeft: '4px', background: item.name === "ethereum" ? darkText3 : null, borderRadius: '50%' }} />
                                                {item.name.toUpperCase()}
                                            </MenuItem>
                                        )
                                    })
                                }
                            </Menu>
                        </div>
                    }></Column>
                <Column body={owner} headerStyle={{
                    textAlign: 'right',
                    color: IsLightMode ? lightText3 : darkText3,
                    borderBottom: `1px solid ${IsLightMode ? '#ddd' : '#444'}`
                }}
                    bodyStyle={{
                        textAlign: 'right',
                        color: IsLightMode ? lightText3 : darkText3,
                        borderBottom: `1px solid ${IsLightMode ? '#eee' : '#444'}`
                    }} header={
                        <div>
                            ثبت‌کننده
                            <FilterAltIcon style={{ fontSize: '18px', marginRight: '4px', cursor: 'pointer' }} onClick={handleClick} />
                            <Menu
                                id="demo-positioned-menu"
                                aria-labelledby="demo-positioned-button"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                PaperProps={{
                                    style: {
                                        backgroundColor: IsLightMode ? null : "rgb(20,20,20)",  // رنگ بک‌گراند منو
                                        color: IsLightMode ? null : darkText3
                                    },
                                }}
                            >
                                <MenuItem onClick={handleClose}
                                    sx={{
                                        '&:hover': {
                                            backgroundColor: "rgb(40,40,40)",
                                        },
                                    }}>
                                    همه
                                </MenuItem>
                                {
                                    networkData.map((item, index) => {
                                        return (
                                            <MenuItem onClick={handleClose}
                                                sx={{
                                                    '&:hover': {
                                                        backgroundColor: "rgb(40,40,40)",
                                                    },
                                                }}
                                            >
                                                <img src={item.logo} style={{ width: '20px', marginLeft: '4px', background: item.name === "ethereum" ? darkText3 : null, borderRadius: '50%' }} />
                                                {item.name.toUpperCase()}
                                            </MenuItem>
                                        )
                                    })
                                }
                            </Menu>
                        </div>
                    }></Column>
                <Column body={deleteAddress} headerStyle={{
                    textAlign: 'right',
                    color: IsLightMode ? lightText3 : darkText3,
                    borderBottom: `1px solid ${IsLightMode ? '#ddd' : '#444'}`
                }}
                    bodyStyle={{
                        textAlign: 'right',
                        color: IsLightMode ? lightText3 : darkText3,
                        borderBottom: `1px solid ${IsLightMode ? '#eee' : '#444'}`,
                    }} header=" حذف"></Column>
            </DataTable>
            <Paginator
                className='paginator-table no-row-background'
                first={0}
                rows={5}
                totalRecords={ShowData.length}
                rowsPerPageOptions={5}
                // onPageChange={onPageChange}
                template="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                currentPageReportTemplate='{totalRecords} سناریو ثبت‌شده '
            />
        </div>
    )
}

export default AddressChart

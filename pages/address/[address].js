import React from 'react'
import { useRouter } from 'next/router';
import { Col, Row } from 'reactstrap'
import { lightText3, boxDarkBackground0, darkText3 } from '../../functions/Colors'
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import PublicIcon from '@mui/icons-material/Public';
import PaymentsIcon from '@mui/icons-material/Payments';
import ViewAgendaIcon from '@mui/icons-material/ViewAgenda';
import PaymentIcon from '@mui/icons-material/Payment';
import ViewDayIcon from '@mui/icons-material/ViewDay';

import { Paginator } from "primereact/paginator";

import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import NoDataComponent from '../../components/NoDataComponent/NoDataComponent';
import WestIcon from '@mui/icons-material/West';
import EastIcon from '@mui/icons-material/East';

import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import AvTimerIcon from '@mui/icons-material/AvTimer';
const address = ({ IsLightMode }) => {

    const router = useRouter();
    const { address } = router.query;

    function timeSince(timestamp) {
        const now = Date.now();

        // If the timestamp is not in milliseconds, assume it's in seconds and convert it
        if (timestamp < 1e12) {
            timestamp *= 1000;
        }

        const elapsed = now - timestamp; // elapsed time in milliseconds

        const seconds = Math.floor(elapsed / 1000);
        if (seconds < 60) return seconds + ' seconds ago';

        const minutes = Math.floor(seconds / 60);
        if (minutes < 60) return minutes + ' minutes ago';

        const hours = Math.floor(minutes / 60);
        if (hours < 24) return hours + ' hours ago';

        const days = Math.floor(hours / 24);
        if (days < 30) return days + ' days ago';

        const months = Math.floor(days / 30);
        if (months < 12) return months + ' months ago';

        const years = Math.floor(months / 12);
        return years + ' years ago';
    }

    const logo = (row) => {
        return (
            <div className='container-fluid' style={{ textAlign: 'left' }}>
                <Row>
                    <Col xs="4">
                        <div style={{
                            background: "rgb(230,230,230)",
                            display: 'inline-block',
                            padding: '8px',
                            borderRadius: '8px',
                            background: IsLightMode ? "rgb(230,230,230)" : "rgb(90,90,90)",
                        }}>
                            <svg fill={IsLightMode ? 'gray' : 'white'} width="28px" height="28px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.0020048,13 C17.5542895,13 18.0020048,13.4477153 18.0020048,14 C18.0020048,14.5128358 17.6159646,14.9355072 17.1186259,14.9932723 L17.0020048,15 L5.41700475,15 L8.70911154,18.2928932 C9.0695955,18.6533772 9.09732503,19.2206082 8.79230014,19.6128994 L8.70911154,19.7071068 C8.34862757,20.0675907 7.78139652,20.0953203 7.38910531,19.7902954 L7.29489797,19.7071068 L2.29489797,14.7071068 C1.69232289,14.1045317 2.07433707,13.0928192 2.88837381,13.0059833 L3.00200475,13 L17.0020048,13 Z M16.6128994,4.20970461 L16.7071068,4.29289322 L21.7071068,9.29289322 C22.3096819,9.8954683 21.9276677,10.9071808 21.1136309,10.9940167 L21,11 L7,11 C6.44771525,11 6,10.5522847 6,10 C6,9.48716416 6.38604019,9.06449284 6.88337887,9.00672773 L7,9 L18.585,9 L15.2928932,5.70710678 C14.9324093,5.34662282 14.9046797,4.77939176 15.2097046,4.38710056 L15.2928932,4.29289322 C15.6533772,3.93240926 16.2206082,3.90467972 16.6128994,4.20970461 Z" />
                            </svg>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }

    const Address = (row) => {
        return (
            <div className='container-fluid' style={{
                textAlign: 'left',
                padding: '0px',
            }}>
                <Row>
                    <Col>
                        <p className='m-0 p-0'
                            style={{
                                fontSize: '14px'
                            }}>
                            <a href='/' style={{
                                textDecoration: 'none',
                                color: '#0784c3',
                                marginLeft: '0px'
                            }}>
                                kljsdaf...sdklfh
                            </a>
                        </p>
                    </Col>
                </Row>
            </div>
        )
    }

    const Block = (row) => {
        return (
            <div className='container-fluid'
                style={{
                    textAlign: 'left',
                    padding: '0px',
                }}
            >
                2345354
            </div>
        )
    }

    const Age = (row) => {
        return (
            <div className='container-fluid'
                style={{
                    textAlign: 'left',
                    padding: '0px',
                }}
            >
                2 days ago
            </div>
        )
    }

    const from = (row) => {
        return (
            <div className='container-fluid' style={{
                textAlign: 'left',
                padding: '0px',
            }}>
                <Row>
                    <Col>
                        <p className='m-0 p-0'
                            style={{
                                fontSize: '14px'
                            }}>
                            <a href='/' style={{
                                textDecoration: 'none',
                                color: '#0784c3',
                                marginLeft: '0px'
                            }}>
                                kljsdaf...sdklfh
                            </a>
                        </p>
                    </Col>
                </Row>
            </div>
        )
    }

    const to = (row) => {
        return (
            <div className='container-fluid' style={{
                textAlign: 'left',
                padding: '0px',
            }}>
                <Row>
                    <Col>
                        <p className='m-0 p-0'
                            style={{
                                fontSize: '14px'
                            }}>
                            <a href='/' style={{
                                textDecoration: 'none',
                                color: '#0784c3',
                                marginLeft: '0px'
                            }}>
                                kljsdaf...sdklfh
                            </a>
                        </p>
                    </Col>
                </Row>
            </div>
        )
    }

    const Amount = (row) => {
        return (
            <div className='container-fluid'
                style={{
                    textAlign: 'left',
                    padding: '0px',
                }}
            >
                0.14672256
            </div>
        )
    }

    const Token = (row) => {
        return (
            <div className='container-fluid'
                style={{
                    textAlign: 'left',
                    padding: '0px',
                }}
            >

                ERC-20: E‍TH
            </div>
        )
    }

    return (
        <div className="ps-2 pe-2" style={{ maxWidth: '1500px', width: '100%', display: 'flex', flexDirection: 'column', padding: '16px 0px', marginTop: '0px', marginLeft: 'auto', marginRight: 'auto' }}>
            <h5>Address: <small style={{ color: 'gray' }}>0x9FC3da866e7DF3a1c57adE1a97c9f00a70f010c8 </small></h5>

            <div style={{
                background: IsLightMode ? 'white' : boxDarkBackground0,
                boxShadow: 'rgba(0, 0, 0, 0.05) 0px 0px 0px 1px',
                padding: '16px',
                borderRadius: '12px',
                opacity: '1',
                direction: 'ltr'
            }}>
                <Row className='p-1 m-0'>

                    <Col
                        className='p-0 m-0' lg="4" md="6" xs="12">
                        <Row className='p-0 m-0'>
                            <Col
                                className='p-2 m-0' xs="2">
                                <AccountBalanceWalletIcon style={{
                                    fontSize: '36px',
                                    color: IsLightMode ? 'gray' : darkText3
                                }} />
                            </Col>
                            <Col
                                className='p-2 m-0' xs="10">
                                <Row className='p-0 m-0'>
                                    <small className='m-0 p-0' style={{
                                        color: IsLightMode ? 'gray' : darkText3
                                    }}>
                                        ETH Balance
                                    </small>
                                </Row>
                                <Row className='p-0 m-0'>
                                    <p className='m-0 p-0'>
                                        125 ETH
                                    </p>
                                </Row>
                            </Col>
                        </Row>

                    </Col>

                    <Col
                        className='p-0 m-0' lg="4" md="6" xs="12">
                        <Row className='p-0 m-0'>
                            <Col
                                className='p-2 m-0' xs="2">
                                <AccessTimeIcon style={{
                                    fontSize: '36px',
                                    color: IsLightMode ? 'gray' : darkText3
                                }} />
                            </Col>
                            <Col
                                className='p-2 m-0' xs="10">
                                <Row className='p-0 m-0'>
                                    <small className='m-0 p-0' style={{
                                        color: IsLightMode ? 'gray' : darkText3
                                    }}>
                                        First Activity
                                    </small>
                                </Row>
                                <Row className='p-0 m-0'>
                                    <p className='m-0 p-0'>
                                        {(456321897).toLocaleString()}
                                    </p>
                                </Row>
                            </Col>
                        </Row>
                    </Col>

                    <Col
                        className='p-0 m-0' lg="4" md="6" xs="12">
                        <Row className='p-0 m-0'>
                            <Col className='p-2 m-0' xs="2">
                                <PaymentIcon style={{
                                    fontSize: '36px',
                                    color: IsLightMode ? 'gray' : darkText3
                                }} />
                            </Col>
                            <Col className='p-2 m-0' xs="10">
                                <Row className='p-0 m-0'>
                                    <small className='m-0 p-0' style={{
                                        color: IsLightMode ? 'gray' : darkText3
                                    }}>
                                        Transactions
                                    </small>
                                </Row>
                                <Row className='p-0 m-0'>
                                    <p className='m-0 p-0'>
                                        ${(0.05)}
                                    </p>
                                </Row>
                            </Col>
                        </Row>
                    </Col>

                    <Col
                        className='p-0 m-0' lg="4" md="6" xs="12">
                        <Row className='p-0 m-0'>
                            <Col
                                className='p-2 m-0' xs="2">
                                <RequestQuoteIcon style={{
                                    fontSize: '36px',
                                    color: IsLightMode ? 'gray' : darkText3
                                }} />
                            </Col>
                            <Col
                                className='p-2 m-0' xs="10">
                                <Row className='p-0 m-0'>
                                    <small className='m-0 p-0' style={{
                                        color: IsLightMode ? 'gray' : darkText3
                                    }}>
                                        ETH Value
                                    </small>
                                </Row>
                                <Row className='p-0 m-0'>
                                    <p className='m-0 p-0'>
                                        ${(195556666).toLocaleString()}
                                    </p>
                                </Row>
                            </Col>
                        </Row>
                    </Col>



                    <Col
                        className='p-0 m-0' lg="4" md="6" xs="12">
                        <Row className='p-0 m-0'>
                            <Col className='p-2 m-0' xs="2">
                                <AvTimerIcon style={{
                                    fontSize: '36px',
                                    color: IsLightMode ? 'gray' : darkText3
                                }} />
                            </Col>
                            <Col className='p-2 m-0' xs="10">
                                <Row className='p-0 m-0'>
                                    <small className='m-0 p-0' style={{
                                        color: IsLightMode ? 'gray' : darkText3
                                    }}>
                                        Last Activity
                                    </small>
                                </Row>
                                <Row className='p-0 m-0'>
                                    <p className='m-0 p-0'>
                                        {(8569364).toLocaleString()}
                                    </p>
                                </Row>
                            </Col>
                        </Row>
                    </Col>

                    <Col
                        className='p-0 m-0' lg="4" md="6" xs="12">
                        <Row className='p-0 m-0'>
                            <Col className='p-2 m-0' xs="2">
                                <ViewDayIcon style={{
                                    fontSize: '36px',
                                    color: IsLightMode ? 'gray' : darkText3
                                }} />
                            </Col>
                            <Col className='p-2 m-0' xs="10">
                                <Row className='p-0 m-0'>
                                    <small className='m-0 p-0' style={{
                                        color: IsLightMode ? 'gray' : darkText3
                                    }}>
                                        Token Transfers
                                    </small>
                                </Row>
                                <Row className='p-0 m-0'>
                                    <p className='m-0 p-0'>
                                        {(6589367).toLocaleString()}
                                    </p>
                                </Row>
                            </Col>
                        </Row>
                    </Col>

                </Row>
            </div>

            <div
                className='mt-3'
                style={{
                    background: IsLightMode ? 'white' : boxDarkBackground0,
                    boxShadow: 'rgba(0, 0, 0, 0.05) 0px 0px 0px 1px',
                    padding: '16px',
                    borderRadius: '12px',
                    opacity: '1',
                    direction: 'ltr'
                }}>
                <DataTable
                    value={[{}, {}, {}, {}, {}, {}, {}, {}, {}, {}]}
                    className='custom-data-table no-row-background TaskTabelTd'
                    style={{
                        // رنگ متن ردیف‌ها
                        color: IsLightMode ? lightText3 : darkText3,
                        // حاشیه دور جدول
                        border: `1px none ${IsLightMode ? '#ddd' : '#444'}`,
                    }}
                    tableStyle={{
                        minWidth: '35rem',
                        // اگر دوست داری داخل <table> هم ست کن
                        borderCollapse: 'collapse'
                    }}
                    emptyMessage={<NoDataComponent />}
                >
                    <Column
                        headerStyle={{
                            textAlign: 'right',
                            color: IsLightMode ? lightText3 : darkText3,
                            borderBottom: `1px solid ${IsLightMode ? '#ddd' : '#444'}`
                        }}
                        bodyStyle={{
                            textAlign: 'right',
                            color: IsLightMode ? lightText3 : darkText3,
                            borderBottom: `1px solid ${IsLightMode ? '#eee' : '#444'}`
                        }}
                        body={logo}
                    />
                    <Column
                        headerStyle={{
                            textAlign: 'right',
                            color: IsLightMode ? lightText3 : darkText3,
                            borderBottom: `1px solid ${IsLightMode ? '#ddd' : '#444'}`
                        }}
                        bodyStyle={{
                            textAlign: 'right',
                            color: IsLightMode ? lightText3 : darkText3,
                            borderBottom: `1px solid ${IsLightMode ? '#eee' : '#444'}`
                        }}
                        header={"Transaction hash"}
                        body={Address}
                    />

                    <Column
                        headerStyle={{
                            textAlign: 'right',
                            color: IsLightMode ? lightText3 : darkText3,
                            borderBottom: `1px solid ${IsLightMode ? '#ddd' : '#444'}`
                        }}
                        bodyStyle={{
                            textAlign: 'right',
                            color: IsLightMode ? lightText3 : darkText3,
                            borderBottom: `1px solid ${IsLightMode ? '#eee' : '#444'}`
                        }}
                        header={"Block"}
                        body={Block}
                    />

                    <Column
                        headerStyle={{
                            textAlign: 'right',
                            color: IsLightMode ? lightText3 : darkText3,
                            borderBottom: `1px solid ${IsLightMode ? '#ddd' : '#444'}`
                        }}
                        bodyStyle={{
                            textAlign: 'right',
                            color: IsLightMode ? lightText3 : darkText3,
                            borderBottom: `1px solid ${IsLightMode ? '#eee' : '#444'}`
                        }}
                        header={"Age"}
                        body={Age}
                    />



                    <Column
                        headerStyle={{
                            textAlign: 'right',
                            color: IsLightMode ? lightText3 : darkText3,
                            borderBottom: `1px solid ${IsLightMode ? '#ddd' : '#444'}`
                        }}
                        bodyStyle={{
                            textAlign: 'right',
                            color: IsLightMode ? lightText3 : darkText3,
                            borderBottom: `1px solid ${IsLightMode ? '#eee' : '#444'}`
                        }}
                        header={"from"}
                        body={from}
                    />

                    <Column
                        headerStyle={{
                            textAlign: 'right',
                            color: IsLightMode ? lightText3 : darkText3,
                            borderBottom: `1px solid ${IsLightMode ? '#ddd' : '#444'}`
                        }}
                        bodyStyle={{
                            textAlign: 'right',
                            color: IsLightMode ? lightText3 : darkText3,
                            borderBottom: `1px solid ${IsLightMode ? '#eee' : '#444'}`
                        }}
                        header={"to"}
                        body={to}
                    />
                    <Column
                        headerStyle={{
                            textAlign: 'right',
                            color: IsLightMode ? lightText3 : darkText3,
                            borderBottom: `1px solid ${IsLightMode ? '#ddd' : '#444'}`
                        }}
                        bodyStyle={{
                            textAlign: 'right',
                            color: IsLightMode ? lightText3 : darkText3,
                            borderBottom: `1px solid ${IsLightMode ? '#eee' : '#444'}`
                        }}
                        header={"Amount"}
                        body={Amount}
                    />
                    <Column
                        headerStyle={{
                            textAlign: 'right',
                            color: IsLightMode ? lightText3 : darkText3,
                            borderBottom: `1px solid ${IsLightMode ? '#ddd' : '#444'}`
                        }}
                        bodyStyle={{
                            textAlign: 'right',
                            color: IsLightMode ? lightText3 : darkText3,
                            borderBottom: `1px solid ${IsLightMode ? '#eee' : '#444'}`
                        }}
                        header={"Token"}
                        body={Token}
                    />

                </DataTable>
                <Paginator
                    className="paginator-table no-row-background "
                    first={0}
                    rows={5}
                    style={{ background: "none" }}
                    totalRecords={20}
                    rowsPerPageOptions={5}
                    // onPageChange={onPageChange}
                    template="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown "
                    currentPageReportTemplate='{totalRecords} Transactions'
                />
            </div>
        </div>
    )
}

export default address

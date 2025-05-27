import React from 'react'
import { useRouter } from 'next/router';
import { Col, Row } from 'reactstrap';
import { darkText3, darkText4 } from '../../functions/Colors';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { darkGreenBackground0, darkRedBackground1, darkRed0, darkGreen0, boxDarkBackground0 } from '../../functions/Colors';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import InternalTransactions from '../../layouts/Main/Transactions/InternalTransactions/InternalTransactions';
import TokenTransfers from '../../layouts/Main/Transactions/TokenTransfers/TokenTransfers';
import CopyrightIcon from '@mui/icons-material/Copyright';

const Transaction = ({ IsLightMode }) => {

    const router = useRouter();
    const { hash } = router.query;

    const ethLogo = () => {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 256 256">
                <g id="ether" transform="translate(-31 -137)">
                    <circle id="Ellipse_10" data-name="Ellipse 10" cx="128" cy="128" r="128" transform="translate(31 137)" fill="#5d7cff" />
                    <g id="ethereum" transform="translate(96 163)">
                        <path id="Path_156" data-name="Path 156" d="M126.529,0l-1.368,4.65V139.583l1.368,1.366,62.634-37.024Z" transform="translate(-63.908)" fill="#fff" opacity="0.8" />
                        <path id="Path_157" data-name="Path 157" d="M62.634,0,0,103.927l62.634,37.024Z" fill="#fff" />
                        <path id="Path_158" data-name="Path 158" d="M127.151,273.591l-.761.939V322.6l.761,2.251,62.672-88.262Z" transform="translate(-64.517 -120.781)" fill="#fff" opacity="0.8" />
                        <path id="Path_159" data-name="Path 159" d="M62.634,324.847V273.576L0,236.585Z" transform="translate(0 -120.782)" fill="#fff" />
                        <path id="Path_160" data-name="Path 160" d="M127.961,219.651,190.6,182.627l-62.634-28.468Z" transform="translate(-65.327 -78.702)" fill="rgba(119,145,255,0.7)" />
                        <path id="Path_161" data-name="Path 161" d="M0,182.621l62.634,37.024V154.161Z" transform="translate(0 -78.697)" fill="rgba(119,145,255,0.5)" />
                    </g>
                </g>
            </svg>
        )
    }

    const Status = (type) => {
        if (type === true) {
            return (
                <span style={{
                    background: IsLightMode ? 'rgba(255,0,0,0.1)' : darkRedBackground1,
                    color: IsLightMode ? 'rgb(173,1,1)' : darkRed0,
                    padding: '2px 16px',
                    borderRadius: '4px',
                    fontSize: '14px', marginBottom: '-6px',
                    borderStyle: 'solid',
                    borderWidth: '1px',
                    borderColor: IsLightMode ? 'rgb(173,1,1)' : darkRed0
                }}>
                    unsuccess
                </span>
            )
        } else if (type === false) {
            return (
                <span style={{
                    background: IsLightMode ? 'rgba(0,255,0,0.1)' : darkGreenBackground0,
                    color: IsLightMode ? 'rgb(27,96,33)' : darkGreen0,
                    padding: '2px 16px',
                    borderRadius: '4px',
                    fontSize: '14px', marginBottom: '-6px',
                    borderStyle: 'solid',
                    borderWidth: '1px',
                    borderColor: IsLightMode ? 'rgb(27,96,33)' : darkGreen0,
                }}>
                    success
                </span>
            )
        }
    }

    return (
        <div className="ps-2 pe-2" style={{ maxWidth: '1500px', width: '100%', display: 'flex', flexDirection: 'column', padding: '16px 0px', marginTop: '0px', marginLeft: 'auto', marginRight: 'auto' }}>
            <h5>Transaction Details</h5>

            <div style={{
                background: "white",
                display: 'inline-block',
                padding: '8px',
                borderRadius: '8px',
                background: IsLightMode ? "white" : boxDarkBackground0,
            }}>
                <Row>
                    <Col xs="1" className="d-none d-sm-block">
                        {ethLogo()}
                    </Col>
                    <Col xs="11">
                        <h6 style={{ display: 'block' }} className='p-0 m-0 mt-1'>
                            Transaction Action
                        </h6>
                        <p style={{ display: 'block', wordWrap: 'break-word' }} className='p-0 m-0'>
                            <span style={{ color: IsLightMode ? 'gray' : darkText3 }} className='me-1'>
                                Transfer
                            </span>
                            0.017330899124312492
                            <span style={{ color: IsLightMode ? 'gray' : darkText3 }} className='me-1 ms-1'>
                                ($44.77)
                            </span>
                            ETH
                            <span style={{ color: IsLightMode ? 'gray' : darkText3 }} className='me-1 ms-1'>
                                to
                            </span>
                            0xa598E5...1e10f399
                        </p>
                    </Col>
                </Row>
            </div>

            <div className='mt-3' style={{
                background: "white",
                display: 'inline-block',
                padding: '8px',
                borderRadius: '8px',
                background: IsLightMode ? "white" : boxDarkBackground0,
            }}>
                <Row className='mt-3'>
                    <Col md="2" className='p-2 ps-4'>
                        <span style={{ color: IsLightMode ? 'gray' : darkText3 }}>
                            Transaction Hash:
                        </span>
                    </Col>

                    <Col md="10" className='p-2 ps-4 pe-3'>
                        <span style={{ wordWrap: 'break-word' }}>
                            0x1541b900a6637ffdc6a7934c43d771d7efc8dcad08b41a136cab1b591ec15108 <ContentCopyIcon style={{ color: 'gray', fontSize: '14px', marginTop: '-4px', cursor: 'pointer' }} />
                        </span>
                    </Col>
                </Row>

                <Row className='mt-3'>
                    <Col md="2" className='p-2 ps-4'>
                        <span style={{ color: IsLightMode ? 'gray' : darkText3 }}>
                            Status:
                        </span>
                    </Col>

                    <Col md="10" className='p-2 ps-4 pe-3'>
                        <span style={{ wordWrap: 'break-word' }}>
                            {Status(false)}
                        </span>
                    </Col>
                </Row>

                <Row className='mt-3'>
                    <Col md="2" className='p-2 ps-4'>
                        <span style={{ color: IsLightMode ? 'gray' : darkText3 }}>
                            Block:
                        </span>
                    </Col>

                    <Col md="10" className='p-2 ps-4 pe-3'>
                        <span style={{ wordWrap: 'break-word' }}>
                            <span style={{ color: '#0784c3' }}>{(32940857).toLocaleString()}</span>
                        </span>
                    </Col>
                </Row>

                <Row className='mt-3'>
                    <Col md="2" className='p-2 ps-4'>
                        <span style={{ color: IsLightMode ? 'gray' : darkText3 }}>
                            Timestamp:
                        </span>
                    </Col>

                    <Col md="10" className='p-2 ps-4 pe-3'>
                        <span style={{ wordWrap: 'break-word', fontWeight: '100' }}>
                            <AccessTimeIcon style={{ marginRight: '0px', fontSize: '20px', marginTop: '-4px' }} /> 2 mins ago (May-26-2025 07:05:11 AM UTC)
                        </span>
                    </Col>
                </Row>
                <hr />
                <Row className='mt-3'>
                    <Col md="2" className='p-2 ps-4'>
                        <span style={{ color: IsLightMode ? 'gray' : darkText3 }}>
                            From:
                        </span>
                    </Col>

                    <Col md="10" className='p-2 ps-4 pe-3'>
                        <span style={{ wordWrap: 'break-word', color: '#0784c3' }}>
                            0xD6E4aA932147A3FE5311dA1b67D9e73da06F9cEf <ContentCopyIcon style={{ color: 'gray', fontSize: '14px', marginTop: '-4px', cursor: 'pointer' }} />
                        </span>
                    </Col>
                </Row>

                <Row className='mt-3'>
                    <Col md="2" className='p-2 ps-4'>
                        <span style={{ color: IsLightMode ? 'gray' : darkText3 }}>
                            To:
                        </span>
                    </Col>

                    <Col md="10" className='p-2 ps-4 pe-3'>
                        <span style={{ wordWrap: 'break-word', color: '#0784c3' }}>
                            0xD6E4aA932147A3FE5311dA1b67D9e73da06F9cEf <ContentCopyIcon style={{ color: 'gray', fontSize: '14px', marginTop: '-4px', cursor: 'pointer' }} />
                        </span>
                    </Col>
                </Row>
                <hr />

                <Row className='mt-3'>
                    <Col md="2" className='p-2 ps-4'>
                        <span style={{ color: IsLightMode ? 'gray' : darkText3 }}>
                            Internal Transactions:
                        </span>
                    </Col>

                    <Col md="10" className='p-2 ps-4 pe-3'>
                        <InternalTransactions />
                    </Col>
                </Row>
                <hr />

                <Row className='mt-3'>
                    <Col md="2" className='p-2 ps-4'>
                        <span style={{ color: IsLightMode ? 'gray' : darkText3 }}>
                            ERC-20 Tokens Transferred:
                        </span>
                    </Col>

                    <Col md="10" className='p-2 ps-4 pe-3'>
                        <TokenTransfers />
                    </Col>
                </Row>
                <hr />

                <Row className='mt-3'>
                    <Col md="2" className='p-2 ps-4'>
                        <span style={{ color: IsLightMode ? 'gray' : darkText3 }}>
                            Value:
                        </span>
                    </Col>

                    <Col md="10" className='p-2 ps-4 pe-3'>
                        <span style={{ wordWrap: 'break-word' }}>

                            0.017683599103021503 ETH <span style={{ color: IsLightMode ? 'gray' : darkText3 }}>($45.43)</span>
                        </span>
                    </Col>
                </Row>

                <Row className='mt-3'>
                    <Col md="2" className='p-2 ps-4'>
                        <span style={{ color: IsLightMode ? 'gray' : darkText3 }}>
                            Transaction Fee:
                        </span>
                    </Col>

                    <Col md="10" className='p-2 ps-4 pe-3'>
                        <span style={{ wordWrap: 'break-word' }}>
                            0.017683599103021503 ETH <span style={{ color: IsLightMode ? 'gray' : darkText3 }}>($45.43)</span>
                        </span>
                    </Col>
                </Row>

                <Row className='mt-3'>
                    <Col md="2" className='p-2 ps-4'>
                        <span style={{ color: IsLightMode ? 'gray' : darkText3 }}>
                            Gas Price:
                        </span>
                    </Col>

                    <Col md="10" className='p-2 ps-4 pe-3'>
                        <span style={{ wordWrap: 'break-word' }}>
                            0.017683599103021503 ETH <span style={{ color: IsLightMode ? 'gray' : darkText3 }}>($45.43)</span>
                        </span>
                    </Col>
                </Row>
            </div>
      <p style={{ textAlign: 'center', marginBottom: '-8px', marginTop: '4px', color: 'gray', fontSize: '13px' }}>Developed by <a href='https://faranic.ir/' style={{ color: 'inherit', textDecoration: 'none' }}>Panta</a> <CopyrightIcon style={{ fontSize: '16px' }} /></p>
            
        </div>
    )
}

export default Transaction

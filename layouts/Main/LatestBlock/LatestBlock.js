import React from 'react'
import { boxDarkBackground0, darkText3, lightText3 } from '../../../functions/Colors'

import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import NoDataComponent from '../../../components/NoDataComponent/NoDataComponent';
import { Col, Row } from 'reactstrap';
import WestIcon from '@mui/icons-material/West';
import EastIcon from '@mui/icons-material/East';

const LatestBlock = ({ IsLightMode }) => {


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
      

    const blockNumber = (row) => {
        return (
            <div className='container-fluid'  style={{textAlign:'left'}}>
                <Row>
                    <Col xs="4">
                        <div style={{
                            background: "rgb(230,230,230)",
                            display: 'inline-block',
                            padding: '8px',
                            borderRadius: '8px',
                            background: IsLightMode ? "rgb(230,230,230)" : "rgb(90,90,90)",
                        }}>
                            <svg fill={IsLightMode ? 'none' : 'white'} width="28px" height="28px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" stroke="#000000"><polygon points="8 20 8 44 32 56 56 44 56 20 32 8 8 20" /><polyline points="56 20 32 32 8 20" /><line x1="32" y1="32" x2="32" y2="56" /></svg>
                        </div>
                    </Col>

                    <Col >
                        <a href='/block/123' style={{
                            textDecoration: 'none',
                            color: '#0784c3',
                            display: 'block',
                            fontSize:'14px'
                        }}>{(47890989).toLocaleString()}</a>
                        <small className='m-0 p-0'>
                            {timeSince(1748168171)}
                        </small>
                    </Col>
                </Row>
            </div>
        )
    }

    const Miner = (row) => {
        return (
            <div className='container-fluid'  style={{textAlign:'left'}}>
                <Row>
                    <Col>
                        <p className='m-0 p-0'
                            style={{
                                fontSize: '14px'
                            }}>
                            Miner 
                            <a href='/' style={{
                                textDecoration: 'none',
                                color: '#0784c3',
                                marginLeft: '4px'
                            }}>
                                kljsdaf...sdklfh
                            </a>
                        </p>
                        <p className='m-0 p-0'>
                            <small>
                                {125} txns in {15} secs
                            </small>
                        </p>
                    </Col>
                </Row>
            </div>
        )
    }

    const Reward = (row) => {
        return (
            <div className='container-fluid'
                style={{
                    borderStyle: 'solid',
                    borderWidth: '1px',
                    display: 'inline-block',
                    textAlign: 'center',
                    borderRadius: '8px',
                    borderColor: IsLightMode ? "rgb(220,220,220)" : null,
                    padding: '2px 0px',
                    fontSize:'14px',
                }}
            >
                {(0.235)}<small style={{ marginLeft: '4px' }}>ETH</small>
            </div>
        )
    }


    return (
        <div
            style={{
                background: IsLightMode ? 'white' : boxDarkBackground0,
                boxShadow: 'rgba(0, 0, 0, 0.05) 0px 0px 0px 1px',
                borderRadius: '12px',
                padding: '0px'
            }}
        >
            <h6 style={{
                padding: '16px',
                borderWidth: '1px',
                borderBottomStyle: 'solid',
                borderColor: IsLightMode ? "rgb(200,200,200)" : 'gray',
                color: IsLightMode ? null : darkText3
            }}>
                Latest Blocks
            </h6>
            <div
                style={{
                    padding: '16px',
                    color: IsLightMode ? null : darkText3,
                    paddingTop: '0px'
                }}
            >
                <DataTable
                    value={[{}, {}, {}, {}, {}, {}]}
                    className='custom-data-table no-row-background TaskTabelTd LatestBlockTable'
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
                    showHeader={false}
                >
                    <Column
                        bodyStyle={{
                            textAlign: 'right',
                            color: IsLightMode ? lightText3 : darkText3,
                            borderBottom: `1px solid ${IsLightMode ? '#eee' : '#444'}`
                        }}
                        body={blockNumber}
                    />

                    <Column
                        bodyStyle={{
                            textAlign: 'right',
                            color: IsLightMode ? lightText3 : darkText3,
                            borderBottom: `1px solid ${IsLightMode ? '#eee' : '#444'}`
                        }}
                        body={Miner}
                    />

                    <Column
                        bodyStyle={{
                            textAlign: 'left',
                            color: IsLightMode ? lightText3 : darkText3,
                            borderBottom: `1px solid ${IsLightMode ? '#eee' : '#444'}`
                        }}
                        body={Reward}
                    />

                </DataTable>
                <div className='pt-3 pb-3' style={{
                    textAlign:'center',
                    marginBottom:'-12px',
                    cursor:'pointer'
                }}>
                    <span style={{
                        fontSize:'15px',
                        color:IsLightMode ? 'gray' : null
                    }}>
                        View All Blocks
                        <EastIcon style={{marginLeft:'4px', fontSize:'20px'}}/>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default LatestBlock

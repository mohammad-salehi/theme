import React, { useEffect, useState } from 'react'
import { boxDarkBackground0, darkText3, lightText3 } from '../../../functions/Colors'
import { serverAddress } from '../../../functions/ServerAddress';
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import NoDataComponent from '../../../components/NoDataComponent/NoDataComponent';
import { Col, Row } from 'reactstrap';
import EastIcon from '@mui/icons-material/East';
import Web3 from "web3";
import LoadingComponent from '../../../components/LoadingComponent/LoadingComponent';

const LatestTransaction = ({ IsLightMode }) => {
    const rpcUrl = serverAddress;
    const web3 = new Web3(rpcUrl);

    const [TXData, SetTXData] = useState([])
    const [FirstLoading, setFirstLoading] = useState(false);

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
    function formatString(str) {
        if (str.length <= 10) {
            return str; // اگر طول رشته کمتر یا مساوی ۱۰ باشد، نیازی به تغییر نیست
        }
        const firstFive = str.substring(0, 6);
        const lastFive = str.substring(str.length - 6);
        return `${firstFive}...${lastFive}`;
    }
    async function getLatestTransactions() {
        try {
            const latestBlock = BigInt(await web3.eth.getBlockNumber());
            const transactions = [];
            for (let i = 0n; i < 6n && transactions.length < 6; i++) {
                const block = await web3.eth.getBlock((latestBlock - i).toString(), true);

                if (block.transactions.length > 0) {
                    block.transactions.slice(0, 6 - transactions.length).forEach(tx => {
                        console.log(tx)
                        transactions.push({
                            hash: tx.hash,
                            from: tx.from,
                            to: tx.to || 'Contract Creation',
                            value: Number(web3.utils.fromWei(tx.value, 'ether')).toFixed(3),
                            blockNumber: Number(tx.blockNumber),
                            timestamp: block.timestamp
                        });
                    });
                }
            }
            setFirstLoading(true)
            SetTXData(transactions)

        } catch (error) {
            console.error("Error fetching transactions:", error);
            return [];
        }
    }
    useEffect(() => {
        getLatestTransactions()
    }, [])

    const blockNumber = (row) => {
        return (
            <div className='container-fluid' style={{ textAlign: 'left' }}>
                <Row>
                    <Col xs="4">
                        <div style={{
                            background: IsLightMode ? "rgb(230,230,230)" : "rgb(90,90,90)",
                            display: 'inline-block',
                            padding: '8px',
                            borderRadius: '8px',
                        }}>
                            <svg fill={IsLightMode ? 'gray' : 'rgb(200,200,200)'} width="28px" height="28px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M1 3v18h22V3zm1 1h20v16H2zm17 6H5V9h14zm-6 4H5v-1h8z" /><path fill="none" d="M0 0h24v24H0z" /></svg>
                        </div>
                    </Col>

                    <Col>
                        <a href={`/transaction/${row.hash}`} style={{
                            textDecoration: 'none',
                            color: '#0784c3',
                            display: 'block',
                            fontSize: '14px'
                        }}>{formatString(row.hash)}</a>
                        <small className='m-0 p-0'>
                            {timeSince(Number(row.timestamp))}
                        </small>
                    </Col>
                </Row>
            </div>
        )
    }
    const TransformData = (row) => {
        return (
            <div className='container-fluid' style={{ textAlign: 'left' }}>
                <Row>
                    <Col>
                        <p style={{
                            fontSize: '14px'
                        }} className='m-0 p-0' >
                            From
                            <a href={`/address/${row.from}`} style={{
                                textDecoration: 'none',
                                color: '#0784c3',
                                marginLeft: '4px'
                            }}>
                                {formatString(row.from)}
                            </a>
                        </p>
                        <p style={{
                            fontSize: '14px'
                        }} className='m-0 p-0'>
                            To
                            <a href={`/address/${row.to}`} style={{
                                textDecoration: 'none',
                                color: '#0784c3',
                                marginLeft: '4px'
                            }}>
                                {formatString(row.to)}
                            </a>
                        </p>
                    </Col>
                </Row>
            </div>
        )
    }
    const Value = (row) => {
        return (
            <div className='container-fluid'
                title='value'
                style={{
                    borderStyle: 'solid',
                    borderWidth: '1px',
                    display: 'inline-block',
                    textAlign: 'center',
                    borderRadius: '8px',
                    borderColor: IsLightMode ? "rgb(220,220,220)" : null,
                    padding: '2px 0px',
                    fontSize: '14px'
                }}
            >
                {Number(row.value)}<small style={{ marginLeft: '4px' }}>ETH</small>
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
                Latest Transactions
            </h6>
            <div
                style={{
                    padding: '16px',
                    color: IsLightMode ? null : darkText3,
                    paddingTop: '0px'
                }}
            >
                {
                    !FirstLoading ?
                        <LoadingComponent />
                        :
                        <DataTable
                            value={TXData}
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
                                    textAlign: 'left',
                                    color: IsLightMode ? lightText3 : darkText3,
                                    borderBottom: `1px solid ${IsLightMode ? '#eee' : '#444'}`
                                }}
                                body={blockNumber}
                            />

                            <Column
                                bodyStyle={{
                                    textAlign: 'left',
                                    color: IsLightMode ? lightText3 : darkText3,
                                    borderBottom: `1px solid ${IsLightMode ? '#eee' : '#444'}`
                                }}
                                body={TransformData}
                            />

                            <Column
                                bodyStyle={{
                                    textAlign: 'left',
                                    color: IsLightMode ? lightText3 : darkText3,
                                    borderBottom: `1px solid ${IsLightMode ? '#eee' : '#444'}`
                                }}
                                body={Value}
                            />

                        </DataTable>
                }

                <div className='pt-3 pb-3' style={{
                    textAlign: 'center',
                    marginBottom: '-12px',
                    cursor: 'pointer'
                }}>
                    <a href='/transaction' style={{ textDecoration: 'none', color: 'inherit' }}>
                        <span style={{
                            fontSize: '15px',
                            color: IsLightMode ? 'gray' : null
                        }}>
                            View All Transactions
                            <EastIcon style={{ marginLeft: '4px', fontSize: '20px' }} />
                        </span>
                    </a>

                </div>
            </div>
        </div>
    )
}

export default LatestTransaction

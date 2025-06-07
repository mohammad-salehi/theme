import React, { useState, useEffect } from 'react'
import { Col, Row } from 'reactstrap'
import { boxLightBackground0, boxDarkBackground0, darkText3 } from '../../../functions/Colors'
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import PublicIcon from '@mui/icons-material/Public';
import PaymentsIcon from '@mui/icons-material/Payments';
import ViewAgendaIcon from '@mui/icons-material/ViewAgenda';
import PaymentIcon from '@mui/icons-material/Payment';
import ViewDayIcon from '@mui/icons-material/ViewDay';
import { serverAddress } from '../../../functions/ServerAddress';
import Web3 from "web3";
import SkeletonLoading from '../../../components/SkeletonLoading/SkeletonLoading';

const SummaryBox = ({ IsLightMode }) => {

    const [price, setPrice] = useState(0)
    const [marketCap, setMarketCap] = useState(0)
    const [FirstLoading, SetFirstLoading] = useState(false)
    const [latestBlock, setLatestBlock] = useState(0)
    const [finalizedBlock, setFinalizedBlock] = useState(0)
    const [safeBlock, setSafeBlock] = useState(0)
    const [medianGasPrice, setMedianGasPrice] = useState(0)

    useEffect(() => {
        const web3 = new Web3(serverAddress)

        const fetchMarketData = async () => {
            const res = await fetch(
                'https://api.coingecko.com/api/v3/coins/ethereum?localization=false&tickers=false&community_data=false&developer_data=false'
            )
            const json = await res.json()
            setPrice(json.market_data.current_price.usd)
            setMarketCap(json.market_data.market_cap.usd)
        }


        const fetchSpecialBlocks = async () => {
            const finalized = await web3.eth.getBlock('finalized')
            const safe = await web3.eth.getBlock('safe')
            setFinalizedBlock(finalized.number)
            setSafeBlock(safe.number)
        }

        const fetchLatestBlock = async () => {
            const num = await web3.eth.getBlockNumber()
            setLatestBlock(num)
            return num
        }

        const fetchMedianGasPrice = async () => {
            const block = await web3.eth.getBlock('latest', true)
            const prices = block.transactions
                .map(tx => BigInt(tx.gasPrice))
                .sort((a, b) => (a > b ? 1 : a < b ? -1 : 0))

            if (prices.length === 0) {
                setMedianGasPrice(null)
                return
            }
            let median
            const mid = Math.floor(prices.length / 2)
            if (prices.length % 2 === 1) {
                median = prices[mid]
            } else {
                median = (prices[mid - 1] + prices[mid]) / 2n
            }
            const medianGwei = Web3.utils.fromWei(median.toString(), 'gwei')
            setMedianGasPrice(medianGwei)
        }

        fetchMarketData()
        fetchSpecialBlocks()
        fetchLatestBlock()
        fetchMedianGasPrice()

    }, [])

    useEffect(() => {
        if (price !== 0 && marketCap !== 0 && latestBlock !== 0 && finalizedBlock !== 0 && safeBlock !== 0 && medianGasPrice !== 0) {
            SetFirstLoading(true)
        }
    }, [price, marketCap, latestBlock, finalizedBlock, safeBlock, medianGasPrice])

    return (
        <div style={{
            background: IsLightMode ? 'white' : boxDarkBackground0,
            boxShadow: 'rgba(0, 0, 0, 0.05) 0px 0px 0px 1px',
            padding: '16px',
            borderRadius: '12px',
            marginTop: '-60px',
            opacity: '1',
            direction: 'ltr'
        }}>
            {
                FirstLoading ?
                    <Row className='p-1 m-0'>

                        <Col
                            className='p-0 m-0' lg="4" md="6" xs="12">
                            <Row className='p-0 m-0'>
                                <Col
                                    className='p-2 m-0' xs="2">
                                    <LocalOfferIcon style={{
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
                                            Price
                                        </small>
                                    </Row>
                                    <Row className='p-0 m-0'>
                                        <p className='m-0 p-0'>
                                            {price.toLocaleString()} $
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
                                    <PaymentsIcon style={{
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
                                            Latest Block
                                        </small>
                                    </Row>
                                    <Row className='p-0 m-0'>
                                        <p className='m-0 p-0'>
                                            {(latestBlock).toLocaleString()}
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
                                            Med Gas Price
                                        </small>
                                    </Row>
                                    <Row className='p-0 m-0'>
                                        <p className='m-0 p-0'>
                                            {Number(medianGasPrice).toFixed(3)}<small> Gwei</small>
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
                                    <PublicIcon style={{
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
                                            Market cap
                                        </small>
                                    </Row>
                                    <Row className='p-0 m-0'>
                                        <p className='m-0 p-0'>
                                            {(marketCap).toLocaleString()} $
                                        </p>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>



                        <Col
                            className='p-0 m-0' lg="4" md="6" xs="12">
                            <Row className='p-0 m-0'>
                                <Col className='p-2 m-0' xs="2">
                                    <ViewAgendaIcon style={{
                                        fontSize: '36px',
                                        color: IsLightMode ? 'gray' : darkText3
                                    }} />
                                </Col>
                                <Col className='p-2 m-0' xs="10">
                                    <Row className='p-0 m-0'>
                                        <small className='m-0 p-0' style={{
                                            color: IsLightMode ? 'gray' : darkText3
                                        }}>
                                            Last Finilized Block
                                        </small>
                                    </Row>
                                    <Row className='p-0 m-0'>
                                        <p className='m-0 p-0'>
                                            {(finalizedBlock).toLocaleString()}
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
                                            Last Safe Block
                                        </small>
                                    </Row>
                                    <Row className='p-0 m-0'>
                                        <p className='m-0 p-0'>
                                            {(safeBlock).toLocaleString()}
                                        </p>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>

                    </Row>
                    :
                    <SkeletonLoading IsLightMode={IsLightMode}/>
            }

        </div>
    )
}

export default SummaryBox

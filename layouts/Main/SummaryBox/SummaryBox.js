import React from 'react'
import { Col, Row } from 'reactstrap'
import { boxLightBackground0, boxDarkBackground0, darkText3 } from '../../../functions/Colors'
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import PublicIcon from '@mui/icons-material/Public';
import PaymentsIcon from '@mui/icons-material/Payments';
import ViewAgendaIcon from '@mui/icons-material/ViewAgenda';
import PaymentIcon from '@mui/icons-material/Payment';
import ViewDayIcon from '@mui/icons-material/ViewDay';
const SummaryBox = ({ IsLightMode }) => {
    return (
        <div style={{
            background: IsLightMode ? 'white' : boxDarkBackground0,
            boxShadow: 'rgba(0, 0, 0, 0.05) 0px 0px 0px 1px',
            padding: '16px',
            borderRadius: '12px',
            marginTop: '-60px',
            opacity: '1',
            direction:'ltr'
        }}>
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
                                    $125
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
                                    Transactions
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
                                    Network fee
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
                                    Last Safe Block
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
    )
}

export default SummaryBox

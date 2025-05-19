import React from 'react'
import { networkData } from '../../functions/functions'
import { Row, Col, Input, Button, Label } from 'reactstrap'
import { darkText3 } from '../../functions/Colors'

const AddNewAddress = ({ IsLightMode }) => {
    return (
        <div>
            <h6 className='p-2 mt-2' style={{color:IsLightMode? null : darkText3}}>افزودن آدرس جدید</h6>
            <form onSubmit={() => { }} name='PassAddNewAddress'>
                <Row className='m-0 p-0'>
                    <Col sm="6" className='m-0 p-2'>
                        <Label style={{
                            color: IsLightMode ? null : darkText3,
                            marginBottom: '-4px'
                        }}>
                            آدرس‌ها
                        </Label>
                        <Input className='AddAccountInput' type='textarea' name='lastname' id='lastNameMulti' style={{ minHeight: 'calc(100% - 24px)', textAlign: 'left', direction: 'ltr' }} />
                    </Col>
                    <Col sm="6" className='m-0 p-2'>
                        <Row>
                            <Col xs="12">
                                <Label style={{
                                    color: IsLightMode ? null : darkText3,
                                    marginBottom: '-4px'
                                }}>
                                    شبکه
                                </Label>
                                <Input className='AddAccountInput' type='text' name='lastname' id='lastNameMulti' />
                            </Col>

                            <Col xs="12">
                                <Button style={{ border: "none", float: "left", padding: "6px 16px", borderRadius: "6px", width: '100%', height: '40px', marginTop: '24px' }}>
                                    <span>
                                        افزودن
                                    </span>
                                </Button>
                            </Col>
                        </Row>

                    </Col>
                </Row>
            </form>

        </div>
    )
}

export default AddNewAddress

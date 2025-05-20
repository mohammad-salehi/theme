import React, { useState, useEffect } from 'react'
import AddressChart from '../../layouts/AddressChart/AddressChart'
import { Row, Col } from 'reactstrap'
import TRXData from '../../layouts/TRXData/TRXData'
import ETHData from '../../layouts/ETHData/ETHData'

const Index = ({IsLightMode}) => {

  useEffect(() => {
    document.title = `سامانه نظارت بر کسب‌وکار - داشبورد`
  })

  return (
    <div className='container-fluid' style={{ maxWidth: '1500px', width: '100%', display: 'flex', flexDirection: 'column', padding: '16px 0px', marginTop: '0px' }}>
      
      <Row className='m-0 p-0'>
        <Col md="6" className='m-0 p-1'>
          <TRXData IsLightMode={IsLightMode}/>
        </Col>

        <Col md="6" className='m-0 p-1'>
          <ETHData IsLightMode={IsLightMode}/>
        </Col>
      </Row>

      <Row className='m-0 p-1  mt-0'>
        <Col className='m-0 p-0'>
          <AddressChart IsLightMode={IsLightMode} />
        </Col>
      </Row>

    </div>
  )
}

export default Index

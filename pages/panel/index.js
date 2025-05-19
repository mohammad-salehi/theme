import React, { useState, useEffect } from 'react'
import AddressChart from '../../layouts/AddressChart/AddressChart'
const Index = ({IsLightMode}) => {

  useEffect(() => {
    document.title = `سامانه نظارت بر کسب‌وکار - داشبورد`
  })

  return (
    <div className='container-fluid' style={{ maxWidth: '1500px', width: '100%', display: 'flex', flexDirection: 'column', padding: '16px 0px', marginTop: '0px' }}>
      <AddressChart IsLightMode={IsLightMode} />
    </div>
  )
}

export default Index

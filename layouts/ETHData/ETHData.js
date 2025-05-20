import React from 'react'
import { darkText3, lightText3, boxLightBackground0, boxDarkBackground0, darkText4 } from '../../functions/Colors';

import { Row, Col } from 'reactstrap';
import AvTimerIcon from '@mui/icons-material/AvTimer';
import HourglassTopIcon from '@mui/icons-material/HourglassTop';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import DataArrayIcon from '@mui/icons-material/DataArray';

const ETHData = ({ IsLightMode }) => {
    return (
        <div style={{ background: IsLightMode ? boxLightBackground0 : boxDarkBackground0, borderRadius: '8px' }} className='p-3'>
            <h6 style={{fontWeight:'bold', color:IsLightMode? null : darkText3}}>
                <img src='images/eth.png' style={{ width: '25px', marginLeft: '4px' , background:  'rgb(251,251,251)', borderRadius:'50%' }} />
                اتریوم
            </h6>
            <Row>
                <Col sm="6" className='mt-2' >
                    <p style={{ color: IsLightMode ? null : darkText4, fontSize: '14px' }}>
                        میانگین زمان بلاک شدن
                    </p>
                    <p style={{ color: IsLightMode ? null : darkText3, marginTop: '-8px' }}>
                        <HourglassTopIcon style={{ marginTop: '-4px', marginLeft: '4px' }} />
                        32 ساعت
                    </p>
                </Col>

                <Col sm="6" className='mt-2'>
                    <p style={{ color: IsLightMode ? null : darkText4, fontSize: '14px' }}>
                        کمترین زمان بلاک شدن
                    </p>
                    <p style={{ color: IsLightMode ? null : darkText3, marginTop: '-8px' }}>
                        <AvTimerIcon style={{ marginTop: '-4px', marginLeft: '4px' }} />
                        39 ثانیه
                    </p>
                </Col>

                <Col sm="6" className='mt-2'>
                    <p style={{ color: IsLightMode ? null : darkText4, fontSize: '14px' }}>
                        بیشترین زمان بلاک شدن
                    </p>
                    <p style={{ color: IsLightMode ? null : darkText3, marginTop: '-8px' }}>
                        <AccessTimeIcon style={{ marginTop: '-4px', marginLeft: '4px' }} />
                        210 ساعت
                    </p>
                </Col>

                <Col sm="6" className='mt-2'>
                    <p style={{ color: IsLightMode ? null : darkText4, fontSize: '14px' }}>
                        تعداد داده‌ها
                    </p>
                    <p style={{ color: IsLightMode ? null : darkText3, marginTop: '-8px' }}>
                        <DataArrayIcon style={{ marginTop: '-4px', marginLeft: '4px' }} />
                        2941
                    </p>
                </Col>
            </Row>
        </div>
    )
}

export default ETHData

import React, { useEffect, useState } from 'react'
import { Button, Row, Col } from 'reactstrap'
import { darkText3, lightHeader } from '../../functions/Colors'
import DoneIcon from '@mui/icons-material/Done';

import WbSunnyIcon from '@mui/icons-material/WbSunny';
import BedtimeIcon from '@mui/icons-material/Bedtime';

const ButtonSwitch = ({IsLightMode, setIsLightMode}) => {

    const [IsLight, SetIsLight] = useState(IsLightMode)

    useEffect(() => {
        setIsLightMode(IsLight)
    },[IsLight])

    return (
        <div className='container-fluid' style={{maxWidth:'200px'}}>
            <Row className=' p-0' >
                <Col className='p-0 ps-2 pe-2 m-0' xs="12">
                    <button className='changeColorMenuOption m-0' style={{ width: '100%', textAlign:'right', fontSize: '14px', borderStyle: 'none', padding: '8px 12px', borderRadius: '4px', color: IsLight ? '#0784c3' : IsLightMode ? null : darkText3 }} onClick={() => { SetIsLight(true) }}>
                        <WbSunnyIcon style={{fontSize:'15px', marginLeft:'4px'}}/>
                        حالت روشن
                    </button>
                </Col>
                <Col className='p-0  ps-2 pe-2 m-0' xs="12">
                    <button className='changeColorMenuOption m-0' style={{ width: '100%', textAlign:'right', fontSize: '14px', borderStyle: 'none', padding: '8px 12px', borderRadius: '4px', color: !IsLight ? '#0784c3' : 'black' }} onClick={() => { SetIsLight(false) }}>
                        <BedtimeIcon style={{fontSize:'15px', marginLeft:'4px'}}/>
                        حالت تاریک
                    </button>
                </Col>
            </Row>
        </div>
    )
}

export default ButtonSwitch

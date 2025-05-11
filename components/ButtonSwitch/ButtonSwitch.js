import React, { useEffect, useState } from 'react'
import { Button, Row, Col } from 'reactstrap'
import { lightHeader } from '../../functions/Colors'
import DoneIcon from '@mui/icons-material/Done';

const ButtonSwitch = ({IsLightMode, setIsLightMode}) => {

    const [IsLight, SetIsLight] = useState(IsLightMode)

    useEffect(() => {
        setIsLightMode(IsLight)
    },[IsLight])

    return (
        <div className='container-fluid'>
            <Row className=' p-0' >
                <Col className=' p-0 ps-1' xs="6">
                    <button style={{ width: '100%', fontSize: '14px', background: IsLight ? lightHeader : 'rgb(210,210,210)', borderStyle: 'none', padding: '4px 12px', borderRadius: '4px', color: IsLight ? 'white' : 'black' }} onClick={() => { SetIsLight(true) }}>
                        حالت روشن
                        {
                            IsLight ?
                                <DoneIcon style={{ fontSize: '18px', fontWeight: 'bold', marginRight:'4px' }} />
                                :
                                null
                        }
                    </button>
                </Col>
                <Col className=' p-0 pe-1' xs="6">
                    <button style={{ width: '100%', fontSize: '14px', background: !IsLight ? '#555' : 'rgb(210,210,210)', borderStyle: 'none', padding: '4px 12px', borderRadius: '4px', color: !IsLight ? 'white' : 'black' }} onClick={() => { SetIsLight(false) }}>
                        حالت تاریک
                        {
                            !IsLight ?
                                <DoneIcon style={{ fontSize: '18px', fontWeight: 'bold', marginRight:'4px' }} />
                                :
                                null
                        }
                    </button>
                </Col>
            </Row>
        </div>
    )
}

export default ButtonSwitch

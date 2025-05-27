import React from 'react'
import { useRouter } from 'next/router';
import { Col, Row } from 'reactstrap';
import { darkText3, darkText4 } from '../../functions/Colors';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { darkGreenBackground0, darkRedBackground1, darkRed0, darkGreen0, boxDarkBackground0 } from '../../functions/Colors';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import InternalTransactions from '../../layouts/Main/Transactions/InternalTransactions/InternalTransactions';
import TokenTransfers from '../../layouts/Main/Transactions/TokenTransfers/TokenTransfers';
import CopyrightIcon from '@mui/icons-material/Copyright';

const block = ({ IsLightMode }) => {

  const router = useRouter();
  const { block } = router.query;

  const ethLogo = () => {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 256 256">
        <g id="ether" transform="translate(-31 -137)">
          <circle id="Ellipse_10" data-name="Ellipse 10" cx="128" cy="128" r="128" transform="translate(31 137)" fill="#5d7cff" />
          <g id="ethereum" transform="translate(96 163)">
            <path id="Path_156" data-name="Path 156" d="M126.529,0l-1.368,4.65V139.583l1.368,1.366,62.634-37.024Z" transform="translate(-63.908)" fill="#fff" opacity="0.8" />
            <path id="Path_157" data-name="Path 157" d="M62.634,0,0,103.927l62.634,37.024Z" fill="#fff" />
            <path id="Path_158" data-name="Path 158" d="M127.151,273.591l-.761.939V322.6l.761,2.251,62.672-88.262Z" transform="translate(-64.517 -120.781)" fill="#fff" opacity="0.8" />
            <path id="Path_159" data-name="Path 159" d="M62.634,324.847V273.576L0,236.585Z" transform="translate(0 -120.782)" fill="#fff" />
            <path id="Path_160" data-name="Path 160" d="M127.961,219.651,190.6,182.627l-62.634-28.468Z" transform="translate(-65.327 -78.702)" fill="rgba(119,145,255,0.7)" />
            <path id="Path_161" data-name="Path 161" d="M0,182.621l62.634,37.024V154.161Z" transform="translate(0 -78.697)" fill="rgba(119,145,255,0.5)" />
          </g>
        </g>
      </svg>
    )
  }

  const Status = (type) => {
    if (type === true) {
      return (
        <span style={{
          background: IsLightMode ? 'rgba(255,0,0,0.1)' : darkRedBackground1,
          color: IsLightMode ? 'rgb(173,1,1)' : darkRed0,
          padding: '2px 16px',
          borderRadius: '4px',
          fontSize: '14px', marginBottom: '-6px',
          borderStyle: 'solid',
          borderWidth: '1px',
          borderColor: IsLightMode ? 'rgb(173,1,1)' : darkRed0
        }}>
          nemidonam
        </span>
      )
    } else if (type === false) {
      return (
        <span style={{
          background: IsLightMode ? 'rgba(0,255,0,0.1)' : darkGreenBackground0,
          color: IsLightMode ? 'rgb(27,96,33)' : darkGreen0,
          padding: '2px 16px',
          borderRadius: '4px',
          fontSize: '14px', marginBottom: '-6px',
          borderStyle: 'solid',
          borderWidth: '1px',
          borderColor: IsLightMode ? 'rgb(27,96,33)' : darkGreen0,
        }}>
          Finalized
        </span>
      )
    }
  }

  return (
    <div className="ps-2 pe-2" style={{ maxWidth: '1500px', width: '100%', display: 'flex', flexDirection: 'column', padding: '16px 0px', marginTop: '0px', marginLeft: 'auto', marginRight: 'auto' }}>
      <h5>Block <small style={{ color: 'gray' }}>#190835734</small></h5>

      <div className='mt-3' style={{
        background: "white",
        display: 'inline-block',
        padding: '8px',
        borderRadius: '8px',
        background: IsLightMode ? "white" : boxDarkBackground0,
      }}>
        <Row className='mt-3'>
          <Col md="2" className='p-2 ps-4'>
            <span style={{ color: IsLightMode ? 'gray' : darkText3 }}>
              Block Height:
            </span>
          </Col>

          <Col md="10" className='p-2 ps-4 pe-3'>
            <span style={{ wordWrap: 'break-word' }}>
              190835734 <ContentCopyIcon style={{ color: 'gray', fontSize: '14px', marginTop: '-4px', cursor: 'pointer' }} />
            </span>
          </Col>
        </Row>

        <Row className='mt-3'>
          <Col md="2" className='p-2 ps-4'>
            <span style={{ color: IsLightMode ? 'gray' : darkText3 }}>
              Status:
            </span>
          </Col>

          <Col md="10" className='p-2 ps-4 pe-3'>
            <span style={{ wordWrap: 'break-word' }}>
              {Status(false)}
            </span>
          </Col>
        </Row>

        <Row className='mt-3'>
          <Col md="2" className='p-2 ps-4'>
            <span style={{ color: IsLightMode ? 'gray' : darkText3 }}>
              Timestamp:
            </span>
          </Col>

          <Col md="10" className='p-2 ps-4 pe-3'>
            <span style={{ wordWrap: 'break-word', fontWeight: '100' }}>
              <AccessTimeIcon style={{ marginRight: '0px', fontSize: '20px', marginTop: '-4px' }} /> 2 mins ago (May-26-2025 07:05:11 AM UTC)
            </span>
          </Col>
        </Row>

        <Row className='mt-3'>
          <Col md="2" className='p-2 ps-4'>
            <span style={{ color: IsLightMode ? 'gray' : darkText3 }}>
              Proposed On:
            </span>
          </Col>

          <Col md="10" className='p-2 ps-4 pe-3'>
            <span style={{ wordWrap: 'break-word', fontWeight: '100' }}>
              Block proposed on slot{' '}
              <span style={{ wordWrap: 'break-word', color: '#0784c3' }}>
                11793150{' '}
              </span>
              , epoch 368535{' '}
              <span style={{ wordWrap: 'break-word', color: '#0784c3' }}>
                368535
              </span>
            </span>
          </Col>
        </Row>

        <Row className='mt-3'>
          <Col md="2" className='p-2 ps-4'>
            <span style={{ color: IsLightMode ? 'gray' : darkText3 }}>
              Transactions:
            </span>
          </Col>

          <Col md="10" className='p-2 ps-4 pe-3'>
            <span style={{ wordWrap: 'break-word', fontWeight: '100' }}>
              <span style={{ wordWrap: 'break-word', color: '#0784c3' }}>
                186 transactions{' '}
              </span>
              and{' '}
              <span style={{ wordWrap: 'break-word', color: '#0784c3' }}>
                86 contract internal transactions{' '}
              </span>
              in this block

            </span>
          </Col>
        </Row>

        <Row className='mt-3'>
          <Col md="2" className='p-2 ps-4'>
            <span style={{ color: IsLightMode ? 'gray' : darkText3 }}>
              Withdrawals:
            </span>
          </Col>

          <Col md="10" className='p-2 ps-4 pe-3'>
            <span style={{ wordWrap: 'break-word', fontWeight: '100' }}>
              <span style={{ wordWrap: 'break-word', color: '#0784c3' }}>
                16 withdrawals{' '}
              </span>
              in this block
            </span>
          </Col>
        </Row>
        <hr />

        <Row className='mt-3'>
          <Col md="2" className='p-2 ps-4'>
            <span style={{ color: IsLightMode ? 'gray' : darkText3 }}>
              Fee Recipient:
            </span>
          </Col>

          <Col md="10" className='p-2 ps-4 pe-3'>
            <span style={{ wordWrap: 'break-word', fontWeight: '100' }}>
              <span style={{ wordWrap: 'break-word', color: '#0784c3' }}>
                *rsync-builder.eth {' '}
              </span>
              in 12 secs
            </span>
          </Col>
        </Row>

        <Row className='mt-3'>
          <Col md="2" className='p-2 ps-4'>
            <span style={{ color: IsLightMode ? 'gray' : darkText3 }}>
              Block Reward:
            </span>
          </Col>

          <Col md="10" className='p-2 ps-4 pe-3'>
            <span style={{ wordWrap: 'break-word', fontWeight: '100' }}>
              0.018332209930672767 ETH (0 + 0.034365651695408117 - 0.01603344176473535)
            </span>
          </Col>
        </Row>

        <Row className='mt-3'>
          <Col md="2" className='p-2 ps-4'>
            <span style={{ color: IsLightMode ? 'gray' : darkText3 }}>
              Total Difficulty:
            </span>
          </Col>

          <Col md="10" className='p-2 ps-4 pe-3'>
            <span style={{ wordWrap: 'break-word', fontWeight: '100' }}>
              0
            </span>
          </Col>
        </Row>

        <Row className='mt-3'>
          <Col md="2" className='p-2 ps-4'>
            <span style={{ color: IsLightMode ? 'gray' : darkText3 }}>
              Size:
            </span>
          </Col>

          <Col md="10" className='p-2 ps-4 pe-3'>
            <span style={{ wordWrap: 'break-word', fontWeight: '100' }}>
              87,206 bytes
            </span>
          </Col>
        </Row>
        <hr />

        <Row className='mt-3'>
          <Col md="2" className='p-2 ps-4'>
            <span style={{ color: IsLightMode ? 'gray' : darkText3 }}>
              Gas Used:
            </span>
          </Col>

          <Col md="10" className='p-2 ps-4 pe-3'>
            <span style={{ wordWrap: 'break-word', fontWeight: '100' }}>
              16,099,439
              (44.81%)
            </span>
          </Col>
        </Row>

        <Row className='mt-3'>
          <Col md="2" className='p-2 ps-4'>
            <span style={{ color: IsLightMode ? 'gray' : darkText3 }}>
              Gas Limit:
            </span>
          </Col>

          <Col md="10" className='p-2 ps-4 pe-3'>
            <span style={{ wordWrap: 'break-word', fontWeight: '100' }}>
              35,929,725
            </span>
          </Col>
        </Row>

        <Row className='mt-3'>
          <Col md="2" className='p-2 ps-4'>
            <span style={{ color: IsLightMode ? 'gray' : darkText3 }}>
              Base Fee Per Gas:
            </span>
          </Col>

          <Col md="10" className='p-2 ps-4 pe-3'>
            <span style={{ wordWrap: 'break-word', fontWeight: '100' }}>
              0.00000000099590065 ETH{' '}
              <span style={{ color: IsLightMode ? 'gray' : darkText3 }}>
                (0.99590065 Gwei)
              </span>
            </span>
          </Col>
        </Row>

        <Row className='mt-3'>
          <Col md="2" className='p-2 ps-4'>
            <span style={{ color: IsLightMode ? 'gray' : darkText3 }}>
              Burnt Fees:
            </span>
          </Col>

          <Col md="10" className='p-2 ps-4 pe-3'>
            <span style={{ wordWrap: 'break-word', fontWeight: '100' }}>
              0.01603344176473535 ETH
            </span>
          </Col>
        </Row>

        <Row className='mt-3'>
          <Col md="2" className='p-2 ps-4'>
            <span style={{ color: IsLightMode ? 'gray' : darkText3 }}>
              Extra Data:
            </span>
          </Col>

          <Col md="10" className='p-2 ps-4 pe-3'>
            <span style={{ wordWrap: 'break-word', fontWeight: '100' }}>
              @rsyncbuilder (Hex:0x407273796e636275696c646572)
            </span>
          </Col>
        </Row>
        <hr />
        <Row className='mt-3'>
          <Col md="2" className='p-2 ps-4'>
            <span style={{ color: IsLightMode ? 'gray' : darkText3 }}>
              Hash:
            </span>
          </Col>

          <Col md="10" className='p-2 ps-4 pe-3'>
            <span style={{ wordWrap: 'break-word', fontWeight: '100' }}>
              0x7829448817c4005ec2fa8a70f2d19abd4d5d453aeb27972a32cec584f25e13e0
            </span>
          </Col>
        </Row>

        <Row className='mt-3'>
          <Col md="2" className='p-2 ps-4'>
            <span style={{ color: IsLightMode ? 'gray' : darkText3 }}>
              Parent Hash:
            </span>
          </Col>

          <Col md="10" className='p-2 ps-4 pe-3'>
            <span style={{ wordWrap: 'break-word', fontWeight: '100' }}>
              0x1035726bc91fecd84deffb32ff1079ac2139b837f58c4f707c2caa7e9a017ce9
            </span>
          </Col>
        </Row>

        <Row className='mt-3'>
          <Col md="2" className='p-2 ps-4'>
            <span style={{ color: IsLightMode ? 'gray' : darkText3 }}>
              StateRoot:
            </span>
          </Col>

          <Col md="10" className='p-2 ps-4 pe-3'>
            <span style={{ wordWrap: 'break-word', fontWeight: '100' }}>
              0x4a7268e60f543d4c3d964a80acb949afff7efb3089725e6bbd621af9ab80523a
            </span>
          </Col>
        </Row>

        <Row className='mt-3'>
          <Col md="2" className='p-2 ps-4'>
            <span style={{ color: IsLightMode ? 'gray' : darkText3 }}>
              WithdrawalsRoot:
            </span>
          </Col>

          <Col md="10" className='p-2 ps-4 pe-3'>
            <span style={{ wordWrap: 'break-word', fontWeight: '100' }}>
              0x6510036fec56d67877071953ecaed672d59d0206c07d4347eead4a71bff70a44
            </span>
          </Col>
        </Row>

        <Row className='mt-3'>
          <Col md="2" className='p-2 ps-4'>
            <span style={{ color: IsLightMode ? 'gray' : darkText3 }}>
              Nonce:
            </span>
          </Col>

          <Col md="10" className='p-2 ps-4 pe-3'>
            <span style={{ wordWrap: 'break-word', fontWeight: '100' }}>
              0x0000000000000000
            </span>
          </Col>
        </Row>
      </div>
      <p style={{ textAlign: 'center', marginBottom: '-8px', marginTop: '4px', color: 'gray', fontSize: '13px' }}>Developed by <a href='https://faranic.ir/' style={{ color: 'inherit', textDecoration: 'none' }}>Panta</a> <CopyrightIcon style={{ fontSize: '16px' }} /></p>

    </div>
  )
}

export default block

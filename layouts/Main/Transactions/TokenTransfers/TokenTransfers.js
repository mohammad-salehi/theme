import React, { useState } from 'react'

const TokenTransfers = () => {

  const [Mode, SetMode] = useState(false)

  return (
    <div>
      <div className='mb-3'>
        <button style={{
          fontSize: '14px',
          borderStyle: 'none',
          borderRadius: '6px',
          padding: '4px 12px',
          background: !Mode ? "#0784c3" : null,
          color: !Mode ? "white" : null
        }}
          onClick={() => {
            SetMode(false)
          }}
        >
          All transfers
        </button>

        <button style={{
          fontSize: '14px',
          borderStyle: 'none',
          borderRadius: '6px',
          padding: '4px 12px',
          background: Mode ? "#0784c3" : null,
          color: Mode ? "white" : null,
          marginLeft: '8px'
        }}
          onClick={() => {
            SetMode(true)
          }}
        >
          Net transfers
        </button>
      </div>

      {
        Mode ?

          <div>
            <p>
              <span>
                <a style={{
                  textDecoration: 'none',
                  color: "#0784c3"
                }}>
                  0xaBdBe1a3...A044FC304{" "}
                </a>
              </span>
              <span style={{ fontWeight: 'bold' }}>
                sent{" "}
              </span>
              99.870402{" "}
              <span style={{ color: 'gray' }}>
                ($99.87){" "}
              </span>
              <span>
                <a style={{
                  textDecoration: 'none',
                  color: "#0784c3"
                }}>
                  Tether USD
                  {" "}
                </a>
                <span style={{ color: 'gray' }}>
                  (USDT)
                </span>
              </span>
            </p>

            <p>
              <span>
                <a style={{
                  textDecoration: 'none',
                  color: "#0784c3"
                }}>
                  0xaBdBe1a3...A044FC304{" "}
                </a>
              </span>
              <span style={{ fontWeight: 'bold' }}>
                sent{" "}
              </span>
              99.870402{" "}
              <span style={{ color: 'gray' }}>
                ($99.87){" "}
              </span>
              <span>
                <a style={{
                  textDecoration: 'none',
                  color: "#0784c3"
                }}>
                  Tether USD
                  {" "}
                </a>
                <span style={{ color: 'gray' }}>
                  (USDT)
                </span>
              </span>
            </p>
          </div>
          :
          <div>
            <p>
              <span style={{ fontWeight: 'bold' }}>
                from{" "}
              </span>
              <span>
                <a style={{
                  textDecoration: 'none',
                  color: "#0784c3"
                }}>
                  LI.FI: LiFi Diamond{" "}
                </a>
              </span>
              <span style={{ fontWeight: 'bold' }}>
                to{" "}
              </span>
              <span>
                <a style={{
                  textDecoration: 'none',
                  color: "#0784c3"
                }}>
                  LI.FI: LiFi Diamond{" "}
                </a>
              </span>
              <span style={{ fontWeight: 'bold' }}>
                for{" "}
              </span>
              99.870402{" "}
              <span style={{ color: 'gray' }}>
                ($0.10){" "}
              </span>
              <span>
                <a style={{
                  textDecoration: 'none',
                  color: "#0784c3"
                }}>
                  Tether USD
                  {" "}
                </a>
                <span style={{ color: 'gray' }}>
                  (USDT)
                </span>
              </span>
            </p>
            <p>
              <span style={{ fontWeight: 'bold' }}>
                from{" "}
              </span>
              <span>
                <a style={{
                  textDecoration: 'none',
                  color: "#0784c3"
                }}>
                  LI.FI: LiFi Diamond{" "}
                </a>
              </span>
              <span style={{ fontWeight: 'bold' }}>
                to{" "}
              </span>
              <span>
                <a style={{
                  textDecoration: 'none',
                  color: "#0784c3"
                }}>
                  LI.FI: LiFi Diamond{" "}
                </a>
              </span>
              <span style={{ fontWeight: 'bold' }}>
                for{" "}
              </span>
              99.870402{" "}
              <span style={{ color: 'gray' }}>
                ($0.10){" "}
              </span>
              <span>
                <a style={{
                  textDecoration: 'none',
                  color: "#0784c3"
                }}>
                  Tether USD
                  {" "}
                </a>
                <span style={{ color: 'gray' }}>
                  (USDT)
                </span>
              </span>
            </p>
          </div>
      }

    </div>
  )
}

export default TokenTransfers

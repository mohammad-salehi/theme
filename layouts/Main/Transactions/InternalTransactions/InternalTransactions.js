import React, { useState } from 'react'

const InternalTransactions = () => {

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
                !Mode ?
                    <div>
                        <p>
                            <span style={{ fontWeight: 'bold' }}>
                                Transfer{" "}
                            </span>
                            0.000038119274689472 ETH{" "}
                            <span style={{ color: 'gray' }}>
                                ($0.10){" "}

                            </span>
                            From{" "}
                            <span>
                                <a style={{
                                    textDecoration: 'none',
                                    color: "#0784c3"
                                }}>
                                    LI.FI: LiFi Diamond{" "}
                                </a>
                            </span>
                            To{" "}
                            <span>
                                <a style={{
                                    textDecoration: 'none',
                                    color: "#0784c3"
                                }}>
                                    0x023fa838...5Bd931Fc7
                                </a>
                            </span>
                        </p>

                        <p>
                            <span style={{ fontWeight: 'bold' }}>
                                Transfer{" "}
                            </span>
                            0.000038119274689472 ETH{" "}
                            <span style={{ color: 'gray' }}>
                                ($0.10){" "}

                            </span>
                            From{" "}
                            <span>
                                <a style={{
                                    textDecoration: 'none',
                                    color: "#0784c3"
                                }}>
                                    LI.FI: LiFi Diamond{" "}
                                </a>
                            </span>
                            To{" "}
                            <span>
                                <a style={{
                                    textDecoration: 'none',
                                    color: "#0784c3"
                                }}>
                                    0x023fa838...5Bd931Fc7
                                </a>
                            </span>
                        </p>
                    </div>
                    :
                    <div>
                        <p>
                            <span>
                                <a style={{
                                    textDecoration: 'none',
                                    color: "#0784c3"
                                }}>
                                    LI.FI: LiFi Diamond{" "}
                                </a>
                            </span>
                            <span style={{ fontWeight: 'bold' }}>
                                sent{" "}
                            </span>
                            0.000038119274689472{" "}
                            <span style={{ color: 'gray' }}>
                                ($0.10){" "}
                            </span>
                            ETH
                        </p>

                        <p>
                            <span>
                                <a style={{
                                    textDecoration: 'none',
                                    color: "#0784c3"
                                }}>
                                    LI.FI: LiFi Diamond{" "}
                                </a>
                            </span>
                            <span style={{ fontWeight: 'bold' }}>
                                sent{" "}
                            </span>
                            0.000038119274689472{" "}
                            <span style={{ color: 'gray' }}>
                                ($0.10){" "}
                            </span>
                            ETH
                        </p>
                    </div>
            }
        </div>
    )
}

export default InternalTransactions

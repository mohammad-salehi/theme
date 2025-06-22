import React, { useState } from "react";

const TokenTransfers = ({ tokenTransfers}) => {
  const [Mode, SetMode] = useState(false);

  function shortAddress(address) {
    if (!address || address.length < 18) return address;
    return address.slice(0, 8) + "..." + address.slice(-8);
  }
  
  console.log(tokenTransfers)
  return (
    <div>
      <div>

        { tokenTransfers.length > 0 ? tokenTransfers.map((item) => {
          return (
            <p>
              <span>
                <a
                  style={{
                    textDecoration: "none",
                    color: "#0784c3",
                  }}
                >
                  {shortAddress(item.from)}{" "}
                </a>
              </span>
              <span style={{ fontWeight: "bold" }}>sent </span>
              {Number(item.amount).toLocaleString()} <span style={{ color: "gray" }}> </span>
              <span>
                <a
                  style={{
                    textDecoration: "none",
                    color: "#0784c3",
                  }}
                >
                  {item.name}{" "}
                </a>
                <span style={{ color: "gray" }}>({item.symbol}){" "}</span>
              </span>
              <span style={{ fontWeight: "bold" }}>to{" "}</span>
              <a
                  style={{
                    textDecoration: "none",
                    color: "#0784c3",
                  }}
                >
                  {shortAddress(item.to)}{" "}
                </a>
            </p>
          );
        }) : null}
      </div>
    </div>
  );
};

export default TokenTransfers;

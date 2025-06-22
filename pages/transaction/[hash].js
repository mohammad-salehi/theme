import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Col, Row } from "reactstrap";
import { darkText3, darkText4 } from "../../functions/Colors";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import {
  darkGreenBackground0,
  darkRedBackground1,
  darkRed0,
  darkGreen0,
  boxDarkBackground0,
} from "../../functions/Colors";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import InternalTransactions from "../../layouts/Main/Transactions/InternalTransactions/InternalTransactions";
import TokenTransfers from "../../layouts/Main/Transactions/TokenTransfers/TokenTransfers";
import CopyrightIcon from "@mui/icons-material/Copyright";
import Web3 from "web3";
import { serverAddress } from "../../functions/ServerAddress";
import BN from "bn.js";
import LoadingComponent from "../../components/LoadingComponent/LoadingComponent";

const Transaction = ({ IsLightMode }) => {
  const web3 = new Web3(serverAddress);

  const router = useRouter();
  const { hash } = router.query;

  function timeSince(timestamp) {
    const now = Date.now();

    // If the timestamp is not in milliseconds, assume it's in seconds and convert it
    if (timestamp < 1e12) {
      timestamp *= 1000;
    }

    const elapsed = now - timestamp; // elapsed time in milliseconds

    const seconds = Math.floor(elapsed / 1000);
    if (seconds < 60) return seconds + " seconds ago";

    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) return minutes + " minutes ago";

    const hours = Math.floor(minutes / 60);
    if (hours < 24) return hours + " hours ago";

    const days = Math.floor(hours / 24);
    if (days < 30) return days + " days ago";

    const months = Math.floor(days / 30);
    if (months < 12) return months + " months ago";

    const years = Math.floor(months / 12);
    return years + " years ago";
  }

  function timestampToDateString(timestamp) {
    // اگر ورودی BigInt بود، به عدد تبدیل کن
    const ts = Number(timestamp);
    const date = new Date(ts * 1000);

    // yyyy-mm-dd HH:MM:ss
    const yyyy = date.getFullYear();
    const mm = String(date.getMonth() + 1).padStart(2, "0");
    const dd = String(date.getDate()).padStart(2, "0");
    const hh = String(date.getHours()).padStart(2, "0");
    const min = String(date.getMinutes()).padStart(2, "0");
    const ss = String(date.getSeconds()).padStart(2, "0");

    return `${yyyy}-${mm}-${dd} ${hh}:${min}:${ss}`;
  }

  const ethLogo = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        viewBox="0 0 256 256"
      >
        <g id="ether" transform="translate(-31 -137)">
          <circle
            id="Ellipse_10"
            data-name="Ellipse 10"
            cx="128"
            cy="128"
            r="128"
            transform="translate(31 137)"
            fill="#5d7cff"
          />
          <g id="ethereum" transform="translate(96 163)">
            <path
              id="Path_156"
              data-name="Path 156"
              d="M126.529,0l-1.368,4.65V139.583l1.368,1.366,62.634-37.024Z"
              transform="translate(-63.908)"
              fill="#fff"
              opacity="0.8"
            />
            <path
              id="Path_157"
              data-name="Path 157"
              d="M62.634,0,0,103.927l62.634,37.024Z"
              fill="#fff"
            />
            <path
              id="Path_158"
              data-name="Path 158"
              d="M127.151,273.591l-.761.939V322.6l.761,2.251,62.672-88.262Z"
              transform="translate(-64.517 -120.781)"
              fill="#fff"
              opacity="0.8"
            />
            <path
              id="Path_159"
              data-name="Path 159"
              d="M62.634,324.847V273.576L0,236.585Z"
              transform="translate(0 -120.782)"
              fill="#fff"
            />
            <path
              id="Path_160"
              data-name="Path 160"
              d="M127.961,219.651,190.6,182.627l-62.634-28.468Z"
              transform="translate(-65.327 -78.702)"
              fill="rgba(119,145,255,0.7)"
            />
            <path
              id="Path_161"
              data-name="Path 161"
              d="M0,182.621l62.634,37.024V154.161Z"
              transform="translate(0 -78.697)"
              fill="rgba(119,145,255,0.5)"
            />
          </g>
        </g>
      </svg>
    );
  };

  const Status = (type) => {
    if (type === false) {
      return (
        <span
          style={{
            background: IsLightMode ? "rgba(255,0,0,0.1)" : darkRedBackground1,
            color: IsLightMode ? "rgb(173,1,1)" : darkRed0,
            padding: "2px 16px",
            borderRadius: "4px",
            fontSize: "14px",
            marginBottom: "-6px",
            borderStyle: "solid",
            borderWidth: "1px",
            borderColor: IsLightMode ? "rgb(173,1,1)" : darkRed0,
          }}
        >
          unsuccess
        </span>
      );
    } else if (type === true) {
      return (
        <span
          style={{
            background: IsLightMode
              ? "rgba(0,255,0,0.1)"
              : darkGreenBackground0,
            color: IsLightMode ? "rgb(27,96,33)" : darkGreen0,
            padding: "2px 16px",
            borderRadius: "4px",
            fontSize: "14px",
            marginBottom: "-6px",
            borderStyle: "solid",
            borderWidth: "1px",
            borderColor: IsLightMode ? "rgb(27,96,33)" : darkGreen0,
          }}
        >
          success
        </span>
      );
    }
  };

  const [Loading, SetLoading] = useState(true);
  const [StatusData, SetStatusData] = useState(null);
  const [BlockNumber, SetBlockNumber] = useState(null);
  const [Timestamp, SetTimestamp] = useState(null);
  const [From, SetFrom] = useState(null);
  const [To, SetTo] = useState(null);
  const [tokenTransfers, SettokenTransfers] = useState([]);
  const [EthValue, SetEthValue] = useState(null);
  const [fee, setFee] = useState("");

  useEffect(() => {
    if (!hash) return;

    const fetchReceipt = async () => {
      try {
        const receipt = await web3.eth.getTransactionReceipt(hash);
        const tx = await web3.eth.getTransaction(hash);

        SetFrom(tx.from);
        SetTo(tx.to);

        if (receipt) {
          const isSuccess =
            receipt.status === 1n ||
            receipt.status === "0x1" ||
            receipt.status === true;
          SetStatusData(isSuccess);
          SetBlockNumber(Number(receipt.blockNumber));
          const block = await web3.eth.getBlock(receipt.blockNumber);
          SetTimestamp(Number(block.timestamp));

          const ethValue = web3.utils.fromWei(tx.value, "ether");
          SetEthValue(ethValue);
          let feeValue = null;
          if (receipt.gasUsed && receipt.effectiveGasPrice) {
            // BigInt برای جلوگیری از overflow
            feeValue =
              BigInt(receipt.gasUsed) * BigInt(receipt.effectiveGasPrice);
            // تبدیل به اتر
            setFee(web3.utils.fromWei(feeValue.toString(), "ether"));
          } else {
            setFee("");
          }
          // استخراج توکن‌های انتقال یافته
          const transferEventSignature =
            "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef";
          const transfers = [];

          for (let log of receipt.logs) {
            if (log.topics[0] === transferEventSignature) {
              const tokenAddress = log.address;
              // متدهای استاندارد توکن
              const tokenContract = new web3.eth.Contract(
                [
                  {
                    constant: true,
                    inputs: [],
                    name: "name",
                    outputs: [{ name: "", type: "string" }],
                    type: "function",
                  },
                  {
                    constant: true,
                    inputs: [],
                    name: "symbol",
                    outputs: [{ name: "", type: "string" }],
                    type: "function",
                  },
                  {
                    constant: true,
                    inputs: [],
                    name: "decimals",
                    outputs: [{ name: "", type: "uint8" }],
                    type: "function",
                  },
                ],
                tokenAddress
              );

              let name, symbol, decimals;
              try {
                name = await tokenContract.methods.name().call();
                symbol = await tokenContract.methods.symbol().call();
                decimals = await tokenContract.methods.decimals().call();
              } catch (err) {
                name = symbol = "Unknown";
                decimals = 18;
              }

              // استخراج مقدار توکن از log.data
              const value = new BN(log.data.replace(/^0x/, ""), 16);
              const decimalsInt = Number(decimals); // decimals همیشه کوچیکه و خطری نداره
              const divisor = new BN(10).pow(new BN(decimalsInt));
              const whole = value.div(divisor).toString();
              const frac = value
                .mod(divisor)
                .toString()
                .padStart(decimalsInt, "0");
              // فقط تا ۶ رقم اعشار نشون بده (اختیاری)
              let amount;
              if (decimalsInt > 0) {
                amount = `${whole}.${frac.slice(0, 6)}`; // تا ۶ اعشار
              } else {
                amount = whole;
              }
              const from = "0x" + log.topics[1].slice(26); // 26 یعنی 2 + 24 (24 کاراکتر 0x و صفر اضافی)
              const to = "0x" + log.topics[2].slice(26);

              transfers.push({
                name,
                symbol,
                amount,
                tokenAddress,
                from,
                to,
              });
            }
          }
          console.log(transfers);
          SettokenTransfers(transfers);
          SetLoading(false);
        } else {
          console.log(
            "Receipt not found (تراکنش هنوز ماین نشده یا وجود نداره)"
          );
        }
      } catch (err) {
        console.error("Error:", err.message);
      }
    };

    fetchReceipt();
  }, [hash]);
  return (
    <div
      className="ps-2 pe-2"
      style={{
        maxWidth: "1280px",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        padding: "16px 0px",
        marginTop: "0px",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      {!Loading ? (
        <>
          <h5>Transaction Details</h5>

          <div
            style={{
              background: "white",
              display: "inline-block",
              padding: "8px",
              borderRadius: "8px",
              background: IsLightMode ? "white" : boxDarkBackground0,
            }}
          >
            <Row>
              <Col xs="1" className="d-none d-sm-block">
                {ethLogo()}
              </Col>
              <Col xs="11">
                <h6 style={{ display: "block" }} className="p-0 m-0 mt-1">
                  Transaction Action
                </h6>
                <p
                  style={{ display: "block", wordWrap: "break-word" }}
                  className="p-0 m-0"
                >
                  <span
                    style={{ color: IsLightMode ? "gray" : darkText3 }}
                    className="me-1"
                  >
                    Transfer
                  </span>
                  {EthValue} ETH
                  <span
                    style={{ color: IsLightMode ? "gray" : darkText3 }}
                    className="me-1 ms-1"
                  >
                    to
                  </span>
                  {To}
                </p>
              </Col>
            </Row>
          </div>

          <div
            className="mt-3"
            style={{
              background: "white",
              display: "inline-block",
              padding: "8px",
              borderRadius: "8px",
              background: IsLightMode ? "white" : boxDarkBackground0,
            }}
          >
            <Row className="mt-3">
              <Col md="2" className="p-2 ps-4">
                <span style={{ color: IsLightMode ? "gray" : darkText3 }}>
                  Transaction Hash:
                </span>
              </Col>

              <Col md="10" className="p-2 ps-4 pe-3">
                <span style={{ wordWrap: "break-word" }}>
                  {hash}{" "}
                  <ContentCopyIcon
                    style={{
                      color: "gray",
                      fontSize: "14px",
                      marginTop: "-4px",
                      cursor: "pointer",
                    }}
                  />
                </span>
              </Col>
            </Row>

            <Row className="mt-3">
              <Col md="2" className="p-2 ps-4">
                <span style={{ color: IsLightMode ? "gray" : darkText3 }}>
                  Status:
                </span>
              </Col>

              <Col md="10" className="p-2 ps-4 pe-3">
                <span style={{ wordWrap: "break-word" }}>
                  {Status(StatusData)}
                </span>
              </Col>
            </Row>

            <Row className="mt-3">
              <Col md="2" className="p-2 ps-4">
                <span style={{ color: IsLightMode ? "gray" : darkText3 }}>
                  Block:
                </span>
              </Col>

              <Col md="10" className="p-2 ps-4 pe-3">
                <span style={{ wordWrap: "break-word" }}>
                  <span style={{ color: "#0784c3" }}>
                    {Number(BlockNumber).toLocaleString()}
                  </span>
                </span>
              </Col>
            </Row>

            <Row className="mt-3">
              <Col md="2" className="p-2 ps-4">
                <span style={{ color: IsLightMode ? "gray" : darkText3 }}>
                  Timestamp:
                </span>
              </Col>

              <Col md="10" className="p-2 ps-4 pe-3">
                <span style={{ wordWrap: "break-word", fontWeight: "100" }}>
                  <AccessTimeIcon
                    style={{
                      marginRight: "0px",
                      fontSize: "20px",
                      marginTop: "-4px",
                    }}
                  />{" "}
                  {timeSince(Number(Timestamp))} (
                  {timestampToDateString(Number(Timestamp))} UTC+3:30)
                </span>
              </Col>
            </Row>
            <hr />
            <Row className="mt-3">
              <Col md="2" className="p-2 ps-4">
                <span style={{ color: IsLightMode ? "gray" : darkText3 }}>
                  From:
                </span>
              </Col>

              <Col md="10" className="p-2 ps-4 pe-3">
                <span style={{ wordWrap: "break-word", color: "#0784c3" }}>
                  {From}{" "}
                  <ContentCopyIcon
                    style={{
                      color: "gray",
                      fontSize: "14px",
                      marginTop: "-4px",
                      cursor: "pointer",
                    }}
                  />
                </span>
              </Col>
            </Row>

            <Row className="mt-3">
              <Col md="2" className="p-2 ps-4">
                <span style={{ color: IsLightMode ? "gray" : darkText3 }}>
                  To:
                </span>
              </Col>

              <Col md="10" className="p-2 ps-4 pe-3">
                <span style={{ wordWrap: "break-word", color: "#0784c3" }}>
                  {To}{" "}
                  <ContentCopyIcon
                    style={{
                      color: "gray",
                      fontSize: "14px",
                      marginTop: "-4px",
                      cursor: "pointer",
                    }}
                  />
                </span>
              </Col>
            </Row>
            <hr />

            {/* <Row className="mt-3">
          <Col md="2" className="p-2 ps-4">
            <span style={{ color: IsLightMode ? "gray" : darkText3 }}>
              Internal Transactions:
            </span>
          </Col>

          <Col md="10" className="p-2 ps-4 pe-3">
            <InternalTransactions />
          </Col>
        </Row>
        <hr /> */}

            <Row className="mt-3">
              <Col md="2" className="p-2 ps-4">
                <span style={{ color: IsLightMode ? "gray" : darkText3 }}>
                  ERC-20 Tokens Transferred:
                </span>
              </Col>

              <Col md="10" className="p-2 ps-4 pe-3">
                <TokenTransfers tokenTransfers={tokenTransfers} />
              </Col>
            </Row>
            <hr />

            <Row className="mt-3">
              <Col md="2" className="p-2 ps-4">
                <span style={{ color: IsLightMode ? "gray" : darkText3 }}>
                  Value:
                </span>
              </Col>

              <Col md="10" className="p-2 ps-4 pe-3">
                <span style={{ wordWrap: "break-word" }}>{EthValue} ETH </span>
              </Col>
            </Row>

            <Row className="mt-3">
              <Col md="2" className="p-2 ps-4">
                <span style={{ color: IsLightMode ? "gray" : darkText3 }}>
                  Transaction Fee:
                </span>
              </Col>

              <Col md="10" className="p-2 ps-4 pe-3">
                <span style={{ wordWrap: "break-word" }}>{fee} ETH </span>
              </Col>
            </Row>
            {/* 
        <Row className="mt-3">
          <Col md="2" className="p-2 ps-4">
            <span style={{ color: IsLightMode ? "gray" : darkText3 }}>
              Gas Price:
            </span>
          </Col>

          <Col md="10" className="p-2 ps-4 pe-3">
            <span style={{ wordWrap: "break-word" }}>
              0.017683599103021503 ETH{" "}
              <span style={{ color: IsLightMode ? "gray" : darkText3 }}>
                ($45.43)
              </span>
            </span>
          </Col>
        </Row> */}
          </div>
          <p
            style={{
              textAlign: "center",
              marginBottom: "-8px",
              marginTop: "4px",
              color: "gray",
              fontSize: "13px",
            }}
          >
            Developed by{" "}
            <a
              href="https://faranic.ir/"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              Panta
            </a>{" "}
            <CopyrightIcon style={{ fontSize: "16px" }} />
          </p>
        </>
      ) : (
        <div className="mt-5">
        <LoadingComponent />
        </div>
      )}
    </div>
  );
};

export default Transaction;

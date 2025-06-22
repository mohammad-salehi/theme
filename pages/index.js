import { Col, Input, Label, Row } from "reactstrap";
import Checkbox from "@mui/material/Checkbox";
import axios from 'axios'
import Cookies from 'js-cookie'
import { serverAddress } from "../functions/ServerAddress";
import { useState, useEffect } from "react";
import CircularProgress from '@mui/material/CircularProgress';
import Link from 'next/link';
import toast from "react-hot-toast";
import TitleBox from "../layouts/Main/TitleBox/TitleBox";
import SummaryBox from "../layouts/Main/SummaryBox/SummaryBox";
import LatestBlock from "../layouts/Main/LatestBlock/LatestBlock";
import LatestTransaction from "../layouts/Main/LatestTransaction/LatestTransaction";
import Footer from "../layouts/Footer/Footer";
import CopyrightIcon from '@mui/icons-material/Copyright';
export default function Home({ IsLightMode }) {

  // تغییر عنوان صفحه
  useEffect(() => {
    document.title = 'سامانه نظارت بر کسب‌وکار';
  }, []);

  return (
    <div className='container-fluid' style={{ width: '100%', display: 'flex', flexDirection: 'column', padding: '16px 0px', marginTop: '0px' }}>
      <div id="topMainBox" style={{ backgroundImage: IsLightMode ? 'url("./images/lightbackground.png")' : 'url("./images/darkbackground.png")', width: '100%', height: '250px' }} >
        <div className="ps-2 pe-2" style={{ maxWidth: '1280px', width: '100%', display: 'flex', flexDirection: 'column', padding: '16px 0px', marginTop: '0px', marginLeft: 'auto', marginRight: 'auto' }}>
          <TitleBox IsLightMode={IsLightMode} />
        </div>
      </div>
      <div className="ps-2 pe-2" style={{ maxWidth: '1280px', width: '100%', display: 'flex', flexDirection: 'column', padding: '16px 0px', marginTop: '0px', marginLeft: 'auto', marginRight: 'auto' }}>
        <SummaryBox IsLightMode={IsLightMode} />
      </div>
      <div style={{ maxWidth: '1280px', width: '100%', display: 'flex', flexDirection: 'column', padding: '16px 0px', marginTop: '0px', marginLeft: 'auto', marginRight: 'auto' }}>
        <Row className="p-0 m-0">
          
          <Col className="ps-2 pe-2 m-0 mt-2" md="6">
            <LatestBlock IsLightMode={IsLightMode} />
          </Col>

          <Col className="ps-2 pe-2 m-0 mt-2" md="6">
            <LatestTransaction IsLightMode={IsLightMode} />
          </Col>
        </Row>
      </div>
      <p style={{ textAlign: 'center', marginBottom: '-8px', marginTop: '4px', color: 'gray', fontSize: '13px' }}>Developed by <a href='https://faranic.ir/' style={{ color: 'inherit', textDecoration: 'none' }}>Panta</a> <CopyrightIcon style={{ fontSize: '16px' }} /></p>

    </div>
  );
}

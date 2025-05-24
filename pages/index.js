import { Input, Label } from "reactstrap";
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
export default function Home({IsLightMode}) {

  // تغییر عنوان صفحه
  useEffect(() => {
    document.title = 'سامانه نظارت بر کسب‌وکار';
  }, []);

  return (
    <div className='container-fluid' style={{ width: '100%', display: 'flex', flexDirection: 'column', padding: '16px 0px', marginTop: '0px' }}>
      <div style={{backgroundImage: IsLightMode ? 'url("./images/lightbackground.png")' : 'url("./images/darkbackground.png")', width:'100%', height:'250px', marginTop:'75px'}} >
        <div style={{maxWidth:'1500px' ,width: '100%', display: 'flex', flexDirection: 'column', padding: '16px 0px', marginTop: '0px', marginLeft:'auto', marginRight:'auto' }}>
          <TitleBox IsLightMode={IsLightMode}/>
        </div>
      </div>
      <div style={{maxWidth:'1500px' ,width: '100%', display: 'flex', flexDirection: 'column', padding: '16px 0px', marginTop: '0px', marginLeft:'auto', marginRight:'auto' }}>
          <SummaryBox IsLightMode={IsLightMode}/>
        </div>
    </div>
  );
}

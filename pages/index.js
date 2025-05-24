import { Input, Label } from "reactstrap";
import Checkbox from "@mui/material/Checkbox";
import axios from 'axios'
import Cookies from 'js-cookie'
import { serverAddress } from "../functions/ServerAddress";
import { useState, useEffect } from "react";
import CircularProgress from '@mui/material/CircularProgress';
import Link from 'next/link';
import toast from "react-hot-toast";

export default function Home() {

  // تغییر عنوان صفحه
  useEffect(() => {
    document.title = 'سامانه نظارت بر کسب‌وکار';
  }, []);

  return (
    <div className='container-fluid' style={{ maxWidth: '1500px', width: '100%', display: 'flex', flexDirection: 'column', padding: '16px 0px', marginTop: '0px' }}>
      
    </div>
  );
}

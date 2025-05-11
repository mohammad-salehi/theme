import { Input, Label } from "reactstrap";
import Link from 'next/link';
import toast from "react-hot-toast";
import axios from "axios";
import { serverAddress } from "../../functions/ServerAddress";
import { useState, useEffect } from "react";
import { CircularProgress } from "@mui/material";

export default function Recovery() {

  const [Loading, SetLoading] = useState(false)
  useEffect(() => {
    document.title = `سامانه فرا ارز - بازیابی رمز عبور`
  })
  const submit = (event) => {
    event.preventDefault()
    const phone_number = document.getElementById('login_Number').value

    if (phone_number === '') {
        return toast.error('شماره تلفن را به درستی وارد کنید!', {
            position: 'bottom-left'
        })
    } else {
        SetLoading(true)
        axios.post(serverAddress+"/accounts/recover_password/",{ phone_number:phone_number})
        .then((response) => {
            if (response.data.Success === true) {
                SetLoading(false)
                return toast.success('رمز عبور با موفقیت ارسال شد.', {
                    position: 'bottom-left'
                })
            } else {
                SetLoading(false)
                return toast.error('بازیابی ناموفق!', {
                    position: 'bottom-left'
                })
            }
        })
        .catch((err) => {
            console.log(err)
            if (err.response.statusText === 'Unauthorized') {
                SetLoading(false)
                return toast.error('بازیابی ناموفق!', {
                    position: 'bottom-left'
                })
            } else {
                SetLoading(false)
                return toast.error('بازیابی ناموفق!', {
                    position: 'bottom-left'
                })
            }
            SetLoading(false)
        })
    }
}

    return (
        <div id="main">
        <div id="loginBox" className="Glass">
          <h4 style={{fontWeight:'bold'}}>
            بازیابی رمز عبور
          </h4>
          <Label className="mt-3" >شماره موبایل</Label>
          <Input className="Glass loginInput" id="login_Number"/>
          <button className="NiceButton mb-3 mt-3" onClick={submit}>
          {
              Loading ?
                <CircularProgress size="24px" style={{ marginBottom: '-10px' }} />
                :
                <span>بازیابی</span>
            }
          </button>
          <Link className="mt-4" style={{color:'inherit', textDecoration:'none'}} href="/">بازگشت به صفحه اصلی</Link>
        </div>
      </div>
    )
}
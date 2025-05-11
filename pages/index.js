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

  // State برای مقادیر فرم
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);

  // تغییر عنوان صفحه
  useEffect(() => {
    document.title = 'سامانه نظارت بر کسب‌وکار';
  }, []);

  // استفاده از useEffect برای گرفتن داده‌ها از کوکی‌ها در حالت بیلد و ران
  useEffect(() => {
    const storedUsername = Cookies.get('username');
    const storedPassword = Cookies.get('password');
    if (storedUsername && storedPassword) {
      setUsername(storedUsername);
      setPassword(storedPassword);
    }
  }, []);

  const Login = (e) => {
    e.preventDefault();

    if (username === '' || password === '') {
      toast.error('مقادیر را به طور کامل وارد کنید', {
        position: "bottom-left",
      });
    } else {
      setLoading(true);
      axios.post(serverAddress + "/accounts/api/token/", {
        username: username,
        password: password,
      })
        .then((response) => {
          if (response.data.role.role_id === 29 || response.data.role.role_id === 2) {
            setLoading(false);
            if (response.data.refresh && response.data.access) {
              Cookies.set('refresh', response.data.refresh, { expires: 1 });
              Cookies.set('access', response.data.access, { expires: 1 });

              if (rememberMe) {
                const oneYearLater = new Date();
                oneYearLater.setFullYear(oneYearLater.getFullYear() + 1);
                Cookies.set('username', username, { expires: oneYearLater });
                Cookies.set('password', password, { expires: oneYearLater });
              }

              Cookies.set('roll', response.data.role.role_id);
              Cookies.set('roll_name', response.data.role.role_name);
              Cookies.set('name', response.data.user_firstname);
              Cookies.set('ip', response.data.user_ip);
              Cookies.set('lastname', response.data.user_lastname);
              window.location.assign('/panel');
            } else {
              toast.error('ورود ناموفق', {
                position: 'bottom-left'
              });
            }
          }
        })
        .catch((err) => {
          setLoading(false);
          toast.error('ورود ناموفق', {
            position: "bottom-left",
          });
        });
    }
  };

  return (
    <div id="main">
      <div id="loginBox" className="Glass">
        <h4 style={{ fontWeight: 'bold' }}>
         سامانه نظارت بر کسب‌وکار فرانیک!
        </h4>
        <form onSubmit={(e) => e.preventDefault()}>
          <Label className="mt-3">نام کاربری</Label>
          <Input
            id="username"
            style={{
              borderStyle: 'none',
              background: 'rgba(255,255,255,0.25)',
              color: 'white',
            }}
            className="Glass loginInput"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Label>رمز عبور</Label>
          <Input
            id="password"
            style={{
              borderStyle: 'none',
              background: 'rgba(255,255,255,0.25)',
              color: 'white',
            }}
            className="Glass loginInput"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div style={{ textAlign: 'right', padding: '0px' }}>
            <Checkbox
              style={{ color: 'rgb(200,200,200)', marginRight: '-12px' }}
              id="remember_me"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            <Label for="remember_me" style={{ cursor: 'pointer' }}>به‌خاطر بسپار</Label>
          </div>
          <button
            className="NiceButton mb-3"
            onClick={(e) => { Login(e) }}
            style={{ textAlign: 'center' }}
          >
            {
              loading ?
                <CircularProgress size="24px" style={{ marginBottom: '-10px' }} />
                :
                <span>ورود</span>
            }
          </button>
        </form>
        <Link href="/recovery" className="mt-4" style={{ color: 'inherit', textDecoration: 'none' }}>
          رمز عبور خود را فراموش کرده‌اید؟
        </Link>
      </div>
    </div>
  );
}

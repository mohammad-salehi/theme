import "../styles/globals.css";
import { useEffect, useState } from "react";
import Header from "../layouts/Header/Header";
import Footer from "../layouts/Footer/Footer";
import { useRouter } from "next/router";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { Toaster } from "react-hot-toast";
import Head from 'next/head';
import Cookies from 'js-cookie';
import { darkBackground0, lightBackground0, lightText1, darkText1 } from "../functions/Colors";

function MyApp({ Component, pageProps }) {
  const router = useRouter();


  // 1. حالت تم و یک فلگ برای hydration
  const [isLightMode, setIsLightMode] = useState(true);
  const [mounted, setMounted] = useState(false);

  // 2. در useEffect اول، مقدار کوکی رو بخون و state رو ست کن
  useEffect(() => {
    setMounted(true);
    const saved = Cookies.get('IsLightMode');
    if (saved === 'true' || saved === 'false') {
      setIsLightMode(saved === 'true');
    }
  }, []);

  // 3. هر بار که تم عوض شد (و پنجره hydrate شده)، کوکی رو به‌روز کن
  useEffect(() => {
    if (mounted) {
      Cookies.set('IsLightMode', isLightMode.toString(), { expires: 365 });
    }
  }, [isLightMode, mounted]);

  // 4. اعمال تم روی تگ <body> یا کانتینر اصلی
  //    اینجا من روی body attribute می‌ذارم، شما می‌تونید کلاس هم استفاده کنید.
  useEffect(() => {
    document.body.setAttribute('data-theme', isLightMode ? 'light' : 'dark');
  }, [isLightMode]);

  return (
    <div
      id="pantaBackground"
      style={{
        background: isLightMode ? lightBackground0 : darkBackground0,
        color: isLightMode ? lightText1 : darkText1,
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh'
      }}
    >
      <Head>
        <link rel="icon" href="/icon/favicon.ico" />
      </Head>

        <Header
          IsLightMode={isLightMode}
          setIsLightMode={setIsLightMode}
        />

      <main style={{ flex: 1 }}>
        <Component {...pageProps} IsLightMode={isLightMode} />
      </main>

      <Toaster />
      {/* <Footer /> */}
    </div>
  );
}

export default MyApp;

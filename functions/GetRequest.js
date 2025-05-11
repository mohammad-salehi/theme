import axios from 'axios'
import Cookies from 'js-cookie'
import { serverAddress } from './ServerAddress';

const reloadToken = async () => {
    const bodyFormData = new FormData();
    bodyFormData.append('refresh', Cookies.get('refresh'));
    try {
        const response = await axios.post(`${serverAddress}/accounts/api/token/refresh/`, bodyFormData, {headers: {'Content-Type': 'multipart/form-data'}});
        try {
            if (response.response.status === 403) {
                Cookies.set('access', 0) 
                Cookies.set('refresh', 0) 
                Cookies.remove('access')
                Cookies.remove('refresh')
                window.location.assign('/')
            }
        } catch (error) {}
        Cookies.set('access', response.data.access);
        return true;
    } catch (err) {
        Cookies.set('access', 0) 
        Cookies.set('refresh', 0) 
        Cookies.remove('access')
        Cookies.remove('refresh')
        window.location.assign('/')
    }
};

export async function GetRequest(
    url,
    params = {},
    attemptedRefresh = false,
    attempted500 = false
  ) {
    try {
      const response = await axios.get(url, {
        headers: { Authorization: `Bearer ${Cookies.get("access")}` },
        params: params,
      });
      return response;
    } catch (err) {
      if (
        !attemptedRefresh &&
        (err.response?.statusText === "Unauthorized" ||
          err.response?.data?.detail === "Token is expired")
      ) {
        const tokenRefreshed = await reloadToken();
        if (tokenRefreshed) {
          return await GetRequest(url, params, true, attempted500);
        }
      }
      if (!attempted500 && (err.response?.status >= 500 || err.message === "Network Error")) {
        await new Promise((resolve) => setTimeout(resolve, 3000));
        return await GetRequest(url, params, attemptedRefresh, true);
      }
      throw err;
    }
  }

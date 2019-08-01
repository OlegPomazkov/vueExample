import axios from "axios";

export default function(app, inject) {
  // можем задать здесь любую конфигурацию плагина – заголовки, авторизацию, interceptors и т.п.
  // axios.defaults.baseURL = process.env.API_BASE_URL || 'google.com';
  // axios.defaults.headers.common['Accept'] = 'application/json';
  // axios.defaults.headers.post['Content-Type'] = 'application/json';

  // axios.interceptors.request.use(config => {
  //   ...
  //   return config;
  // });

  inject("axios", axios);
}

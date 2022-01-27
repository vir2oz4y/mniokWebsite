const axios = require('axios');

export const apiAxios = axios.create();
//apiAxios.defaults.baseURL = 'https://bonusplus.pro/api/front/';
//apiAxios.defaults.baseURL = 'http://testapi.bonusplus.pro/';
apiAxios.defaults.baseURL = 'https://localhost:7041/';



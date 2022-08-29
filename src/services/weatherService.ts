import request from "./service";
const API_KEY = 'f68d183c2f455cafdd61e4383ed36598';  
// const API_KEY = '1b825daf58d455d1161c0dd1607a1aec';  

const service = {
  getWeather: (city: any) => request.get(`weather?q=${city}&appid=${API_KEY}`),
};

export default service;

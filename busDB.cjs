const request = require("request");
const { XMLParser } = require("fast-xml-parser");
const parser = new XMLParser();
require("dotenv").config();
const key = process.env.okey;
const url = `https://apis.data.go.kr/6260000/BusanBIMS/stopArrByBstopid`;
const bstop = encodeURIComponent("500090000");
const opt = "?bstopid=" + bstop + "&serviceKey=";
// https://apis.data.go.kr/6260000/BusanBIMS/stopArrByBstopid?bstopid=500090000&serviceKey=xpth64xZEcj8AsKlvQ1aoauQKaACDyHVekywGYkzNNGVJYWTqCg4KV4T5OiDyuWkN1SpM6865sAguZauZyQ13w%3D%3D

const urlTotal = url + opt + key;
// console.log(urlTotal);

const bus_DB = request(urlTotal, (e, res, body) => {
  const view = parser.parse(body);
  const _ = view.response.body.items;
  console.log(_);
});
module.exports = bus_DB;

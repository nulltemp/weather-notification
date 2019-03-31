"use strict";

const axios = require("axios");
const config = require("config");

module.exports.hello = async () => {
  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/forecast?zip=${config.zip},${
      config.countryCode
    }&APPID=${config.apiKey}`
  );
  console.log(
    `status=${response.status}, data=${JSON.stringify(response.data)}`
  );
  return response.data;
};

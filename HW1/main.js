const API_KEY =
  "4a2cdcc6-b2e4-11ed-92e6-0242ac130002-4a2cdd34-b2e4-11ed-92e6-0242ac130002";
const CITY_NAME = "Kyiv";
const API_URL = `https://dashboard.stormglass.io/${CITY_NAME}&appid=${API_KEY}`;

fetch(API_URL)
  .then((response) => response.json())
  .then((data) => {
    const {
      name,
      main: { temp, humidity },
    } = data;
    console.log(
      `Weather in ${name}: temperature ${temp}K, humidity ${humidity}%`
    );
  });

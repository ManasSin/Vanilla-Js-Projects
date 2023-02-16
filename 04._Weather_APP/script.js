const input = document.getElementById("inputBox");
const countryName = document.getElementById("countryName");
const stateName = document.getElementById("stateName");
const cityName = document.getElementById("cityName");
const humidity = document.getElementById("humidity");
const windSpeed = document.getElementById("windSpeed");
const Temp = document.getElementById("Temp");
const logoImage = document.getElementById("logoImage");
const weatherStatus = document.getElementById("weatherStatus");

//! api key = da0d03f0a14044d3aa6110017231102

// now function
const getData = async (eve) => {
  eve.preventDefault();
  if (!input.value) {
    alert("please Enter any value");
    return;
  }

  //
  const city = input.value;

  // fetch data from API
  const fetchData = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=da0d03f0a14044d3aa6110017231102&q=${city}`
  );

  // getting data
  const organizationDATA = await fetchData.json();
  let data = organizationDATA;
  //   console.log(data.location.name);

  // displaying the data in dom
  countryName.innerHTML = data.location.country;
  stateName.innerHTML = data.location.region;
  cityName.innerHTML = data.location.name;
  humidity.innerHTML = data.current.humidity;
  windSpeed.innerHTML = data.current.wind_kph;
  temprature.innerHTML = data.current.temp_c;
  logoImage.src = data.current.condition.icon;
  weatherStatus.innerHTML = data.current.condition.text;
};

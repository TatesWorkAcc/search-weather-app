import { useEffect, useState } from "react";

function WeatherApp() {
  const [city, setCity] = useState("New York");
  const [cityData, setCityData] = useState([]);
  const [cityText, setCityText] = useState(city);
  const [temp, setTemp] = useState();
  const [condition, setCondition] = useState("");
  const [humidity, setHumidity] = useState("");

  const apikey = "cdd4092d218d6552c31cd36150f70f4f";
  const api = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apikey}`;

  useEffect(() => {
    fetch(api)
      .then((res) => {
        if (res.ok) {
          console.log("SUCCESS");
        } else {
          console.log("FAILED");
        }
        return res.json();
      })
      .then((data) => {
        if (data && data.list) {
          setCityData(data.list);
          setTemp((data.list[0].main.temp - 273.15) * (9 / 5) + 32);
          setCondition(data.list[0].weather[0].description);
          setHumidity(data.list[0].main.humidity);
        }
        console.log(data);
      })
      .catch((error) => console.log(error));
  }, []);

  function handleWeatherSearch() {
    fetch(api)
      .then((res) => {
        if (res.ok) {
          console.log("SUCCESS");
        } else {
          console.log("FAILED");
        }
        return res.json();
      })
      .then((data) => {
        if (data && data.list) {
          setCityData(data.list);
          setTemp((data.list[0].main.temp - 273.15) * (9 / 5) + 32);
          setCondition(data.list[0].weather[0].description);
          setHumidity(data.list[0].main.humidity);
        }
        console.log(data);
      })
      .catch((error) => console.log(error));
  }

  return (
    <div className="weatherapp-conatiner">
      <div className="main-data">
        <h1>{cityText}</h1>
        <h1>{temp}</h1>
        <h1>{condition}</h1>
        <h1>{humidity}</h1>
        <input value={city} onChange={(e) => setCity(e.target.value)}></input>
        <button onClick={handleWeatherSearch}>Search</button>
      </div>
      <div className="day-grid">
        <div className="weather-grid"></div>
        <div className="weather-grid"></div>
        <div className="weather-grid"></div>
        <div className="weather-grid"></div>
        <div className="weather-grid"></div>
      </div>
    </div>
  );
}

export default WeatherApp;

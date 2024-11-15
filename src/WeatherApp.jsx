import { useEffect, useState } from "react";

function WeatherApp() {
  const [city, setCity] = useState("New York");
  const [cityText, setCityText] = useState(city);
  const [temp, setTemp] = useState();
  const [condition, setCondition] = useState("");
  const [description, setDescription] = useState("");
  const [humidity, setHumidity] = useState("");

  //   grid data

  const [temp2, setTemp2] = useState();
  const [condition2, setCondition2] = useState("");
  const [description2, setDescription2] = useState("");
  const [humidity2, setHumidity2] = useState("");

  const [temp3, setTemp3] = useState();
  const [condition3, setCondition3] = useState("");
  const [description3, setDescription3] = useState("");
  const [humidity3, setHumidity3] = useState("");

  const [temp4, setTemp4] = useState();
  const [condition4, setCondition4] = useState("");
  const [description4, setDescription4] = useState("");
  const [humidity4, setHumidity4] = useState("");

  const [temp5, setTemp5] = useState();
  const [condition5, setCondition5] = useState("");
  const [description5, setDescription5] = useState("");
  const [humidity5, setHumidity5] = useState("");

  const [temp6, setTemp6] = useState();
  const [condition6, setCondition6] = useState("");
  const [description6, setDescription6] = useState("");
  const [humidity6, setHumidity6] = useState("");

  const d2 = new Date();
  d2.setDate(d2.getDate() + 1);
  const day2 = d2.toLocaleString("en-US", { weekday: "long" });

  const d3 = new Date();
  d3.setDate(d3.getDate() + 2);
  const day3 = d3.toLocaleString("en-US", { weekday: "long" });

  const d4 = new Date();
  d4.setDate(d4.getDate() + 3);
  const day4 = d4.toLocaleString("en-US", { weekday: "long" });

  const d5 = new Date();
  d5.setDate(d5.getDate() + 4);
  const day5 = d5.toLocaleString("en-US", { weekday: "long" });

  const d6 = new Date();
  d6.setDate(d6.getDate() + 5);
  const day6 = d6.toLocaleString("en-US", { weekday: "long" });

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
          // main data
          setCityText(data.city.name);
          setTemp(Math.floor((data.list[0].main.temp - 273.15) * (9 / 5) + 32));
          setCondition(data.list[0].weather[0].main);
          setDescription(data.list[0].weather[0].description);
          setHumidity(data.list[0].main.humidity);

          // 5 day data 8, 16, 24, 32, 40

          setTemp2(
            Math.floor((data.list[8].main.temp - 273.15) * (9 / 5) + 32),
          );
          setCondition2(data.list[8].weather[0].main);
          setDescription2(data.list[8].weather[0].description);
          setHumidity2(data.list[8].main.humidity);

          setTemp3(
            Math.floor((data.list[16].main.temp - 273.15) * (9 / 5) + 32),
          );
          setCondition3(data.list[16].weather[0].main);
          setDescription3(data.list[16].weather[0].description);
          setHumidity3(data.list[16].main.humidity);

          setTemp4(
            Math.floor((data.list[24].main.temp - 273.15) * (9 / 5) + 32),
          );
          setCondition4(data.list[24].weather[0].main);
          setDescription4(data.list[24].weather[0].description);
          setHumidity4(data.list[24].main.humidity);

          setTemp5(
            Math.floor((data.list[32].main.temp - 273.15) * (9 / 5) + 32),
          );
          setCondition5(data.list[32].weather[0].main);
          setDescription5(data.list[32].weather[0].description);
          setHumidity5(data.list[32].main.humidity);

          setTemp6(
            Math.floor((data.list[39].main.temp - 273.15) * (9 / 5) + 32),
          );
          setCondition6(data.list[39].weather[0].main);
          setDescription6(data.list[39].weather[0].description);
          setHumidity6(data.list[39].main.humidity);

          setCity("");
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
          // main data
          setCityText(data.city.name);
          setTemp(Math.floor((data.list[0].main.temp - 273.15) * (9 / 5) + 32));
          setCondition(data.list[0].weather[0].main);
          setDescription(data.list[0].weather[0].description);
          setHumidity(data.list[0].main.humidity);

          // 5 day data

          setTemp2(
            Math.floor((data.list[8].main.temp - 273.15) * (9 / 5) + 32),
          );
          setCondition2(data.list[8].weather[0].main);
          setDescription2(data.list[8].weather[0].description);
          setHumidity2(data.list[8].main.humidity);

          setTemp3(
            Math.floor((data.list[16].main.temp - 273.15) * (9 / 5) + 32),
          );
          setCondition3(data.list[16].weather[0].main);
          setDescription3(data.list[16].weather[0].description);
          setHumidity3(data.list[16].main.humidity);

          setTemp4(
            Math.floor((data.list[24].main.temp - 273.15) * (9 / 5) + 32),
          );
          setCondition4(data.list[24].weather[0].main);
          setDescription4(data.list[24].weather[0].description);
          setHumidity4(data.list[24].main.humidity);

          setTemp5(
            Math.floor((data.list[32].main.temp - 273.15) * (9 / 5) + 32),
          );
          setCondition5(data.list[32].weather[0].main);
          setDescription5(data.list[32].weather[0].description);
          setHumidity5(data.list[32].main.humidity);

          setTemp6(
            Math.floor((data.list[39].main.temp - 273.15) * (9 / 5) + 32),
          );
          setCondition6(data.list[39].weather[0].main);
          setDescription6(data.list[39].weather[0].description);
          setHumidity6(data.list[39].main.humidity);

          setCity("");
        }
        console.log(data);
      })
      .catch((error) => console.log(error));
  }

  return (
    <div className="weatherapp-conatiner">
      <div className="main-data">
        <h1 className="main-text">Today</h1>
        <h1 className="main-text">{cityText}</h1>
        <h1 className="main-text">{temp}°</h1>
        <h1 className="main-text">{condition}</h1>
        <h1 className="main-text">{description}</h1>
        <h1 className="main-text">{humidity} Humidity</h1>
        <input value={city} onChange={(e) => setCity(e.target.value)}></input>
        <button onClick={handleWeatherSearch}>Search</button>
      </div>
      <div className="day-grid">
        <div className="weather-grid">
          <h3>{day2}</h3>
          <h3>{temp2}°</h3>
          <h3>{condition2}</h3>
          <h3>{description2}</h3>
          <h3>{humidity2} Humidity</h3>
        </div>
        <div className="weather-grid">
          <h3>{day3}</h3>
          <h3>{temp3}°</h3>
          <h3>{condition3}</h3>
          <h3>{description3}</h3>
          <h3>{humidity3} Humidity</h3>
        </div>
        <div className="weather-grid">
          <h3>{day4}</h3>
          <h3>{temp4}°</h3>
          <h3>{condition4}</h3>
          <h3>{description4}</h3>
          <h3>{humidity4} Humidity</h3>
        </div>
        <div className="weather-grid">
          <h3>{day5}</h3>
          <h3>{temp5}°</h3>
          <h3>{condition5}</h3>
          <h3>{description5}</h3>
          <h3>{humidity5} Humidity</h3>
        </div>
        <div className="weather-grid">
          <h3>{day6}</h3>
          <h3>{temp6}°</h3>
          <h3>{condition6}</h3>
          <h3>{description6}</h3>
          <h3>{humidity6} Humidity</h3>
        </div>
      </div>
    </div>
  );
}

export default WeatherApp;

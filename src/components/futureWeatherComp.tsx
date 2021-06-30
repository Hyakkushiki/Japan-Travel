import React, { useEffect } from "react";
import './weatherComp.css';

interface Props {
  dailyObj?: any;
  description?: string;
  temperature?: number;
  icon?: string;
}
interface cityType {
  lat: number | null | undefined;
  lng: number | null | undefined;
  name: string | undefined;
  weather?: weatherType | null;
}
interface city {
  // Tokyo: cityType | null;
  [key: string]: cityType;
}
interface weatherType {
  description: string | undefined;
  icon: string | undefined;
  temp: number | null;
  city: string | undefined;
}

const WEATHER_API_KEY = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;

function FutureWeatherComp(props: Props) {
  const [error, setError] = React.useState<any>(null);
  const [isAPILoading, setAPILoading] = React.useState(true);
  const [apiWeathers, setApiWeathers] = React.useState<any[]>([]);
  const [currentWeather, setCurrentWeather] = React.useState<any[]>([]);
  const [dailyWeather, setDailyWeather] = React.useState<any[]>([]);

  useEffect(() => {
    // oneCallForecast(35.689499, 139.691711);
  }, [])

  function oneCallForecast(lat: number, lng: number) {
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&exclude=minutely,hourly,alerts&units=metric&&appid=${WEATHER_API_KEY}`)
      .then(res => res.json())
      .then(
        (result) => {
          setApiWeathers(result);
          setCurrentWeather(result.current);
          setDailyWeather(result.daily);
          setAPILoading(false);

          console.log(result);
          console.log("weather component");
          console.log(currentWeather);
          console.log(dailyWeather);

          // setSortedDailyWeather(apiWeathers.map((datas) => {
          //   datas.sys.dt_txt
          // }));
          
        },
        (error) => {
          setAPILoading(true);
          setError(error);
        }
      )

      // console.log("weather component function");
      // setDailyWeather(dailyWeather);
      // dailyWeather.map((dw) => {
      //   console.log(dw.temp.day);
      // });
  }

  useEffect(() => {
    console.log("futureweather comp");
    console.log(props.dailyObj);
    console.log(props.description);
  });

  return (
  <div className="uber-container">

    <div className="future-weather">
      <div className="weather-forecast" id="weather-forecast">
        
        {error ? <p>{error.message}</p> : null}
        {
          <div className="forecast-day">
            <div className="day">Tue</div>
            <img src="http://openweathermap.org/img/wn/10d@2x.png" alt="weather icon" className="w-icon"></img>
            <div className="discription">{props.description}</div>
            {/* <div className="discription">{props.dailyObj.weather[0].description}</div> */}
            <div className="temp">{props.temperature}&deg; C</div>
            {/* <div className="temp">{dw.temp.day}-&deg; C</div> */}
          </div>
        }

      </div>
    </div>
</div>
  );
}

export default FutureWeatherComp;
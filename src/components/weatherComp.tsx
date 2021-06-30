import './weatherComp.css';
import { cityType, foursquareType} from "../interfaces";
import FoursquareComp from "./foursquareComp";
import { useEffect } from 'react';

interface Props {
  city: cityType;
  foursquareObj: foursquareType[];
  weatherObj?: any;
  description?: string;
  temperature?: number;
  icon?: string;
}

function WeatherComp(props: Props) {
  useEffect(() => {
    // console.log("weather comp");
    // console.log(props.city.foreCast);
    // console.log(props.foursquareObj);
  });

  return (
  <div className="uber-container">

    <div className="top-container">
      <div className="current-weather-time">
          <div className="date-container">
              <div className="time"> {props.city.weather.time} </div>
              {/* <div className="date"> Monday, 25 May </div> */}
              <div className="others">Asia/Tokyo, JP</div>
          </div>

          <div className="date-weather-container">
            <div className="city-name"> {props.city.weather.city} </div>
            <img src={'http://openweathermap.org/img/wn/' + props.city.weather.icon + '@2x.png'} alt="icon"></img>
            <div className="other">
                <div className="description">{props.city.weather.description}</div>
                <div className="temp">Temperature: {props.city.weather.temp}&deg; C</div>
            </div>
            {/* <div className="day">{props.city.weather.date}日</div> */}
          </div>

      </div>
    </div>
    
    <div className="mid-container">
      <div className="foursquare">
        {props.city.foreCast.length > 1 ? (
          <div className="foursquare-places">
            
            <div className="place">
                <div className="date">{props.foursquareObj[0].name}</div>
                <img src={props.foursquareObj[0].icon + '64.png'} alt="icon"></img>
                <div className="description">Addrs: {props.foursquareObj[0].address}</div>
                <div className="temp">{props.foursquareObj[0].cat}</div>
            </div>
            <div className="place">
                <div className="date">{props.foursquareObj[1].name}</div>
                <img src={props.foursquareObj[1].icon + '64.png'} alt="icon"></img>
                <div className="description">Addrs: {props.foursquareObj[1].address}</div>
                <div className="temp">{props.foursquareObj[1].cat}</div>
            </div>
            <div className="place">
                <div className="date">{props.foursquareObj[2].name}</div>
                <img src={props.foursquareObj[2].icon + '64.png'} alt="icon"></img>
                <div className="description">Addrs: {props.foursquareObj[2].address}</div>
                <div className="temp">{props.foursquareObj[2].cat}</div>
            </div>
            <div className="place">
                <div className="date">{props.foursquareObj[3].name}</div>
                <img src={props.foursquareObj[3].icon + '64.png'} alt="icon"></img>
                <div className="description">Addrs: {props.foursquareObj[3].address}</div>
                <div className="temp">{props.foursquareObj[3].cat}</div>
            </div>
            <div className="place">
                <div className="date">{props.foursquareObj[4].name}</div>
                <img src={props.foursquareObj[4].icon + '64.png'} alt="icon"></img>
                <div className="description">Addrs: {props.foursquareObj[4].address}</div>
                <div className="temp">{props.foursquareObj[4].cat}</div>
            </div>
            
          </div>
          ) : <div>Select a City</div>
        }
      </div>
    </div>
    
  <div className="bottom-container">
    <div className="future-weather">
      {props.city.foreCast.length > 1 ? (
        <div className="weather-forecast">
          
          <div className="forecast-day">
              <div className="date">{props.city.foreCast[0].date}日</div>
              <img src={'http://openweathermap.org/img/wn/' + props.city.foreCast[0].icon + '@2x.png'} alt="icon"></img>
              <div className="description">{props.city.foreCast[0].description}</div>
              <div className="temp">{props.city.foreCast[0].temp}&deg; C</div>
          </div>
          <div className="forecast-day">
              <div className="date">{props.city.foreCast[1].date}日</div>
              <img src={'http://openweathermap.org/img/wn/' + props.city.foreCast[1].icon + '@2x.png'} alt="icon"></img>
              <div className="description">{props.city.foreCast[1].description}</div>
              <div className="temp">{props.city.foreCast[1].temp}&deg; C</div>
          </div>
          <div className="forecast-day">
              <div className="date">{props.city.foreCast[2].date}日</div>
              <img src={'http://openweathermap.org/img/wn/' + props.city.foreCast[2].icon + '@2x.png'} alt="icon"></img>
              <div className="description">{props.city.foreCast[2].description}</div>
              <div className="temp">{props.city.foreCast[2].temp}&deg; C</div>
          </div>
          <div className="forecast-day">
              <div className="date">{props.city.foreCast[3].date}日</div>
              <img src={'http://openweathermap.org/img/wn/' + props.city.foreCast[3].icon + '@2x.png'} alt="icon"></img>
              <div className="description">{props.city.foreCast[3].description}</div>
              <div className="temp">{props.city.foreCast[3].temp}&deg; C</div>
          </div>
          <div className="forecast-day">
              <div className="date">{props.city.foreCast[4].date}日</div>
              <img src={'http://openweathermap.org/img/wn/' + props.city.foreCast[4].icon + '@2x.png'} alt="icon"></img>
              <div className="description">{props.city.foreCast[4].description}</div>
              <div className="temp">{props.city.foreCast[4].temp}&deg; C</div>
          </div>
          
        </div>
        ) : <div>Select a City</div>
      }
    </div>
  </div>
    
</div>
  );
}

export default WeatherComp;
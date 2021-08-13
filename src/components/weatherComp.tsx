import './weatherComp.css';
import { CityType } from "../interfaces";
import { useEffect } from 'react';
import MainInfoBox from './MainInfoBox';

interface Props {
  city: CityType;
}

function WeatherComp(props: Props) {
  useEffect(() => {
    console.log('child props: ... ');
    console.log(props);
  });

  return (
  <div className="uber-container">

    <div className="top-container">
      {/* <MainInfoBox /> */}
      {/* <div className="current-weather-time">
          <div className="date-container">
              { !!props.city.currWeather ? (<div className="time"> {props.city.currWeather.time} </div>)
              : <div></div> }
              
              <div className="others">Asia/Tokyo, JP</div>
          </div>

          {!!props.city.currWeather ? (
          <div className="date-weather-container">
            <div className="city-name"> {props.city.currWeather.city} </div>
            <img src={'http://openweathermap.org/img/wn/' + props.city.currWeather.icon + '@2x.png'} alt="icon"></img>
            <div className="other">
                <div className="description">{props.city.currWeather.description}</div>
                <div className="temp">Temperature: {props.city.currWeather.temp}&deg; C</div>
            </div>
            
          </div>
          ) : null
          }

      </div> */}
    </div>
    
    <div className="mid-container">
      <div className="foursquare">
        { !!props.city.foreCast && props.city.foreCast.length > 1 && !!props.city.foursquarePlaces? (
          <div className="foursquare-places">
            
            <div className="place">
                <div className="date">{props.city.foursquarePlaces[0].name}</div>
                <img src={props.city.foursquarePlaces[0].icon + '64.png'} alt="icon"></img>
                <div className="description">Addrs: {props.city.foursquarePlaces[0].address}</div>
                <div className="temp">{props.city.foursquarePlaces[0].cat}</div>
            </div>
            <div className="place">
                <div className="date">{props.city.foursquarePlaces[1].name}</div>
                <img src={props.city.foursquarePlaces[1].icon + '64.png'} alt="icon"></img>
                <div className="description">Addrs: {props.city.foursquarePlaces[1].address}</div>
                <div className="temp">{props.city.foursquarePlaces[1].cat}</div>
            </div>
            <div className="place">
                <div className="date">{props.city.foursquarePlaces[2].name}</div>
                <img src={props.city.foursquarePlaces[2].icon + '64.png'} alt="icon"></img>
                <div className="description">Addrs: {props.city.foursquarePlaces[2].address}</div>
                <div className="temp">{props.city.foursquarePlaces[2].cat}</div>
            </div>
            <div className="place">
                <div className="date">{props.city.foursquarePlaces[3].name}</div>
                <img src={props.city.foursquarePlaces[3].icon + '64.png'} alt="icon"></img>
                <div className="description">Addrs: {props.city.foursquarePlaces[3].address}</div>
                <div className="temp">{props.city.foursquarePlaces[3].cat}</div>
            </div>
            <div className="place">
                <div className="date">{props.city.foursquarePlaces[4].name}</div>
                <img src={props.city.foursquarePlaces[4].icon + '64.png'} alt="icon"></img>
                <div className="description">Addrs: {props.city.foursquarePlaces[4].address}</div>
                <div className="temp">{props.city.foursquarePlaces[4].cat}</div>
            </div>
            
          </div>
          ) : <div>Select a City</div>
        }
      </div>
    </div>
    
  <div className="bottom-container">
    <div className="future-weather">
      { !!props.city.foreCast && props.city.foreCast.length > 1 ? (
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
import React, { useEffect } from 'react';
import './App.css';
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import mapStyles from "./mapStyles";
import WeatherComp from "./components/weatherComp";
import FoursquareComp from "./components/foursquareComp";
import { cityType, city, weatherType, foreCast, foursquareType } from "./interfaces";

const libraries: any = ["places"];
const googleMapsApiKey: any = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
const mapContainerStyle = {
  height: "100vh",
  width: "100%", // "98.5vw",
};
const center = {
  lat: 38.6762,
  lng: 139.6503,
};
const options = {
  styles: mapStyles,
  disableDefaultUI: false,
  zoomControl: true,
};

declare global {
  interface Window {
      google:any;
  }
}

const WEATHER_API_KEY = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;
const emptyForeCast: foreCast[] = [{description: "blank", icon:  "blank", temp: 0, city:  "blank", date: 0}];
const emptyWeatherType: weatherType = {description: "blank", icon: "blank", date: 0,
  temp: 0, city: "blank", time: "blank"};

const foursquare = require('react-foursquare')({
  clientID: process.env.REACT_APP_FS_CLIENT_ID,
  clientSecret: process.env.REACT_APP_FS_CLIENT_SECRET  
});


function App() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey,
    libraries,
  });

  const [error, setError] = React.useState<any>(null);
  const [isWAPILoaded, setWAPIIsLoaded] = React.useState(false);
  const [apiWeathers, setApiWeathers] = React.useState<any[]>([]);
  const [fsItems, setFsItems] = React.useState<any[]>([]);
  const [cleanFSItems, setCleanFSItems] = React.useState<foursquareType[]>([]);

  useEffect(() => {
    oneCallForecast(35.689499, 139.691711);
    CallFourSquare(35.689499, 139.691711);
    
  }, [])

  function CallFourSquare(lat: number | null, lng: number | null) {
    var params = {
      "ll": `${lat},${lng}`,
      "query": ''
    };
    foursquare.venues.getVenues(params)
      .then((res: any)=> {
        setFsItems(res.response.venues);
        // console.log('foursquare here');
        // console.log(res.response.venues);
        // console.log(fsItems[0]);
      });
  }

  function oneCallForecast(lat: number | null, lng: number | null) {
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&exclude=minutely,hourly,alerts&units=metric&&appid=${WEATHER_API_KEY}`)
      .then(res => res.json())
      .then(
        (result) => {
          setApiWeathers(result);
          setWAPIIsLoaded(true);

          console.log(result);
          console.log("app component");
          
        },
        (error) => {
          setWAPIIsLoaded(false);
          setError(error);
        }
      )
  }


  const [ cities, setCities ] = React.useState<city>(
    { 
      Tokyo: { lat: 35.689499, lng: 139.691711, name: "Tokyo", weather: emptyWeatherType, foreCast: emptyForeCast },
      Yokohama: { lat: 35.447781, lng: 139.642502, name: "Yokohama", weather: emptyWeatherType, foreCast: emptyForeCast },
      Kyoto: { lat: 35.021069, lng: 135.753845, name: "Kyoto", weather: emptyWeatherType, foreCast: emptyForeCast },
      Osaka: { lat: 34.693741, lng: 135.502182, name: "Osaka", weather: emptyWeatherType, foreCast: emptyForeCast },
      Sapporo: { lat: 43.064171, lng: 141.346939, name: "Sapporo", weather: emptyWeatherType, foreCast: emptyForeCast },
      Nagoya: { lat: 35.181469, lng: 136.906403, name: "Nagoya", weather: emptyWeatherType, foreCast: emptyForeCast },
    },
    );
  
  const cityNames = Object.keys(cities);

  let [ selectedCity, setSelectedCity ] = React.useState<cityType>(
    {
    lat: 35.689499, lng: 139.691711, name: "Tokyo", weather: emptyWeatherType, foreCast: emptyForeCast
    }
  );

  if (loadError) return (<div>"Error"</div>);
  if (!isLoaded) return (<div>"Loading...."</div>);

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

    {/* <div>Error: {error !== null ? error.message : 'No errors, YAY!'}</div>
   
    {!isWAPILoaded ? <div>Loading...</div> : 
    <div>Finished Loading...:
    </div>}
    {apiWeathers.map((item) => {
        return(<h2>
          {item.name}
        </h2>)
      })} */}
    <div className="right-side">
      <WeatherComp city={selectedCity} foursquareObj={cleanFSItems}></WeatherComp>
    {/* <FoursquareComp foursquareObj={cleanFSItems}></FoursquareComp> */}
    </div>
    
    <div className="left-side">
      <GoogleMap mapContainerStyle={mapContainerStyle} zoom={6} center={center} options={options}>
      {cityNames.map((cStats) => (
          <Marker
            key={`${cities[cStats].lat}-${cities[cStats].lng}`}
            position={{ lat: cities[cStats].lat, lng: cities[cStats].lng }}
            onClick={() => {
              if (cities[cStats].foreCast[0].city === "blank" || cities[cStats].weather.city === "blank"
              || cleanFSItems[0].name === "") {
                CallFourSquare(cities[cStats].lat, cities[cStats].lng);
                oneCallForecast(cities[cStats].lat, cities[cStats].lng);
                {
                  cities[cStats] = {lat: cities[cStats].lat, lng: cities[cStats].lng, name: cities[cStats].name,
                  weather: fillWeather(apiWeathers, cities[cStats].name), foreCast: fillForecast(apiWeathers, cities[cStats].name)};
                  // cities[cStats].weather = fillWeather(apiWeathers, cities[cStats].name);
                  // cities[cStats].foreCast = fillForecast(apiWeathers, cities[cStats].name);
                  // cities[cStats].foursquarePlaces = fillFoursquare(fsItems);
                  // setCleanFSItems(fillFoursquare(fsItems));
                  
                }
                setCities(cities);
              }
              setCleanFSItems(fillFoursquare(fsItems));
              selectedCity = cities[cStats];
              setSelectedCity(selectedCity);
            }}
            icon={{
              url: "/city.svg",
              origin: new window.google.maps.Point(0, 0),
              anchor: new window.google.maps.Point(40, 30),
              scaledSize: new window.google.maps.Size(80, 60),
            }}
            label={cities[cStats].name}
            title={cities[cStats].name}
          />
        ))}

      {selectedCity.lat && cleanFSItems.length > 1 ? (
          <InfoWindow
            position={{ lat: selectedCity.lat, lng: selectedCity.lng }}
            onCloseClick={() => {
              setSelectedCity(selectedCity);
            }}
          >
            <div>
              <h2>{selectedCity.weather.city}</h2>

              <h2>{selectedCity.weather.temp} &deg;C</h2>
              <img src={'http://openweathermap.org/img/wn/' + selectedCity.weather.icon + '@2x.png'} alt="icon"></img>
              <p>{selectedCity.weather.description}</p>
            </div>
          </InfoWindow>
        ) : null}
      </GoogleMap>
      </div>
    </div>
  );
}

export default App;

function fillWeather(obj: any, name: string): weatherType {
  const element: weatherType = {description: obj.current.weather[0].description, icon: obj.current.weather[0].icon,
    temp: obj.current.temp, city: name, date: new Date(obj.current.dt*1000+(32400*1000)).getDate(),
    time: `${new Date((obj.current.dt*1000)+32400).getHours()}:  ${new Date((obj.current.dt*1000)+32400).getMinutes()}`};

  return element;
}
function fillForecast(obj: any, name: string): foreCast[] {
  let array: any = [];
  for (let i = 1; i < obj.daily.length; i++) {
    const ob = obj.daily[i];
    const element: foreCast = {description: ob.weather[0].description, icon: ob.weather[0].icon,
      temp: ob.temp.day, city: name, date: new Date((ob.dt*1000)+32400).getDate()};
    array.push(element);
  }

  return array;
}
function fillFoursquare(obj: any): foursquareType[] {
  // console.log('---here---');
  // console.log(obj);
  let array: any = [];
  for (let i = 0; i < 5; i++) {
    const ob = obj[i];
    const element: foursquareType = {
      name: ob.name, lat: ob.location.lat, lng: ob.location.lng, address: ob.location.address,
      icon: ob.categories[0].icon.prefix, cat: ob.categories[0].name,
      };
    array.push(element);
  }
  return array;
}

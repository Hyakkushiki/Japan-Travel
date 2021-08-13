import React from "react";
import { GoogleMap, Marker, InfoWindow, useLoadScript } from "@react-google-maps/api";
import { CityType, Coords, ForeCast, FoursquareType, WeatherType } from "../interfaces";
import { mapStyles } from "../mapStyles";
import WeatherBox from "./WeatherBox";
import { nanoid } from 'nanoid';
import { newCallFourSquare, OrigOneCallForecast } from "./apiCalls";
import _ from "lodash";

const libraries: any = ["places"];
const googleMapsApiKey: any = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
declare global {
  interface Window {
      google:any;
  }
}

interface PropsInterface {
  theCity: any;
}


export default function GoogleMapsHolder(props: PropsInterface) {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey,
    libraries,
  });
  
  const mapContainerStyle = {
    height: "93.5vh",
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

  const tokyoCoords: Coords = { lat: 35.689499, lng: 139.691711 };
  const startingCities: CityType[] = [ 
    { coords: { lat: 35.689499, lng: 139.691711 }, name: "Tokyo" },
    { coords: { lat: 35.447781, lng: 139.642502 }, name: "Yokohama" },
    { coords: { lat: 35.021069, lng: 135.753845 }, name: "Kyoto" },
    { coords: { lat: 34.693741, lng: 135.502182 }, name: "Osaka" },
    { coords: { lat: 43.064171, lng: 141.346939 }, name: "Sapporo" },
    { coords: { lat: 35.181469, lng: 136.906403 }, name: "Nagoya" },
  ];

  // const [error, setError] = React.useState<any>(null);
  const [ citiesList, setCitiesList ] = React.useState<CityType[]>(startingCities);
  const [ selectedCity, setSelectedCity ] = React.useState<CityType>({} as CityType);
  const [apiWeathers, setApiWeathers] = React.useState<WeatherType>({} as WeatherType);
  const [apiForecast, setApiForecast] = React.useState<ForeCast[]>([]);
  const [foursquareItems, setFoursquareItems] = React.useState<FoursquareType[]>({} as FoursquareType[]);


  React.useEffect(() => {
    console.log('selected city has changed');
    console.log(selectedCity);

    if (!_.isEmpty(selectedCity)) {
      selectedCity.currWeather = apiWeathers;
      selectedCity.foreCast = apiForecast;
      selectedCity.foursquarePlaces = foursquareItems;

      props.theCity(selectedCity);
    }
    
  }, [selectedCity]);

  React.useEffect(() => {
    if(citiesList.length > 7) {
      const p = citiesList.pop();
    }
    console.log(selectedCity);
  }, [citiesList]);

async function oneCallForecast(coords: Coords | null) {
  const weatherObjPromise = OrigOneCallForecast(coords, null);
    // console.log(weatherObjPromise);

    const baba = await weatherObjPromise.then(
      (result) => {
        console.log(result.weatherType);
        console.log('oneCallForecast');
        if (!!result.weatherType && !!result.foreCast) {
          setApiWeathers(result.weatherType);
          setApiForecast(result.foreCast);
          
        }
        return result.foreCast;
      });
      return baba;
}

async function callFourSquare(coords: Coords, query?: string, locale?: string) {
  const fSObjPromise = newCallFourSquare(coords, query, locale);
  const fsCall = await fSObjPromise
  .then((result) => {
    setFoursquareItems(result);
    return result;
  });
  console.log('fsCall value: ');
  console.log(fsCall);
  
  // await setFoursquareItems(fsCall);
  return fsCall;
}

  const onMapClicked = React.useCallback((event) => {
    console.log('onMapClicked func is called!');
    console.log({lat: event.latLng.lat(), lng: event.latLng.lng()});
    // setCitiesList(... citiesList, selectedCity);
    const city = {} as CityType;
    city.name = "user";
    city.coords = {lat: event.latLng.lat(), lng: event.latLng.lng()};
     setCitiesList(startingCities.concat(city));
  }, []);


  const mapRef = React.useRef(); // state will rerender, changing ref will not rerender
  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map;
  },[]);

  if (loadError) return (<div>"Error"</div>);
  if (!isLoaded) return (<div>"Loading...."</div>);
  return (
    <GoogleMap mapContainerStyle={mapContainerStyle} zoom={6} center={center}
      options={options} onLoad={onMapLoad} onClick={onMapClicked}>
            {citiesList.map((preCity) => (
                <Marker
                  key={nanoid()}
                  position={ preCity.coords }
                  icon={{
                    origin: new window.google.maps.Point(0, 0),
                    anchor: new window.google.maps.Point(40, 30),
                    scaledSize: new window.google.maps.Size(80, 60),
                  }}
                  opacity={ preCity.name === 'user' ? 1 : 0.5}
                  // label={cities[cStats].name}
                  title={preCity.name}

                  onClick={async () => {
                    await oneCallForecast(preCity.coords); // check if objects are empty or amount of time passed bfore called api again
                    await callFourSquare(preCity.coords); // ^ same
 
                    setSelectedCity(preCity);

                    const newCitisArray: CityType[] = citiesList.map((obj) => {
                      if (obj.coords === preCity.coords) {
                        obj = preCity;
                      }
                      return obj;
                    });

                    setCitiesList(newCitisArray);
                  }}
                  
                />
              ))}

            { !!selectedCity && !_.isEmpty(selectedCity.currWeather) ? (
                <InfoWindow
                  position={ selectedCity.coords }
                  onCloseClick={() => {
                    setSelectedCity({} as CityType);
                  }}
                >
                  <div>
                    <WeatherBox { ...apiWeathers } />
                  </div>
                </InfoWindow>
              ) : (<div> Hello Joe </div>)}
            </GoogleMap>
  );
}

// 210
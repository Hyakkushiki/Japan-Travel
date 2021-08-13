import axios from "axios";
import { WeatherType, Coords, ForeCast, WeatherBlend, FoursquareType } from "../interfaces";
const WEATHER_API_KEY = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;

export async function OrigOneCallForecast(coords: Coords | null, town: string | null): Promise<WeatherBlend> {
  const API_ENDPOINT = 'https://api.openweathermap.org/data/2.5/onecall';
  const EXCLUDED_DATA = 'exclude=minutely,hourly,alerts';
  let result: any;
  let ct = town === null ? "" : town;

  if (coords != null) {
        result = await fetch(`${API_ENDPOINT}?lat=${coords.lat}&lon=${coords.lng}&
        ${EXCLUDED_DATA}&units=metric&&appid=${WEATHER_API_KEY}`)
        .then(res => res.json())
        .then(
          (result) => {
            // setApiWeathers(result);
            // setWAPIIsLoaded(true);
            
            console.log("api call result: ");
            console.log(result);
            
            const nowWether = fillWeather(result, ct);
            // console.log(nowWether);
            const futureWether = fillForecast(result, ct);
            const wb: WeatherBlend = { weatherType: nowWether, foreCast: futureWether };

            return wb;
          },
          (error) => {
            // setWAPIIsLoaded(false);
            // setError(error);
            console.log("error triggered");
            console.log("error: " + error);
            return {} as WeatherBlend;
          }
        )
      } else {
      console.log("null coords were fed into weather api call");
      return {} as WeatherBlend;
  }
  return result;
};

  function fillWeather(obj: any, name?: string): WeatherType {
    const element: WeatherType = !!name? {description: obj.current.weather[0].description, icon: obj.current.weather[0].icon,
      temp: obj.current.temp, city: name, date: new Date(obj.current.dt*1000+(32400*1000)).getDate(),
      time: `${new Date((obj.current.dt*1000)+32400).getHours()}:  ${new Date((obj.current.dt*1000)+32400).getMinutes()}`}
      : {description: obj.current.weather[0].description, icon: obj.current.weather[0].icon,
        temp: obj.current.temp, date: new Date(obj.current.dt*1000+(32400*1000)).getDate(),
        time: `${new Date((obj.current.dt*1000)+32400).getHours()}:  ${new Date((obj.current.dt*1000)+32400).getMinutes()}`};
  
    return element;
  }
  function fillForecast(obj: any, name: string): ForeCast[] {
    let array: any = [];
    for (let i = 1; i < obj.daily.length; i++) {
      const ob = obj.daily[i];
      const element: ForeCast = {description: ob.weather[0].description, icon: ob.weather[0].icon,
        temp: ob.temp.day, city: name, date: new Date((ob.dt*1000)+32400).getDate()};
      array.push(element);
    }
  
    return array;
  }


  export async function newCallFourSquare(coords: Coords, query?: string, locale?: string): Promise<FoursquareType[]> {
    const endPoint = !!query ? 'https://api.foursquare.com/v2/venues/search?' : 'https://api.foursquare.com/v2/venues/explore?';
    const params = {
      client_id: !!process.env.REACT_APP_FS_CLIENT_ID ? process.env.REACT_APP_FS_CLIENT_ID : 'undefined',
      client_secret: !!process.env.REACT_APP_FS_CLIENT_SECRET ? process.env.REACT_APP_FS_CLIENT_SECRET : 'undefined',
      ll: `${coords.lat},${coords.lng}`,
      query: !!query ? query : '',
      radius: '10000',
      limit: '5',
      v: '20210101',
      locale: !!locale ? locale : 'en',
    };

    let retrunObj: FoursquareType[];
  
    retrunObj = await axios.get(endPoint + new URLSearchParams(params))
    .then(response => {
      const transformedData = fillFoursquare(response);
      return transformedData;
    }).catch((error=>{
        console.log('axios get call error');
        console.log(error);
        return {} as FoursquareType[];
      }));

      return retrunObj;
  }

  function fillFoursquare(object: any): FoursquareType[] {
    let array: any = [];
    const odr = object.data.response;
    const obj = !!odr.venues ? odr.venues : odr.groups[0].items; // for explore case const ob = obj.data.response.venues;
    obj.map((ob: any) => {
      let element: FoursquareType = !!odr.venues ?
            {
            name: ob.name, address: ob.location.address,
            coords: { lat: ob.location.lat, lng: ob.location.lng },
            icon: ob.categories[0].icon.prefix, cat: ob.categories[0].name,
            }
            : {
              name: ob.venue.name, address: ob.venue.location.address,
              coords: { lat: ob.venue.location.lat, lng: ob.venue.location.lng },
              icon: ob.venue.categories[0].icon.prefix, cat: ob.venue.categories[0].name,
              };
          array.push(element);

          return element;
    });
    return array;
  }

import React from 'react';
import './App.css';
// import cityIcon from './assets/city.svg';
import { Tabs, Tab } from 'react-bootstrap';
import GoogleMapsHolder from './components/GoogleMapsHolder';
import WeatherComp from './components/weatherComp';
import { cityType } from './interfaces';


function App() {
  const [ currCity, setCurrCity ] = React.useState<cityType>({} as cityType);

  React.useEffect(() => {
    console.log('Parent Effect fired ....');
    console.log(currCity);
  },[currCity]);

  const sendDataToParent = (citi: cityType) => {
    console.log('sendDataToParent callback fired ....');
    console.log(citi);
    setCurrCity(citi);
    // return index;
  };

  return (
    <div className="App">
      <Tabs defaultActiveKey="map" id="uncontrolled-tab-example" className="tabber">
        <Tab eventKey="map" title="Map" className="">
        <div className="left-side">
          <GoogleMapsHolder theCity={sendDataToParent} />
        </div>
            
        </Tab>
        <Tab eventKey="info" title="Info">
          <div className="right-side">
            <WeatherComp city={currCity}></WeatherComp>
          </div>
        </Tab>
      </Tabs>

    {/* <div>Error: {error !== null ? error.message : 'No errors, YAY!'}</div>
   
    {!isWAPILoaded ? <div>Loading...</div> : 
    <div>Finished Loading...:
    </div>}
    {apiWeathers.map((item) => {
        return(<h2>
          {item.name}
        </h2>)
      })} */}
    
    
    
    </div>
  );
}

export default App;

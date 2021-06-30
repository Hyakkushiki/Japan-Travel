import React, { useEffect } from "react";
import './weatherComp.css';
import { foursquareType } from "../interfaces";

interface Props {
  foursquareObj: foursquareType[];
  // city: cityType;
}

function FourSquareComp(props: Props) {
  // const [error, setError] = React.useState<any>(null);

  useEffect(() => {
    console.log("foursquare compnent comp");
    console.log(props.foursquareObj);
    
  });

  return (
    <div className="uber-container">
      <div className="foursquare-container">

        {!!props.foursquareObj && props.foursquareObj.length > 1 ? (
          <div className="foursquare-div">
            
            <div className="visit-place">
              <div className="date">{props.foursquareObj}日</div>
                <div className="date">{props.foursquareObj}日</div>
                <img src={'http://openweathermap.org/img/wn/' + props.foursquareObj + '@2x.png'} alt="icon"></img>
                <div className="description">{props.foursquareObj}</div>
                <div className="temp">{props.foursquareObj}&deg; C</div>
            </div>


            
            
          </div>
          ) : <div>Foursquare Places</div>
        }

        </div>
    </div>
  );
}

export default FourSquareComp;
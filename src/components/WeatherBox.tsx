import { Card, Container } from "react-bootstrap";
import { weatherType } from "../interfaces";


export default function WeatherBox(props: weatherType) {

  return (
    <Container
      // fluid
      style={{
        // width: "100%",
        // height: "100%",
        background: "rgb(200, 0, 0, 0.8)"
      }}
      className="p-1 info-box"
    >
      <Card border="light">
        <Card.Body>
          <Card.Title
            className="date"
            // style={{
            //   width: "30%",
            //   color: "white",
            //   background: "#3c3c44",
            //   padding: "5px 15px"
            // }}
          >
            {props.date}日
          </Card.Title>
          <Card.Img
            variant="top"
            // src={props.icon}
            src={'http://openweathermap.org/img/wn/' + props.icon + '@2x.png'}
            // style={{ border: "1px solid #ddd" }}
          />
          <small className="text-muted description">
            {props.description}
          </small>
          <Card.Text> {props.temp}&deg; C </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
}

import { Card, Col, Container, Row } from "react-bootstrap";
// import "./InfoGroup.css";

interface Datas {
  date: string;
  img: string;
  description: string;
  temp: string;
}

export default function MainInfoBox() {
  // const [weather, setWeather] = useState<any>({});

  // useEffect(() => {
  //   setWeather({ ...mockWeatherData });
  // }, []);

  return (
    <Container
      fluid
      style={{
        // width: "100%",
        // height: "100%",
        background: "rgb(0, 0, 0, 0.3)"
      }}
      className="p-1"
    >
      <Row
        xs={1}
        md={1}
        // className="g-4"
        style={{
          background: "rgb(0, 0, 200, 0.4)"
        }}
      >
        <Col xs={1} md={1}>
        </Col>
        <Col xs={10} md={10}>
          <Card
            className="main-info-box"
            border="light"
            style={
              {
                // width: "100%",
                // height: "100%",
                // background: "rgb(0, 0, 0, 0.3)"
              }
            }
          >
          <Row>
            <Col xs={6}>
              <Row>
              <Card.Body>
              <Card.Title
                  className="city"
                  // style={{
                  //   width: "30%",
                  //   color: "white",
                  //   background: "#3c3c44",
                  //   padding: "5px 15px"
                  // }}
                >
                  {"Yokohama"}
                </Card.Title>
                </Card.Body>
              </Row>
              <Row>
                <Card.Title className="time">{"10:55"}</Card.Title>
              </Row>
              {/* <small className="description">{"Asia/Tokyo, JP"}</small> */}
            </Col>
            <Col xs={6}>
              <Card.Body>
                <Card.Title>
                  <Card.Img
                    className="weather-icon"
                    variant="top"
                    src={"http://openweathermap.org/img/wn/01d@2x.png"}
                    // style={{ width: "50%", height: "50%", border: "1px solid #ddd" }}
                  />
                </Card.Title>
              </Card.Body>
              <Card.Text> {10}&deg; C </Card.Text>
            </Col>
          </Row>
        </Card>
        </Col>
        <Col xs={1} md={1}>
        </Col>
        
      </Row>
    </Container>
  );
}

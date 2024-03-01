import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAudios } from "./app/musicSlice";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  Image,
  Row,
} from "react-bootstrap";
import { faCompactDisc, faMusic } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  const dispatch = useDispatch();
  const { host } = useSelector((state) => state.music);

  const getSound = () => {
    dispatch(getAudios(host));
  };

  console.log(host);

  return (
    <div className="music_div" style={{ color: "silver" }}>
      <Container className="music_container" style={{ textAlign: "center" }}>
        <Row className="d-flex flex-row justify-content-center">
          <Col md={4}>
            <Card className="music_card">
              <h3>
                MUSIC<span>APP</span>
              </h3>
              <Col md={5}>
                <Card className="music_cards mb-2">
                  <FontAwesomeIcon
                    icon={faCompactDisc}
                    style={{ fontSize: "6em" }}
                    className="rotating-icon"
                  />
                  <FontAwesomeIcon
                    icon={faMusic}
                    style={{ fontSize: "1em" }}
                    className="music_icon mt-1"
                  />
                </Card>
              </Col>

              <Button onClick={getSound} className="music_btn  mb-2">
                Play Audio
              </Button>
              {host && host.ads && (
                <>
                  <h6>
                    Country: <span>{host.ads.country}</span>
                  </h6>
                  {host.hosts && (
                    <>
                      <h6>
                        Stream: <span>{host.hosts.stream}</span>
                      </h6>
                      <div>
                        Images: <span>{host.hosts.images}</span>
                      </div>
                    </>
                  )}
                </>
              )}
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;

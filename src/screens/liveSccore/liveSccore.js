import { useContext, useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import poolsContext from "../../context/pools/poolsContext";
import axios from "axios";
import "./liveSccore.css";

const LiveScore = ({
  match: {
    params: { match_id, set },
  },
  ...props
}) => {
  const [matchDetails, setmatchDetails] = useState();
  const getLiveScoreDetail = (match_id, set) => {
    axios
      .get(
        `${process.env.REACT_APP_BASE_URL2}/getTeamLiveScore?match_id=${match_id}&set=${set}`
      )
      .then((response) => {
        if (response.status === 200) {
          setmatchDetails(response.data.liveScore);
        }
      })
      .catch((err) => {
        console.log({ err });
      });
  };
  useEffect(() => {
    getLiveScoreDetail(match_id, set);
    const timer = setInterval(() => {
      getLiveScoreDetail(match_id, set);
    }, 2000);
    return () => clearInterval(timer);
  }, []);
  return (
    <Container
      fluid
      className="container-fluid p-5"
      style={{ position: "relative", zIndex: 1000 }}
    >
      <h4>Game ScoreSheet</h4>
      <Row>
        <Col xs={6}>
          <div className="scoresheet-col">
            <h5>{matchDetails?.team1_name}</h5>
            <h2 className="mb-0 text-center">
              {matchDetails && matchDetails?.team1_score}
            </h2>
          </div>
        </Col>
        <Col xs={6}>
          <div className="scoresheet-col">
            <h5>{matchDetails?.team2_name}</h5>
            <h2 className="mb-0 text-center">
              {matchDetails && matchDetails.team2_score}
            </h2>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default LiveScore;

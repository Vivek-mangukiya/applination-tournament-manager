import { useContext, useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import poolsContext from "../../context/pools/poolsContext";
import axios from "axios";
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
        `http://13.234.239.139/avp-laravel/public/index.php/api/getTeamLiveScore?match_id=${match_id}&set=${set}`
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
      className="container-fluid"
      style={{ position: "relative", zIndex: 1000 }}
    >
      <Row>
        <Col xs={6}>
          <div className="col">
            <h5>{matchDetails?.team1_name}</h5>
          </div>
          <div className="col">
            <h3>{matchDetails && matchDetails?.team1_score}</h3>
          </div>
        </Col>
        <Col xs={6}>
          <div className="col">
            <h5>{matchDetails?.team2_name}</h5>
          </div>
          <div className="col">
            <h3>{matchDetails && matchDetails.team2_score}</h3>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default LiveScore;

import { Container } from "reactstrap";
import "./PrivacyPolicy.css";

export const PrivacyPolicy = (props) => {
  return (
    <>
      <Container
        fluid
        id="sign-in"
        className="container-fluid"
        style={{ position: "relative", zIndex: 1000 }}
      >
        <div>
          <h3>Privacy Policy</h3>
        </div>
      </Container>
    </>
  );
};

import { Container } from "reactstrap";
import "./TermsAndConditions.css";

export const TermsAndConditions = (props) => {
  return (
    <>
      <Container
        fluid
        id="sign-in"
        className="container-fluid"
        style={{ position: "relative", zIndex: 1000 }}
      >
        <h3>Terms And Conditions</h3>
      </Container>
    </>
  );
};

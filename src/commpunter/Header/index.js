import "./index.css";
import { Button, Col, Row } from "antd";
// import Login from "../../pages/login";

const header = () => { 
  return (
    <>
      
      <Row>
        <Col span={12}></Col>
        <Col span={12} justify="center" align="end">
          <a href="../../pages/login/index.js"><Button>Login</Button></a>
          <Button href="../../pages/signin/index.js">Sign In</Button>
        </Col>
      </Row>
      
    </>
  );
};
export default header;

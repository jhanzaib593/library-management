import { Link } from "react-router-dom";
import "./index.css";
import { Button, Col, Row } from "antd";
// import Login from "../../pages/login";

const header = () => { 
   
  return (
    <>
      
      <Row>
        <Col span={12}></Col>
        <Col span={12} justify="center" align="end">
          <Link to="/">
          <Button>Login</Button>
          </Link>
          <Link to="/sign">
          <Button >Sign In</Button>
          </Link>
        </Col>
      </Row>
      
    </>
  );
};
export default header;

import { Link } from "react-router-dom";
import "./index.css";
import { Button, Col, Row } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../store/librarySlice";
// import Login from "../../pages/login";

const Header = () => {
  const user = useSelector((s) => s.user);
  const dispatch = useDispatch();
  return (
    <>
      <Row>
        <Col span={12}>Librar Management App</Col>

        <Col span={12} justify="center" align="end">
          {user ? (
            <Button
              onClick={() => {
                dispatch(logOut());
              }}
            >
              Layout
            </Button>
          ) : (
            <>
              <Link to="/">
                <Button>Login</Button>
              </Link>
              <Link to="/sign">
                <Button>Sign In</Button>
              </Link>
            </>
          )}
        </Col>
      </Row>
    </>
  );
};
export default Header;

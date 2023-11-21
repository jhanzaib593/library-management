import { useSelector } from "react-redux";
import "./index.css";
import { Button, Col, Row } from "antd";

const Showshelves = () => {
  const shelvelist = useSelector((s) => s.shelves);
  console.log(shelvelist,"shelvelist");
  return (
    <div>
      {shelvelist.map((t) => {
        return (
          <div key={t.id} className="book-wapper">
            <Row>
              <Col span={18}>
                <p>Author: {t.author}</p>
                <p>Shelve: {t.shelve}</p>
                <p>id: {t.id}</p>

              </Col>
              <Col span={6} className="bool-col">
                <Button>Edit</Button>
                <Button>Delete</Button>
              </Col>
            </Row>
          </div>
        );
      })}
    </div>
  );
};
export default Showshelves;

import { useSelector } from "react-redux";
import "./index.css";
import { Button, Col, Row } from "antd";

const Showauthor = () => {
  
  const booklist = useSelector((s) => s.authors);
  console.log(booklist);
  return (
    <div>
      {booklist.map((t) => {
        return (
          <div key={t.id} className="book-wapper">
            <Row>
              <Col span={18}>
                <p>Author: {t.author}</p>
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
export default Showauthor;

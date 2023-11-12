import { useSelector } from "react-redux";
import "./index.css";
import { Button, Col, Row } from "antd";

const Showbook = () => {
  const booklist = useSelector((s) => s.book);
  console.log(booklist);
  return (
    <div>
      {booklist.map((t) => {
        return (
          <div key={t.id} className="book-wapper">
            <Row>
              <Col span={18}>
                <p>{t.name}</p>
                <p>Author: {t.author}</p>
                <p>Shelve: {t.shelve}</p>
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
export default Showbook;

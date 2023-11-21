import { useDispatch, useSelector } from "react-redux";
import "./index.css";
import { Button, Col, Row } from "antd";
import { Bookdelete } from "../../../../store/librarySlice";

const Showbook = (prop) => {
  const dispatch = useDispatch();
  const detete = (useId) => {
    dispatch(Bookdelete(useId));
  };
  const booklist = useSelector((s) => s.book);

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
                <p>id: {t.id}</p>
              </Col>
              <Col span={6} className="bool-col">
                <Button
                  onClick={() => {
                    prop.editBook(t);
                  }}
                >
                  Edit
                </Button>
                <Button
                  onClick={() => {
                    detete(t.id);
                  }}
                >
                  Delete
                </Button>
              </Col>
            </Row>
          </div>
        );
      })}
    </div>
  );
};
export default Showbook;

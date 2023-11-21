import { Button, Form, Col, Modal, Row, Input } from "antd";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import "./index.css";
import { useDispatch } from "react-redux";
import { Bookedit, showBook } from "../../../store/librarySlice";
import Showbook from "./Showbook";

const Books = () => {
  const dispatch = useDispatch();

  const [visible, setVisible] = useState(false);
  const [editBooks, setEditBook] = useState("");
  const [form] = Form.useForm();

  const showModal = () => {
    setVisible(true);
  };

  const onFinish = (values) => {
    if (editBooks) {
      const update = {
        ...values,
        id: editBooks,
      };
      dispatch(Bookedit(update));
    } else {
      dispatch(showBook(values));
    }
    setVisible(false);
    form.resetFields();
    setEditBook("");
  };

  const handleCancel = () => {
    setVisible(false);
    form.resetFields();
    setEditBook("");
  };

  return (
    <div>
      <Row align={"center"}>
        <Col span={2}>
          <Link to={"/"}>
            <Button>Books</Button>
          </Link>
        </Col>
        <Col span={1} offset={4}>
          <Link>
            <Button onClick={showModal}>Add Books</Button>
          </Link>
        </Col>
      </Row>

      <div className="wapper">
        <Showbook
          editBook={(book) => {
            setEditBook(book.id);
            setVisible(true);
            form.setFieldsValue({
              name: book.name,
              author: book.author,
              shelve: book.shelve,
            });
          }}
        />
      </div>

      <Modal
        title="Add Book"
        open={visible}
        onOk={form.submit}
        onCancel={handleCancel}
        footer={null}
      >
        <Form
          layout="vertical"
          form={form}
          onFinish={onFinish}
          className="add-form"
        >
          <Form.Item
            label="Book Name"
            name="name"
            rules={[
              {
                required: true,
                message: "Please input your Book Name!",
              },
            ]}
          >
            <Input placeholder="input placeholder" />
          </Form.Item>
          <Form.Item
            label="Author"
            name="author"
            rules={[
              {
                required: true,
                message: "Please input your Author!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          {/* <Form.Item label="Select">
            <Select placeholder="Please input your Shelve">
              <Select.Option value="demo">Demo</Select.Option>
            </Select>
          </Form.Item> */}
          <Form.Item
            label="Shelve"
            name="shelve"
            rules={[
              {
                required: true,
                message: "Please input your Shelve!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item>
            <Button key="back" onClick={handleCancel}>
              Cancel
            </Button>
            ,
            <Button type="primary" htmlType="submit">
              {editBooks ? "update" : "Submit"}
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};
export default Books;

import { Button, Form, Col, Modal, Row, Input } from "antd";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import "./index.css";
import { useDispatch } from "react-redux";
import { showBook } from "../../../store/librarySlice";
import Showbook from "./Showbook";

const Books = () => {
  const dispatch = useDispatch();

  const [visible, setVisible] = useState(false);
  const [form] = Form.useForm();

  const showModal = () => {
    setVisible(true);
  };

  const handleSubmit = (values) => {
    dispatch(showBook(values));
    setVisible(false);
    form.resetFields();
  };

  const handleCancel = () => {
    setVisible(false);
    form.resetFields();
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
        <Showbook />
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
          onFinish={handleSubmit}
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
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};
export default Books;

import { Button, Form, Col, Modal, Row, Input, Select } from "antd";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import "./index.css";
import { useDispatch, useSelector } from "react-redux";
import { Addshelves } from "../../store/librarySlice";
import Showshelves from "./showshalves/";
const { Option } = Select;

const Shelves = () => {
  const dispatch = useDispatch();
  const shea =useSelector((s)=>s.authors)
  console.log(shea,"shaubhaub");
  const [visible, setVisible] = useState(false);
  const [form] = Form.useForm();

  const showModal = () => {
    setVisible(true);
  };

  const handleSubmit = (values) => {
    dispatch(Addshelves(values));
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
            <Button>Shelves</Button>
          </Link>
        </Col>
        <Col span={1} offset={4}>
          <Link>
            <Button onClick={showModal}>Add Shelves</Button>
          </Link>
        </Col>
      </Row>

      <div className="wapper">
        <Showshelves />
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
          {/* <Form.Item
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
          </Form.Item> */}
          <Form.Item name="shelve" label="Shelve" rules={[{ required: true }]}>
            <Select
              placeholder="Select a option and change input text above"
              allowClear
            >
              <Option value="male">male</Option>
              <Option value="female">female</Option>
              <Option value="other">other</Option>
            </Select>
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
export default Shelves;

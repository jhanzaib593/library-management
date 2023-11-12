import React from "react";
import "./index.css";
import { Button, Checkbox, Form, Input } from "antd";
import { useDispatch } from "react-redux";
import { loginUser } from "../../../store/librarySlice";

const Login = () => {
  const dispatch = useDispatch();
  const onFinish = (values) => {
    const signupuser = JSON.parse(localStorage.getItem("signup"));
    console.log(signupuser, "akha");
    console.log(values, "akha");

    if (signupuser) {
      if(signupuser.email === values.email && signupuser.password === values.password){
        dispatch(loginUser(signupuser))
      }else{
        alert("Invalid Credentials")
      }
    } else {
      alert("User not Found")
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="login">
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <h1 align="center">Login Form </h1>
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your Email!",
              type : "email"
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default Login;

import { Button, Form, Input } from "antd";
import Password from "antd/es/input/Password";
import React, { useState } from "react";
import { useAxios } from "../../hooks/useAxios";
import { Loader } from "lucide-react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const SignIn = () => {
  const axios = useAxios();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const login = (e) => {
    setLoading(true);
    axios({ url: "api/auth/sign-in", method: "POST", body: e })
      .then((data) => {
        toast.success("Xush kelibisiz");
        let { token } = data;
        localStorage.setItem("token", token);
        navigate('/')
      })
      .catch((error) => {
        toast.error("Email yoki parol xato !");
      })
      .finally(() => setLoading(false));
  };
  return (
    <div className="h-screen w-[400px] flex items-center justify-center m-auto flex-col ">
      <h1 className="text-2xl  font-bold">Login</h1>
      <div className="mt-5 w-full border border-[#e2dfdf] p-4 bg-white rounded-lg shadow-lg flex flex-col gap-4">
        <Form onFinish={login} className="">
          <Form.Item
            name={"email"}
            rules={[
              {
                required: true,
                message: "Please fill in the field !",
              },
            ]}
          >
            <Input placeholder="Email...." autoComplete="email" />
          </Form.Item>
          <Form.Item
            name={"password"}
            rules={[
              {
                required: true,
                message: "Please fill in the field !",
              },
            ]}
          >
            <Input.Password
              placeholder="********"
              autoComplete="current-password"
            />
          </Form.Item>
          <Link to={'/sign-up'}>Ro'yxatdan o'tmaganmisiz</Link>
          <Button htmlType="submit" className="w-full" type="primary">
            {loading ? <Loader className="animate-spin" /> : " Login"}
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default SignIn;

import { Button, Form, Input } from "antd";
import React, { useState } from "react";
import { useAxios } from "../../hooks/useAxios";
import { useNavigate } from "react-router-dom";
import { Loader } from "lucide-react";
import {toast} from "react-hot-toast";

const SingUp = () => {
  const axios = useAxios();
  const [loading, setLoading] = useState(false);
  const navigate=useNavigate()
  const register = (e) => {
    setLoading(true);
    axios({
      url: "api/auth/sign-up",
      method: "POST",
      body: e,
    })
      .then((res) => {
        if (res?.data?.success) {
          toast.success("Iltimos emailinggizga borgan parolni kiriting");
          navigate("/verify-password");
        } else {
          toast.error(res?.data?.message || "Noma'lum xatolik yuz berdi");
          navigate("/sign-in");
        }
      })
      .catch((error) => {
        toast.error(error?.response?.data?.message || "Server xatosi yuz berdi");
        navigate("/sign-in");
      })
      .finally(() => setLoading(false));
  };
  return (
    <div className="h-screen w-[400px] flex items-center justify-center m-auto flex-col ">
      <h1 className="text-2xl  font-bold">Register</h1>
      <div className="mt-5 w-full border border-[#e2dfdf] p-4 bg-white rounded-lg shadow-lg flex flex-col gap-4">
        <Form onFinish={register}>
          <Form.Item
            name={"first_name"}
            rules={[
              {
                required: true,
                message: "Please fill in the field !",
              },
            ]}
          >
            <Input placeholder="First_name...." autoComplete="first_name" />
          </Form.Item>
          <Form.Item
            name={"last_name"}
            rules={[
              {
                required: true,
                message: "Please fill in the field !",
              },
            ]}
          >
            <Input placeholder="Last_name...." autoComplete="last_name" />
          </Form.Item>
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
            <Input.Password placeholder="********" autoComplete="password" />
          </Form.Item>
          <Button className="w-full" htmlType="submit" type="primary">
              {loading ? <Loader className="animate-spin" /> : " Register"}
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default SingUp;

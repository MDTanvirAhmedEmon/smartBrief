/* eslint-disable react/no-unknown-property */
import { ConfigProvider, Form, Input } from "antd";

import { Link } from "react-router-dom";

const LogIn = () => {


    const onFinish = (values) => {
        console.log(values);
    };
    // const imageStyle = {
    //   backgroundImage: `URL(${bgImage.src})`,
    //   backgroundSize: "cover",
    //   backgroundPosition: "center",
    // };

    return (
        <div
            className="  h-auto md:h-screen"
        >
            <div className="bg-primary py-14 md:py-0 h-full">
                <div className="relative z-10 flex items-center justify-center h-full px-3  text-white">
                    <div className="bg-[#ffffff] text-black overflow-hidden shadow-lg max-w-5xl  w-full grid grid-cols-1 md:grid-cols-2">
                        <div className="p-8 md:pt-24 pt-6 ">
                            <div className="text-center">
                                <h1 className="text-3xl font-semibold mt-6 mb-4">
                                    Login to Account
                                </h1>
                                <p className="mb-8 text-gray-600">
                                    Please enter your email and password to continue
                                </p>
                            </div>
                            <ConfigProvider
                                theme={{
                                    components: {
                                        Input: {
                                            activeBorderColor: "#6a9576",
                                            hoverBorderColor: "#6a9576",
                                            colorBorder: "#6a9576",
                                            controlHeight: 40,
                                        },
                                    },
                                }}
                            >
                                <Form
                                    name="basic"
                                    layout="vertical"
                                    initialValues={{ remember: true }}
                                    onFinish={onFinish}
                                >
                                    <Form.Item
                                        label="Email"
                                        name="email"
                                        rules={[
                                            { required: true, message: "Please input your email!" },
                                        ]}
                                    >
                                        <Input
                                            placeholder="Enter your email"
                                            className="rounded-none py-2"
                                        />
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
                                        <Input.Password
                                            placeholder="Enter your password"
                                            className="rounded-none py-2"
                                        />
                                    </Form.Item>

                                    <div className="flex justify-between items-center mt-4">
                                        Do not have an account?
                                        <Link to={"/auth/register"} className="text-blue-500">
                                            Register
                                        </Link>
                                    </div>

                                    <Link to={`/`} >
                                        <button
                                            type="primary"
                                            htmltype="submit"
                                            // disabled={isLoading}
                                            className="bg-primary w-full mt-10 mb-20 text-white px-5 py-[6px] text-lg rounded-none"
                                        >
                                            Log In
                                        </button>
                                    </Link>
                                </Form>
                            </ConfigProvider>
                        </div>

                        <div className="p-8 bg-[#c9dffd] text-center flex flex-col justify-center">
                            <h1 className="text-3xl font-semibold mb-4">Welcome Back!</h1>
                            <p className="mb-6">
                                Please Login into your account with the given details to
                                continue
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;

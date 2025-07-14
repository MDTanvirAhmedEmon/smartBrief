/* eslint-disable react/no-unknown-property */
import { Form, Input, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { useRegisterMutation } from "../../redux/features/auth/authApi";

const Register = () => {

    const navigate = useNavigate()

    const [register, { isLoading }] = useRegisterMutation();
    const onFinish = (values) => {


        const registerData = {
            fullName: values?.name,
            email: values?.email,
            password: values?.password,
        };
        register(registerData).unwrap()
            .then(() => {
                navigate(`/auth/login`);
                message.success("Register Successfully!!!")
            })
            .catch((error) => {
                message.error(error?.data?.message)
                console.log(error);
            })

    };

    return (
        <div
            className=" h-auto md:h-screen"
        >
            <div className="bg-gradient-to-r from-blue-600 to-blue-50 py-8 md:py-0 h-full">
                <div className="relative z-10 flex items-center justify-center h-full px-3  text-white">
                    <div className="bg-[#ffffff] text-black overflow-hidden shadow-lg max-w-5xl  w-full grid grid-cols-1 md:grid-cols-2">
                        <div className="p-8 md:pt-14 pt-6 ">
                            <div className="text-center">
                                <h1 className="text-3xl font-semibold">
                                    Register to Account
                                </h1>
                                <p className="mb-8 text-gray-600">
                                    Please enter your email and password to continue
                                </p>
                            </div>

                            <Form
                                name="basic"
                                layout="vertical"
                                initialValues={{ remember: true }}
                                onFinish={onFinish}
                            >
                                <Form.Item
                                    label="Full Name"
                                    name="name"
                                    rules={[
                                        { required: true, message: "Please input your name!" },
                                    ]}
                                >
                                    <Input
                                        placeholder="Enter your name"
                                        className="rounded-none py-2"
                                    />
                                </Form.Item>

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
                                    Already have an account?
                                    <Link to={"/auth/login"} className="text-blue-500">
                                        LogIn
                                    </Link>
                                </div>

                                {/* <Link to={`/`} > */}
                                    <button
                                        type="primary"
                                        htmltype="submit"
                                        disabled={isLoading}
                                        className="bg-blue-600 w-full mt-8 mb-14 text-white px-5 py-[6px] text-lg rounded-none"
                                    >
                                        {isLoading ? "Loading.." : "Register"}
                                    </button>
                                {/* </Link> */}
                            </Form>
                        </div>
                        <div className="p-8 bg-[#c9dffd] text-center flex flex-col justify-center">
                            <h1 className="text-3xl font-semibold mb-4">Welcome to SmartBrief!</h1>
                            <p className="mb-6">
                                Create your account to generate powerful AI summaries and manage your content easily.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;

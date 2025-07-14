/* eslint-disable react/no-unknown-property */
import { Form, Input, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { useLogInMutation } from "../../redux/features/auth/authApi";
import { decodedToken } from "../../utils/jwtDecoder";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/features/auth/authSlice";

const LogIn = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [register, { isLoading }] = useLogInMutation();
    const onFinish = (values) => {


        const data = {
            email: values?.email,
            password: values?.password,
        };
        register(data).unwrap()
            .then((data) => {
                console.log(data);
                const userInfo = decodedToken(data?.data?.accessToken)
                console.log(userInfo);
 
                const token = data?.data?.accessToken
                dispatch(setUser({ user: userInfo, token: token }))
                navigate(`/`)
                message.success("LogIn Successfully!!!")
            })
            .catch((error) => {
                message.error(error?.data?.message)
                console.log(error);
            })

    };
    return (
        <div
            className="  h-auto md:h-screen"
        >
            <div className="bg-gradient-to-r from-blue-600 to-blue-50 py-8 md:py-0 h-full">
                <div className="relative z-10 flex items-center justify-center h-full px-3  text-white">
                    <div className="bg-[#ffffff] text-black overflow-hidden shadow-lg max-w-5xl  w-full grid grid-cols-1 md:grid-cols-2">
                        <div className="p-8 md:pt-14 pt-6 ">
                            <div className="text-center">
                                <h1 className="text-3xl font-semibold">
                                    Login to Account
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

                                {/* <Link to={`/`} > */}
                                    <button
                                        type="primary"
                                        htmltype="submit"
                                        disabled={isLoading}
                                        className="bg-blue-600 w-full mt-8 mb-14 text-white px-5 py-[6px] text-lg rounded-none"
                                    >
                                        {isLoading ? "Loading..." : "Log In"}
                                    </button>
                                {/* </Link> */}
                            </Form>
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

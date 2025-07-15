import { Layout, theme, Dropdown, Menu } from 'antd';
import { FiZap } from 'react-icons/fi';
import { FaUserCircle } from 'react-icons/fa';
import { DownOutlined } from '@ant-design/icons';
import React from 'react';
import { Link } from 'react-router-dom';

const { Header } = Layout;

const MainHeader = () => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    const handleLogout = () => {
        // Add logout logic here
        console.log("User logged out");
    };

    const menu = (
        <Menu>
            <Menu.Item key="logout" onClick={handleLogout}>
                Log Out
            </Menu.Item>
        </Menu>
    );

    return (
        <div className='py-3'>
            <Header
                style={{
                    padding: 0,
                    background: colorBgContainer,
                }}
            >
                <div className='container mx-auto flex justify-between items-center py-2 pr-4 bg-[#ffffff]'>
                    {/* Left - Branding */}
                    <div className="flex items-center space-x-3">
                        <div className="bg-blue-600 p-2 rounded-lg">
                            <FiZap className="h-6 w-6 text-white" />
                        </div>
                        <h1 className="text-2xl font-bold text-gray-900">SmartBrief</h1>
                    </div>

                        {/* Navigation Items */}
                        <nav className=" flex space-x-8">
                            <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium">Summarize</Link>
                            <Link to="/history" className="text-gray-700 hover:text-blue-600 font-medium">History</Link>
                            <Link to="/settings" className="text-gray-700 hover:text-blue-600 font-medium">Settings</Link>
                        </nav>

                    {/* Right - Profile Dropdown */}
                    <div>
                        <Dropdown overlay={menu} trigger={["click"]} placement="bottomRight">
                            <div className="flex items-center space-x-2 cursor-pointer">
                                <FaUserCircle className="h-7 w-7 text-gray-600" />
                                <DownOutlined className="text-gray-600 text-xs" />
                            </div>
                        </Dropdown>
                    </div>
                </div>
            </Header>
        </div>
    );
};

export default MainHeader;
import { Dropdown, Menu } from 'antd';
import { FiZap } from 'react-icons/fi';
import { FaUserCircle } from 'react-icons/fa';
import { DownOutlined } from '@ant-design/icons';

const MainHeader = () => {


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
        <header className="bg-[#e9f0ff] px-5 py-3">
            <div className="flex justify-between items-center">
                {/* Left - Branding */}
                <div className="flex items-center space-x-3">
                    <div className="bg-blue-600 p-2 rounded-lg">
                        <FiZap className="h-6 w-6 text-white" />
                    </div>
                    <h1 className="text-2xl font-bold text-gray-900">SmartBrief</h1>
                </div>

                {/* Right - Profile Dropdown */}
                <div>
                    <Dropdown overlay={menu} trigger={["click"]} placement="bottomRight">
                        <div className="flex items-center space-x-2 cursor-pointer">
                            <FaUserCircle size={30} className=" text-gray-600" />
                            <DownOutlined className="text-gray-600 text-xs" />
                        </div>
                    </Dropdown>
                </div>
            </div>
        </header>
    );
};

export default MainHeader;
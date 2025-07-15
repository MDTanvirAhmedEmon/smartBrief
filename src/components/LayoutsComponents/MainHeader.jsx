import { Dropdown, Menu, Tooltip } from 'antd';
import { FiZap } from 'react-icons/fi';
import { FaUserCircle } from 'react-icons/fa';
import { DownOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/features/auth/authSlice';

const MainHeader = () => {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.logInUser)
  const handleLogout = () => {
    dispatch(logout())
    window.location.reload();
  };

  const menu = (
    <Menu>
      <Menu.Item key="logout" onClick={handleLogout}>
        Log Out
      </Menu.Item>
    </Menu>
  );

  return (
    <header className="bg-[#e9f0ff] px-6 py-4 shadow-sm">
      <div className="flex justify-between items-center">
        {/* Left - Branding */}
        <div className="flex items-center space-x-3">
          <div className="bg-gradient-to-br from-blue-600 to-blue-400 p-2 rounded-xl shadow-md">
            <FiZap className="h-6 w-6 text-white" />
          </div>
          <h1 className="text-2xl font-extrabold text-gray-800 tracking-tight">
            SmartBrief
          </h1>
        </div>

        {/* Right - Credits + Profile */}
        <div className="flex items-center space-x-5">
          {/* Credits Badge with Tooltip */}
          {
            user?.user?.role === "admin" ?
              <Tooltip title="Available credits for summarizing content">
                <div className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-blue-500 text-white text-sm font-medium px-4 py-1.5 rounded-full shadow-md">
                  <FiZap className="text-white" />
                  <span>Admin Unlimited Credits</span>
                </div>
              </Tooltip> :
              user?.user?.role === "editor" ?
                <div className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-blue-500 text-white text-sm font-medium px-4 py-1.5 rounded-full shadow-md">
                  <FiZap className="text-white" />
                  <span>Editor</span>
                </div>
                :
                user?.user?.role === "reviewer" ?
                  <div className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-blue-500 text-white text-sm font-medium px-4 py-1.5 rounded-full shadow-md">
                    <FiZap className="text-white" />
                    <span>Reviewer</span>
                  </div>
                  :
                  <Tooltip title="Available credits for summarizing content">
                    <div className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-blue-500 text-white text-sm font-medium px-4 py-1.5 rounded-full shadow-md">
                      <FiZap className="text-white" />
                      <span>{user?.user?.credits} Credits Left</span>
                    </div>
                  </Tooltip>
          }


          {/* Profile Dropdown */}
          <Dropdown overlay={menu} trigger={["click"]} placement="bottomRight">
            <div className="flex items-center space-x-2 cursor-pointer">
              <FaUserCircle size={32} className="text-gray-600 hover:text-blue-600 transition" />
              <DownOutlined className="text-gray-600 text-xs" />
            </div>
          </Dropdown>
        </div>
      </div>
    </header >
  );
};

export default MainHeader;

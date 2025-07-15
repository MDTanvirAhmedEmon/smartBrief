import { Layout, theme } from 'antd';
import { FiZap } from 'react-icons/fi';
const { Header } = Layout;

const MainHeader = () => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        <div>
            <Header
                style={{
                    padding: 0,
                    background: colorBgContainer,
                }}
            >
                <div className=' container mx-auto flex justify-between py-2 pr-4  bg-[#ffffff]'>
                    <div className="flex items-center space-x-3">
                        <div className="bg-blue-600 p-2 rounded-lg">
                            <FiZap className="h-6 w-6 text-white" />
                        </div>
                        <h1 className="text-2xl font-bold text-gray-900">SmartBrief</h1>
                    </div>
                </div>
                

            </Header>
        </div>
    );
};

export default MainHeader;
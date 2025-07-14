import { Outlet } from "react-router-dom";
import MainHeader from "../components/LayoutsComponents/MainHeader";
import Sidebar from "../components/LayoutsComponents/Sidebar";
const MainLayout = () => {

    return (
        <div className="">
            <MainHeader></MainHeader>
            <div className=" flex">
                <Sidebar></Sidebar>
                <div className=" px-10 bg-gray-50 min-h-screen w-full">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default MainLayout;
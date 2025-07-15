import { Outlet } from "react-router-dom";
import MainHeader from "../components/LayoutsComponents/MainHeader";
const MainLayout = () => {

    return (
        <div className="">
            <MainHeader></MainHeader>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;
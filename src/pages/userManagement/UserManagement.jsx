/* eslint-disable no-unused-vars */
import { Avatar, Input, Pagination, Table } from "antd";
import { useState } from "react";
// import { IoEyeOutline } from "react-icons/io5";
// import { LuUserCheck } from "react-icons/lu";
import { CiSearch } from "react-icons/ci";
import { useGetAllUsersQuery } from "../../redux/features/users/userApi";
import { FaUserCircle } from "react-icons/fa";

const UserManagement = () => {

    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 10;
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const { data } = useGetAllUsersQuery({ page: currentPage, searchTerm: searchTerm });

    // Define columns for the table
    const columns = [
        {
            title: "S No.",
            key: "S No.",
            dataIndex: "S No.",
            render: (_, record, index) =>
                <div>
                    {index + 1}
                </div>
        },
        {
            title: "Image",
            key: "profileImage",
            dataIndex: "userInfo",
            render: (userInfo) =>

                <FaUserCircle size={30} />

        },
        {
            title: "Name",
            dataIndex: "userInfo",
            key: "name",
            render: (_, record) =>
                <p>
                    {record?.fullName}
                </p>

        },
        {
            title: "Email",
            dataIndex: "email",
            key: "email",
            render: (_, record) => (record?.email ? record?.email : "N/A"),
        },
        {
            title: "Contact Number",
            dataIndex: "contact",
            key: "contact",
            render: (_, record) =>
                <p className=" capitalize">+0084141534444</p>,
        },
        {
            title: "Location",
            dataIndex: "location",
            key: "location",
            render: (_, record) =>
                <p>Dhaka</p>,
        },
    ];


    return (
        <div className=" bg-gray-50 py-8">
            <div className=" flex justify-between items-center mb-2">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">User Management</h2>
                <Input onChange={(e) => { setSearchTerm(e.target.value) }} prefix={<CiSearch className="w-6 h-6" />} placeholder="Search" className=" w-[250px] -mt-3 " />
            </div>
            <Table
                pagination={false}
                columns={columns}
                dataSource={data?.data?.data}
                rowKey="_id"
            />
            {
                data?.data?.meta?.limit > 10 &&
                <div className=" mt-8">
                    <Pagination
                        current={currentPage}
                        pageSize={pageSize}
                        total={data?.data?.meta?.total}
                        onChange={handlePageChange}
                    />
                </div>
            }

        </div >
    );
};

export default UserManagement;
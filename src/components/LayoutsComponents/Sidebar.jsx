import { NavLink } from 'react-router-dom';
import { FiEdit, FiFileText, FiClock, FiUsers } from 'react-icons/fi';
import { useSelector } from 'react-redux';

const Sidebar = () => {
  const user = useSelector((state) => state.logInUser)

  const userItems = [
    { to: '/', label: 'Summarize', icon: <FiEdit /> },
    { to: '/history', label: 'History', icon: <FiClock /> },
  ];
  const adminItems = [
    { to: '/', label: 'Summarize', icon: <FiEdit /> },
    { to: '/all-summaries', label: 'All Summaries', icon: <FiFileText /> },
    { to: '/history', label: 'History', icon: <FiClock /> },
    { to: '/user-management', label: 'User Management', icon: <FiUsers /> },
  ];
  const editorItems = [
    { to: '/all-summaries', label: 'All Summaries', icon: <FiFileText /> },
  ];
  const reviewerItems = [
    { to: '/all-summaries', label: 'All Summaries', icon: <FiFileText /> },
  ];

  const navItems =
    user?.user?.role === "admin"
      ? adminItems
      : user?.user?.role === "editor"
        ? editorItems
        : user?.user?.role === "reviewer"
          ? reviewerItems
          : userItems;


  return (
    <aside className="w-[280px] h-screen bg-gradient-to-b from-[#e9f0ff] to-[#f9fbff] py-8 px-5 shadow-md">
      <nav className="flex flex-col space-y-2">
        {navItems.map(item => (
          <NavLink
            key={item.to}
            to={item.to}
            end
            className={({ isActive }) =>
              `group flex items-center space-x-3 px-4 py-3 rounded-lg font-medium transition-all duration-200 border-l-4 ${isActive
                ? 'bg-blue-600 text-white border-l-blue-600 shadow-inner'
                : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600 border-l-transparent'
              }`
            }
          >
            <div className={`flex items-center justify-center text-lg`}>
              {item.icon}
            </div>
            <span className="flex-1">{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;

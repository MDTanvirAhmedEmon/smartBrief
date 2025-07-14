import { NavLink } from 'react-router-dom';
import { FiEdit, FiFileText, FiClock, FiUsers } from 'react-icons/fi'; // Feather icons

const Sidebar = () => {
  const navItems = [
    { to: '/', label: 'Summarize', icon: <FiEdit /> },
    { to: '/all-summaries', label: 'All Summaries', icon: <FiFileText /> },
    { to: '/history', label: 'History', icon: <FiClock /> },
    { to: '/user-management', label: 'User Management', icon: <FiUsers /> },
  ];

  return (
    <div className="w-64 h-screen bg-[#e9f0ff] py-6 px-4">
      <nav className="flex flex-col space-y-2">
        {navItems.map(item => (
          <NavLink
            key={item.to}
            to={item.to}
            end
            className={({ isActive }) =>
              `flex items-center space-x-3 px-4 py-2 rounded-md font-medium transition ${
                isActive
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-700 hover:bg-blue-100 hover:text-blue-600'
              }`
            }
          >
            <span className="text-lg">{item.icon}</span>
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;

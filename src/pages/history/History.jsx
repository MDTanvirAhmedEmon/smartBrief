import { Card } from 'antd';
import { FiFileText } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const mockHistory = [
  {
    id: 1,
    title: 'Article Summary - Climate Change',
    date: '2025-07-12',
    excerpt: 'Climate change continues to accelerate with rising sea levels and extreme weather...'
  },
  {
    id: 2,
    title: 'Research Paper - AI in Healthcare',
    date: '2025-07-10',
    excerpt: 'AI is transforming patient care through predictive analytics, diagnosis tools...'
  },
  {
    id: 3,
    title: 'Weekly Report - Marketing Insights',
    date: '2025-07-08',
    excerpt: 'This week’s metrics show a 15% increase in engagement across all platforms...'
  },
];

const History = () => {
  return (
    <div className="bg-gray-50 py-8">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Summary History</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockHistory.map(item => (
          <Link key={item.id} to={"/single-summary"}>
            <Card
              className="rounded-xl shadow hover:shadow-lg transition duration-300 cursor-pointer"
              title={<div className="flex items-center space-x-2"><FiFileText className="text-blue-600" /><span>{item.title}</span></div>}
              extra={<span className="text-sm text-gray-500">{item.date}</span>}
            >
              <p className="text-gray-700">{item.excerpt}</p>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default History;

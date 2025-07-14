import { useState } from 'react';
import { Card } from 'antd';
import { FiFileText, FiTrash2 } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const History = () => {
    const [history, setHistory] = useState([
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
    ]);

    const handleDelete = (id) => {
        const updated = history.filter(item => item.id !== id);
        setHistory(updated);
    };

    return (
        <div className="bg-gray-50 py-8 px-4">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">All Summaries</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {history.map(item => (
                    <Card
                        key={item.id}
                        className="rounded-xl shadow hover:shadow-lg transition duration-300 relative"
                        title={
                            <div className="flex items-center space-x-2">
                                <FiFileText className="text-blue-600" />
                                <span>{item.title}</span>
                            </div>
                        }
                        extra={<button
                            onClick={() => handleDelete(item.id)}
                            className="text-gray-400 hover:text-red-600"
                            title="Delete"
                        >
                            <FiTrash2 size={18} />
                        </button>}
                    >
                        <Link to="/single-summary" className="block mb-6">
                            <p className="text-gray-700">{item.excerpt}</p>
                        </Link>

                        {/* Delete Button in bottom right */}
                        <div className="flex justify-end">

                            <span className="text-sm text-gray-500">{item.date}</span>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default History;

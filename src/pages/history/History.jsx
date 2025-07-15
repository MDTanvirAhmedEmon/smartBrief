import { Card } from 'antd';
import { FiFileText } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useGetMySummaryQuery } from '../../redux/features/summary/summaryApi';

const History = () => {
  const { data, isLoading } = useGetMySummaryQuery();

  return (
    <div className="bg-gray-50 py-8">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Summary History</h2>
      {
        isLoading ?
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(3)].map((_, index) => (
              <div
                key={index}
                className="rounded-xl shadow animate-pulse p-4 cursor-wait"
              >
                {/* Title skeleton */}
                <div className="flex items-center space-x-2 mb-4">
                  <div className="h-6 w-6 bg-gray-300 rounded-full"></div>
                  <div className="h-4 w-2/3 bg-gray-300 rounded"></div>
                </div>

                {/* Date skeleton */}
                <div className="h-3 w-1/4 bg-gray-200 rounded mb-4"></div>

                {/* Content skeleton */}
                <div className="space-y-2">
                  <div className="h-3 w-full bg-gray-200 rounded"></div>
                  <div className="h-3 w-full bg-gray-200 rounded"></div>
                  <div className="h-3 w-5/6 bg-gray-200 rounded"></div>
                </div>
              </div>
            ))}
          </div>
          :
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data?.result.map(item => (
              <Link key={item?._id} to={`/${item?._id}`}>
                <Card
                  className="rounded-xl shadow hover:shadow-lg transition duration-300 cursor-pointer"
                  title={<div className="flex items-center space-x-2"><FiFileText className="text-blue-600" /><span>{item.title}</span></div>}
                  extra={<span className="text-sm text-gray-500">{item?.createdAt ? new Date(item.createdAt).toISOString().split('T')[0] : ''}</span>}
                >
                  <p className="text-gray-700">{item?.summarizedContent?.slice(0, 100)}...</p>
                </Card>
              </Link>
            ))}
          </div>
      }


    </div>
  );
};

export default History;

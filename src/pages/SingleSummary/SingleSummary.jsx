import { useState } from 'react';
import { FiFileText, FiZap } from 'react-icons/fi';
import { Input } from 'antd';

const { TextArea } = Input;

const SingleSummary = () => {
    // Mock data: You’d fetch this by ID in a real app
    const mockSummary = {
        id: 1,
        title: 'Article Summary - Climate Change',
        date: '2025-07-12',
        content: `Climate change continues to accelerate with rising sea levels, 
        extreme weather events, and melting ice caps. Urgent action is required to 
        mitigate its impacts and transition to renewable energy sources.`
    };

    const [summary, setSummary] = useState(mockSummary);
    return (
        <div className="bg-gray-50 py-8 max-w-3xl">
            <div className="flex items-center mb-2 space-x-2">
                <FiFileText className="text-blue-600 text-2xl" />
                <h2 className="text-2xl font-bold text-gray-800">{summary.title}</h2>
            </div>
            <p className="text-gray-500 mb-6">{summary.date}</p>

            <TextArea
                rows={10}
                value={summary.content}
                onChange={e => setSummary({ ...summary, content: e.target.value })}
                className="mb-4"
            />


            <button className=" bg-blue-600 px-5 py-3 rounded-lg flex items-center gap-2 text-white cursor-pointer" type="submit"> <FiZap className="h-6 w-6 text-white" /> Edit Summary</button>
        </div>
    );
};

export default SingleSummary;

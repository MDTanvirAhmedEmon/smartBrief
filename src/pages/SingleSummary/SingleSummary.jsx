import { useState, useEffect } from 'react';
import { FiFileText, FiZap } from 'react-icons/fi';
import { Input, message } from 'antd';
import { useParams } from 'react-router-dom';
import { useGetSingleSummaryQuery, useUpdateSummaryMutation } from '../../redux/features/summary/summaryApi';

const { TextArea } = Input;

const SingleSummary = () => {
    const { id } = useParams();
    const { data, isLoading } = useGetSingleSummaryQuery(id);

    const [summaryContent, setSummaryContent] = useState('');

    useEffect(() => {
        if (data?.result?.summarizedContent) {
            setSummaryContent(data.result.summarizedContent);
        }
    }, [data]);

    const [updateSummary, { isLoading: updateLoading }] = useUpdateSummaryMutation();

    const update = () => {
        if (!summaryContent) {
            return;
        }
        updateSummary({
            data: {
                summarizedContent: summaryContent
            }, id: data?.result?._id
        }).then(() => {
            message.success("updated successfully")
        })
            .catch((error) => {
                message.error(error?.data?.message)
            })

    }

    return (
        <div className="bg-gray-50 py-8 px-4">
            <div className="flex items-center mb-2 space-x-2">
                <FiFileText className="text-blue-600 text-2xl" />
                <h2 className="text-2xl font-bold text-gray-800">
                    {isLoading ? 'Loading...' : data?.result?.title}
                </h2>
            </div>
            <p className="text-gray-500 mb-6">
                Date:{' '}
                {data?.result?.createdAt
                    ? new Date(data.result.createdAt).toISOString().split('T')[0]
                    : ''}
            </p>

            <TextArea
                rows={10}
                value={summaryContent}
                onChange={(e) => setSummaryContent(e.target.value)}
                className="mb-4"
            />

            <button
                className="bg-blue-600 px-5 py-3 rounded-lg flex items-center gap-2 text-white cursor-pointer"
                onClick={update}
                disabled={updateLoading}
                type="button"
            >
                <FiZap className="h-6 w-6 text-white" /> {updateLoading ? "Loading..." : "Edit Summarys"}
            </button>
        </div>
    );
};

export default SingleSummary;

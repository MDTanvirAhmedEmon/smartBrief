import { useState } from "react";
import { RiUpload2Line } from "react-icons/ri";
import { Button, Upload, message } from "antd";
import TextArea from "antd/es/input/TextArea";
import { FiZap } from "react-icons/fi";
import { HiOutlineChartBar, HiOutlineDocumentText } from "react-icons/hi";

export default function Home() {
  const [summaryInput, setSummaryInput] = useState("");
  const [summaryOutput, setSummaryOutput] = useState("");
  const [creditsLeft, setCreditsLeft] = useState(4);

  const handleGenerate = () => {
    if (creditsLeft <= 0) {
      message.warning("You have no credits left. Please upgrade your plan.");
      return;
    }

    // Mimic summary generation
    const summary = summaryInput
      ? summaryInput.slice(0, 100) + "..."
      : "No input provided.";
    setSummaryOutput(summary);

    // Deduct 1 credit
    setCreditsLeft((prev) => prev - 1);

    message.success("1 credit used. Your summary is ready!");
  };

  return (
    <div className="px-5">
      <div className="py-8 ">
        <div className="mb-6 flex flex-col md:flex-row md:justify-between md:items-center gap-4">
          <h2 className="text-3xl font-semibold">SmartBrief Summary Tool</h2>
        </div>

        <div className="bg-white shadow-md rounded-xl p-6 flex flex-col lg:flex-row gap-6">
          <div className="lg:w-1/2">
            <h3 className="text-xl font-medium mb-4">Create a Summary</h3>


            <div className="mb-4">
              <Upload
                accept=".txt,.docx"
                // eslint-disable-next-line no-unused-vars
                beforeUpload={(file) => {
                  return false;
                }}
              >
                <Button icon={<RiUpload2Line />}>Upload .txt or .docx</Button>
              </Upload>
            </div>

            <div className="mb-4">
              <TextArea
                rows={12}
                placeholder="Or paste your content here..."
                className="w-full"
                value={summaryInput}
                onChange={(e) => setSummaryInput(e.target.value)}
              />
            </div>

            <button
              className={`px-5 py-3 rounded-lg flex items-center gap-2 text-white transition ${creditsLeft > 0
                  ? "bg-blue-600 hover:bg-blue-700"
                  : "bg-gray-400 cursor-not-allowed"
                }`}
              type="button"
              onClick={handleGenerate}
              disabled={creditsLeft <= 0}
            >
              <FiZap className="h-5 w-5 text-white" />
              Generate Summary (1 Credit)
            </button>
          </div>

          <div className="lg:w-1/2">
            <h3 className="text-xl font-semibold flex items-center gap-2 mb-1">
              <HiOutlineChartBar className="text-gray-800 text-2xl" />
              AI Summary
            </h3>
            <p className="text-gray-500 mb-6">
              Each summary generation uses 1 credit
            </p>

            <div className="flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-white border border-blue-200 rounded-xl p-10 shadow-sm min-h-[290px]">
              {summaryOutput ? (
                <p className="text-gray-800 text-base leading-relaxed">
                  {summaryOutput}
                </p>
              ) : (
                <div className="flex flex-col items-center">
                  <HiOutlineDocumentText className="text-gray-400 text-5xl mb-4" />
                  <p className="text-gray-400">
                    Your AI-generated summary will appear here
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

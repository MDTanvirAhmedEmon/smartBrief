import { useState } from "react";
import { RiUpload2Line } from "react-icons/ri";
import { Button, Upload, } from "antd";
import TextArea from "antd/es/input/TextArea";
import { FiZap } from "react-icons/fi";
import { HiOutlineChartBar, HiOutlineDocumentText } from "react-icons/hi";

export default function Home() {
  const [summaryInput, setSummaryInput] = useState("");
  const [summaryOutput, setSummaryOutput] = useState("");

  const handleGenerate = () => {
    // Just mimic a summary for UI purpose
    setSummaryOutput(summaryInput ? summaryInput.slice(0, 100) + "..." : "No input provided.");
  };

  return (
    <div className="">

      {/* Main Content */}
      <div className=" py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-semibold">SmartBrief Summary Tool</h2>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 flex flex-col lg:flex-row gap-6">
          {/* Input Section */}
          <div className="lg:w-1/2">
            <h3 className="text-xl font-medium mb-4">Create a Summary</h3>

            <div className="mb-4">
              <Upload>
                <Button icon={<RiUpload2Line />}>Upload File</Button>
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

            <button className=" bg-blue-600 px-5 py-3 rounded-lg flex items-center gap-2 text-white cursor-pointer" type="submit" onClick={handleGenerate}> <FiZap className="h-6 w-6 text-white" /> Generate Summary</button>
          </div>

          {/* Output Section */}

          <div className="lg:w-1/2">
            <h3 className="text-xl font-semibold flex items-center gap-2 mb-1">
              <HiOutlineChartBar className="text-gray-800 text-2xl" />
              AI Summary
            </h3>
            <p className="text-gray-500 mb-6">Your summarized content will appear here</p>

            <div className="flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-white border border-blue-200 rounded-xl p-10 shadow-sm min-h-[290px]">
              {summaryOutput ? (
                <p className="text-gray-800 text-base leading-relaxed">{summaryOutput}</p>
              ) : (
                <div className="flex flex-col items-center">
                  <HiOutlineDocumentText className="text-gray-400 text-5xl mb-4" />
                  <p className="text-gray-400">Your AI-generated summary will appear here</p>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

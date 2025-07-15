import React, { useState } from "react";
import { RiAdminLine, RiUserLine, RiEditLine, RiEyeLine, RiDashboardLine, RiUpload2Line } from "react-icons/ri";
import { Button, Upload, Select } from "antd";
import TextArea from "antd/es/input/TextArea";

const { Option } = Select;

export default function Home() {
  const [summaryInput, setSummaryInput] = useState("");
  const [summaryOutput, setSummaryOutput] = useState("");

  const handleGenerate = () => {
    // Just mimic a summary for UI purpose
    setSummaryOutput(summaryInput ? summaryInput.slice(0, 100) + "..." : "No input provided.");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">

      {/* Main Content */}
      <div className="flex-1 py-8 container mx-auto">
        <header className="mb-8">
          <h2 className="text-3xl font-semibold">SmartBrief Summary Tool</h2>
        </header>

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
                rows={6}
                placeholder="Or paste your content here..."
                className="w-full"
                value={summaryInput}
                onChange={(e) => setSummaryInput(e.target.value)}
              />
            </div>

            <Button type="primary" onClick={handleGenerate}>Generate Summary</Button>
          </div>

          {/* Output Section */}
          <div className="lg:w-1/2">
            <h3 className="text-xl font-medium mb-4">Summary Result</h3>
            <div className="bg-gradient-to-br from-blue-50 to-white border border-blue-200 rounded-xl p-6 shadow-sm min-h-[200px]">
              <p className="text-gray-800 text-base leading-relaxed">
                {summaryOutput || <span className="text-gray-400">Your summary will appear here...</span>}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

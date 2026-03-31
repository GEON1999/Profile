"use client";

import { useState } from "react";
import type { Issue } from "@/types";

type TabKey = "challenges" | "tech" | "solutions" | "result";

interface TabPanelProps {
  issues: Issue[];
}

export default function TabPanel({ issues }: TabPanelProps) {
  const [activeTab, setActiveTab] = useState<TabKey>("challenges");

  const renderTabContent = (issue: Issue) => {
    switch (activeTab) {
      case "challenges":
        return (
          <div className="text-[15px] bg-white rounded-lg px-4 py-2 shadow-md">
            <h4 className="font-bold">{issue.title}</h4>
            <p className="text-[13px]">{issue.description[0]}</p>
            <ul className="list-disc list-inside text-[13px]">
              {issue.description.map((desc, idx) => {
                if (idx === 0) return null;
                return <li key={idx}>{desc}</li>;
              })}
            </ul>
          </div>
        );
      case "tech":
        return (
          <div className="text-[15px] bg-white rounded-lg px-4 py-2 shadow-md">
            <h4 className="font-bold">{issue.title}</h4>
            <div>
              {issue.techDetails.map((detail, idx) => (
                <div key={idx}>
                  <p>{detail.category}</p>
                  <ul className="list-disc list-inside text-[13px]">
                    {detail.reasoning.map((reason, i) => (
                      <li key={i}>{reason}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        );
      case "solutions":
        return (
          <div className="text-[15px] bg-white rounded-lg px-4 py-2 shadow-md">
            <h4 className="font-bold">{issue.title}</h4>
            <ul className="list-disc list-inside text-[13px]">
              {issue.solution.map((sol, idx) => (
                <li key={idx}>{sol}</li>
              ))}
            </ul>
          </div>
        );
      case "result":
        return (
          <div className="text-[15px] bg-white rounded-lg px-4 py-2 shadow-md">
            <h4 className="font-bold">{issue.title}</h4>
            <ul className="list-disc list-inside text-[13px]">
              {issue.result.map((res, idx) => (
                <li key={idx}>{res}</li>
              ))}
            </ul>
          </div>
        );
    }
  };

  return (
    <div>
      {/* Tab Buttons — matches original with dashed lines between */}
      <div className="flex justify-between items-center font-bold text-[16px] md:text-[20px]">
        <button
          className={`${
            activeTab === "challenges"
              ? "text-black"
              : "text-[#999999] hover:text-black"
          }`}
          onClick={() => setActiveTab("challenges")}
        >
          Issues
        </button>
        <div className="h-[1px] w-[10%] md:w-[60px] border-t border-[#999999]" />
        <button
          className={`${
            activeTab === "tech"
              ? "text-black"
              : "text-[#999999] hover:text-black"
          }`}
          onClick={() => setActiveTab("tech")}
        >
          TechDetails
        </button>
        <div className="h-[1px] w-[10%] md:w-[60px] border-t border-[#999999]" />
        <button
          className={`${
            activeTab === "solutions"
              ? "text-black"
              : "text-[#999999] hover:text-black"
          }`}
          onClick={() => setActiveTab("solutions")}
        >
          Solutions
        </button>
        <div className="h-[1px] w-[10%] md:w-[60px] border-t border-[#999999]" />
        <button
          className={`${
            activeTab === "result"
              ? "text-black"
              : "text-[#999999] hover:text-black"
          }`}
          onClick={() => setActiveTab("result")}
        >
          Result
        </button>
      </div>

      {/* Tab Content */}
      <div className="space-y-4">
        {issues.map((issue, index) => (
          <div key={index} className="mt-2 bg-gray-50 rounded-lg">
            {renderTabContent(issue)}
          </div>
        ))}
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import type { Issue } from "@/types";

type TabKey = "challenges" | "tech" | "solutions" | "result";

interface TabPanelProps {
  issues: Issue[];
}

const tabs: { key: TabKey; label: string }[] = [
  { key: "challenges", label: "Issues" },
  { key: "tech", label: "TechDetails" },
  { key: "solutions", label: "Solutions" },
  { key: "result", label: "Result" },
];

export default function TabPanel({ issues }: TabPanelProps) {
  const [activeTab, setActiveTab] = useState<TabKey>("challenges");

  const renderTabContent = (issue: Issue) => {
    switch (activeTab) {
      case "challenges":
        return (
          <div>
            <h4 className="font-bold text-[15px]">{issue.title}</h4>
            <p className="text-[13px] text-gray-600 mt-1">
              {issue.description[0]}
            </p>
            {issue.description.length > 1 && (
              <ul className="list-disc list-inside text-[13px] text-gray-600 mt-1">
                {issue.description.slice(1).map((desc, idx) => (
                  <li key={idx}>{desc}</li>
                ))}
              </ul>
            )}
          </div>
        );
      case "tech":
        return (
          <div>
            <h4 className="font-bold text-[15px]">{issue.title}</h4>
            <div className="mt-1 space-y-2">
              {issue.techDetails.map((detail, idx) => (
                <div key={idx}>
                  <p className="text-[14px] font-medium text-gray-800">
                    {detail.category}
                  </p>
                  <ul className="list-disc list-inside text-[13px] text-gray-600">
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
          <div>
            <h4 className="font-bold text-[15px]">{issue.title}</h4>
            <ul className="list-disc list-inside text-[13px] text-gray-600 mt-1">
              {issue.solution.map((sol, idx) => (
                <li key={idx}>{sol}</li>
              ))}
            </ul>
          </div>
        );
      case "result":
        return (
          <div>
            <h4 className="font-bold text-[15px]">{issue.title}</h4>
            <ul className="list-disc list-inside text-[13px] text-gray-600 mt-1">
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
      {/* Tabs */}
      <div className="flex items-center justify-between font-bold text-[14px] md:text-[16px]">
        {tabs.map((tab, idx) => (
          <div key={tab.key} className="flex items-center">
            {idx > 0 && (
              <div className="h-px w-6 md:w-10 border-t border-gray-300 mx-1 md:mx-2" />
            )}
            <button
              className={`transition-colors whitespace-nowrap ${
                activeTab === tab.key
                  ? "text-gray-900"
                  : "text-gray-400 hover:text-gray-700"
              }`}
              onClick={() => setActiveTab(tab.key)}
            >
              {tab.label}
            </button>
          </div>
        ))}
      </div>

      {/* Tab Content */}
      <div className="space-y-3 mt-3">
        {issues.map((issue, index) => (
          <div
            key={index}
            className="bg-white rounded-lg px-4 py-3 shadow-sm border border-gray-100"
          >
            {renderTabContent(issue)}
          </div>
        ))}
      </div>
    </div>
  );
}

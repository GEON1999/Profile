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

  const handleKeyDown = (e: React.KeyboardEvent, currentTab: TabKey) => {
    const tabs: TabKey[] = ["challenges", "tech", "solutions", "result"];
    const currentIndex = tabs.indexOf(currentTab);
    
    if (e.key === "ArrowRight") {
      e.preventDefault();
      setActiveTab(tabs[(currentIndex + 1) % tabs.length]);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      setActiveTab(tabs[(currentIndex - 1 + tabs.length) % tabs.length]);
    }
  };

  return (
    <div>
      {/* Tab Buttons */}
      <div 
        className="flex justify-between items-center font-bold text-[16px] md:text-[20px]" 
        role="tablist" 
        aria-label="이슈 및 해결방안"
      >
        <button
          className={`${
            activeTab === "challenges"
              ? "text-black"
              : "text-gray-500 hover:text-black"
          } focus:outline-none focus-visible:ring-2 focus-visible:ring-black rounded px-1`}
          onClick={() => setActiveTab("challenges")}
          onKeyDown={(e) => handleKeyDown(e, "challenges")}
          role="tab"
          aria-selected={activeTab === "challenges"}
          aria-controls="panel-challenges"
          id="tab-challenges"
          tabIndex={activeTab === "challenges" ? 0 : -1}
        >
          Issues
        </button>
        <div className="h-[1px] w-[10%] md:w-[60px] border-t border-gray-400" />
        <button
          className={`${
            activeTab === "tech"
              ? "text-black"
              : "text-gray-500 hover:text-black"
          } focus:outline-none focus-visible:ring-2 focus-visible:ring-black rounded px-1`}
          onClick={() => setActiveTab("tech")}
          onKeyDown={(e) => handleKeyDown(e, "tech")}
          role="tab"
          aria-selected={activeTab === "tech"}
          aria-controls="panel-tech"
          id="tab-tech"
          tabIndex={activeTab === "tech" ? 0 : -1}
        >
          TechDetails
        </button>
        <div className="h-[1px] w-[10%] md:w-[60px] border-t border-gray-400" />
        <button
          className={`${
            activeTab === "solutions"
              ? "text-black"
              : "text-gray-500 hover:text-black"
          } focus:outline-none focus-visible:ring-2 focus-visible:ring-black rounded px-1`}
          onClick={() => setActiveTab("solutions")}
          onKeyDown={(e) => handleKeyDown(e, "solutions")}
          role="tab"
          aria-selected={activeTab === "solutions"}
          aria-controls="panel-solutions"
          id="tab-solutions"
          tabIndex={activeTab === "solutions" ? 0 : -1}
        >
          Solutions
        </button>
        <div className="h-[1px] w-[10%] md:w-[60px] border-t border-gray-400" />
        <button
          className={`${
            activeTab === "result"
              ? "text-black"
              : "text-gray-500 hover:text-black"
          } focus:outline-none focus-visible:ring-2 focus-visible:ring-black rounded px-1`}
          onClick={() => setActiveTab("result")}
          onKeyDown={(e) => handleKeyDown(e, "result")}
          role="tab"
          aria-selected={activeTab === "result"}
          aria-controls="panel-result"
          id="tab-result"
          tabIndex={activeTab === "result" ? 0 : -1}
        >
          Result
        </button>
      </div>

      {/* Tab Content */}
      <div 
        className="space-y-4 mt-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-black rounded-lg p-1"
        role="tabpanel"
        id={`panel-${activeTab}`}
        aria-labelledby={`tab-${activeTab}`}
        tabIndex={0}
      >
        {issues.map((issue, index) => (
          <div key={index} className="bg-gray-50 rounded-lg">
            {renderTabContent(issue)}
          </div>
        ))}
      </div>
    </div>
  );
}

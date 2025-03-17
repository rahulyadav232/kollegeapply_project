import { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { FaClock } from "react-icons/fa";

const imageOptions = ["/pic1.png", "/pic2.png", "/pic3.png", "/pic4.png"];

const newsData = Array.from({ length: 16 }, (_, index) => ({
    category: "Admission 2024",
    image: imageOptions[index % 4], // Repeat images every 4 cards
    title: "What is the latest program that you are offering in your institute...",
    description: "Lucknow Public College of Professional Studies...",
    date: "27 Dec 2020",
  }))

function NewsGrid() {
  const [selectedTab, setSelectedTab] = useState("Admission 2024");
  const tabs = ["All News", "College News", "Exam News", "Admission 2024"];

  return (
    <div className="bg-[rgb(220,212,255)] min-h-screen flex flex-col items-center">
      {/* Centered Tabs */}
      <div className="p-6 flex flex-col items-center w-full">
        <div className="flex justify-center w-full">
          <Tabs
            value={selectedTab}
            onChange={(event, newValue) => setSelectedTab(newValue)}
            className="w-[740px] h-[52px] rounded-[16px] bg-white shadow-md"
          >
            {tabs.map((tab) => (
              <Tab
                key={tab}
                label={tab}
                value={tab}
                className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-[16px]"
              />
            ))}
          </Tabs>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 mt-6">
          {newsData.map((news, index) => (
            <Card key={index} className="shadow-md rounded-lg overflow-hidden">
              <img
                src={news.image}
                alt="News"
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold">{news.title}</h3>
                <p className="text-gray-500 text-sm">{news.description}</p>
                <div className="flex items-center text-gray-400 text-sm mt-2">
                        <p className="text-gray-500 text-sm flex items-center"><FaClock className="mr-1" /> 27 Dec 2020</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default NewsGrid
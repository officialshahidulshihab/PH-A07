"use client"

import TimelineContext from "@/Component/Shared/Context/TimlineContext";
import { useContext } from "react";
import { Pie, PieChart, Cell, Tooltip, Legend } from "recharts";

const StatsPage = () => {
  const { checkCall, checkText, checkVideo } = useContext(TimelineContext);


  const data = [
    { name: "Call",  value: checkCall.length,  fill: "#244D3F" },
    { name: "Text",  value: checkText.length,  fill: "#7E35E1" },
    { name: "Video", value: checkVideo.length, fill: "#37A163" },
  ];

  return (
    <div className="w-10/12 mx-auto mt-10 mb-10">
      <h2 className="text-4xl font-bold mb-6">Friendship Analytics</h2>

      <div className="bg-base-100 shadow-sm p-8 flex flex-col items-center">
        <p className="text-xl font-semibold text-[#244D3F] mb-4">
          Interactions Breakdown
        </p>

        <PieChart width={400} height={400}>
          <Pie
          innerRadius={100}
          paddingAngle={8}
          cornerRadius={30}
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={130}
            dataKey="value"
            
          >
            {data.map((entry, index) => (
              <Cell key={index} fill={entry.fill} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>

        
      </div>
    </div>
  );
};

export default StatsPage;
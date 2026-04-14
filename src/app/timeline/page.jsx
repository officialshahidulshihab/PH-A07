"use client";

import TimelineContext from "@/Component/Shared/Context/TimlineContext";
import TimeLineDisplay from "@/Component/TimeLineDisplay";

import { useContext, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const TimeLinePage = () => {
  const { checkCall, checkText, checkVideo } = useContext(TimelineContext);
  const [filter, setFilter] = useState("All");
  const allEntries = [...checkCall, ...checkText, ...checkVideo];
  const filtered =
    filter === "All"
      ? allEntries
      : allEntries.filter((entry) => entry.type === filter);

  console.log(checkCall);
  return (
    <div className="mt-6 w-10/12 mx-auto mb-6">
      <h2 className="text-4xl font-bold mb-3">Timeline</h2>

      <div className="dropdown mb-4">
        <div tabIndex={0} role="button" className="btn m-1">
          {filter} <IoIosArrowDown />
        </div>
        <ul
          tabIndex="0"
          className="dropdown-content menu bg-base-100 rounded-box z-10 w-52 p-2 shadow-sm"
        >
          {["All", "Call", "Text", "Video"].map((type) => (
            <li key={type}  onClick={() => setFilter(type)}
              className={filter === type ? "bg-[#244D3F] text-white" : ""}>
             
              <a>{type}</a>
            </li>
          ))}
        </ul>
      </div>

      <div>
        {filtered.length === 0 ? (
          <p className="text-[#64748B]">No interactions yet.</p>
        ) : (
          filtered.map((entry, ind) => (
            <TimeLineDisplay key={ind} entry={entry} />
          ))
        )}
      </div>
    </div>
  );
};

export default TimeLinePage;

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

      const [search, setSearch]=useState("")
      const searchFilter=search===""? filtered : filtered.filter((entry)=>entry.name.toLowerCase().includes(search.toLocaleLowerCase()))


  return (
    <div className="mt-6 w-10/12 mx-auto mb-6">
      <h2 className="text-4xl font-bold mb-3">Timeline</h2>

      <div className="flex justify-between items-center">
        <div className="dropdown mb-4">
          <div tabIndex={0} role="button" className="btn m-1">
            {filter} <IoIosArrowDown />
          </div>
          <ul
            tabIndex="0"
            className="dropdown-content menu bg-base-100 rounded-box z-10 w-52 p-2 shadow-sm"
          >
            {["All", "Call", "Text", "Video"].map((type) => (
              <li
                key={type}
                onClick={() => setFilter(type)}
                className={filter === type ? "bg-[#244D3F] text-white" : ""}
              >
                <a>{type}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <label className="input">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input onChange={(e)=>setSearch(e.target.value)}  type="search" required placeholder="Search" />
          </label>
        </div>
      </div>

      <div>
        {searchFilter.length === 0 ? (
          <p className="text-[#64748B]">No interactions yet.</p>
        ) : (
          searchFilter.map((entry, ind) => (
            <TimeLineDisplay key={ind} entry={entry} />
          ))
        )}
      </div>
    </div>
  );
};

export default TimeLinePage;

"use client";

import { useContext, useState } from "react";
import { FiPhoneCall } from "react-icons/fi";
import { IoVideocamOutline } from "react-icons/io5";
import { MdOutlineTextsms } from "react-icons/md";
import TimelineContext from "./Shared/Context/TimlineContext";
import toast from "react-hot-toast";

const CallTextVideo = ({ friend }) => {
  const { checkCall, setCheckCall } = useContext(TimelineContext);
  const { checkText, setCheckText } = useContext(TimelineContext);
  const { checkVideo, setCheckVideo } = useContext(TimelineContext);

  const handleBtnCall = () => {
    const entry={
      name:friend.name,
      type:"Call",
      date: new Date().toLocaleDateString()

    }
    const checked=[...checkCall, entry]
    setCheckCall(checked);
    localStorage.setItem("Call", JSON.stringify(checked));
     toast.success(`Call with ${friend.name} logged!`)
  };
  const handleBtnText = () => {
    const entry={
      name:friend.name,
      type:"Text",
      date: new Date().toLocaleDateString()

    }
    const checked=[...checkText, entry]
    setCheckText(checked);
    localStorage.setItem("Text", JSON.stringify(checked));
    toast.success(`Text with ${friend.name} logged!`)
  };
  const handleBtnVideo = () => {
    const entry={
      name:friend.name,
      type:"Video",
      date: new Date().toLocaleDateString()

    }
    const checked=[...checkVideo, entry]
    setCheckVideo(checked);
    localStorage.setItem("Video", JSON.stringify(checked));
    toast.success(`Video with ${friend.name} logged!`)
  };
  return (
    <div className="bg-base-100 shadow-sm p-8 mt-11">
      <p className="text-[#244D3F] mb-3 font-semibold text-xl ">
        Quick Check-In
      </p>
      <div className="flex justify-between">
        <div
          onClick={handleBtnCall}
          className="bg-base-100 shadow-sm px-4 md:px-15 py-3 text-center text-xl cursor-pointer hover:scale-105 active:scale-95 transition-all duration-200"
        >
          <p className="flex justify-center ">
            <FiPhoneCall />
          </p>
          <p>Call</p>
        </div>
        <div
          onClick={handleBtnText}
          className="bg-base-100 shadow-sm px-4 md:px-15 py-3 text-center text-xl cursor-pointer hover:scale-105 active:scale-95 transition-all duration-200"
        >
          <p className="flex justify-center ">
            <MdOutlineTextsms />
          </p>
          <p>Text</p>
        </div>
        <div
          onClick={handleBtnVideo}
          className="bg-base-100 shadow-sm px-4 md:px-15 py-3 text-center text-xl cursor-pointer hover:scale-105 active:scale-95 transition-all duration-200"
        >
          <p className="flex justify-center ">
            <IoVideocamOutline />
          </p>
          <p>Video</p>
        </div>
      </div>
    </div>
  );
};

export default CallTextVideo;

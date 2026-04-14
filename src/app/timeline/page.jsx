"use client";
import Call from "@/Component/Call";
import TimelineContext from "@/Component/Shared/Context/TimlineContext";
import TimeLineDisplay from "@/Component/TimeLineDisplay";
import Video from "@/Component/Video";
import { useContext } from "react";
import { IoIosArrowDown } from "react-icons/io";

const TimeLinePage = () => {
  const { checkCall } = useContext(TimelineContext);
  const { checkText } = useContext(TimelineContext);
  const { checkVideo } = useContext(TimelineContext);
  console.log(checkCall);
  return (
    <div className="mt-6 w-10/12 mx-auto mb-6">
      <h2 className="text-4xl font-bold mb-3">Timeline </h2>
      <div className="dropdown dropdown-center">
        <div tabIndex={0} role="button" className="btn m-1">
          Filter timeline <IoIosArrowDown />
        </div>
        <ul
          tabIndex="-1"
          className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
        >
          <li>
            <a>Text</a>
          </li>
          <li>
            <a>Call</a>
          </li>
          <li>
            <a>Video</a>
          </li>
        </ul>
      </div>
      <div className="mt-3">
        {
            checkText.map((friend, ind)=><TimeLineDisplay key={ind} friend={friend}></TimeLineDisplay>)
        }
      </div>
      <div className="mt-3">
        {
            checkCall.map((friend, ind)=><Call key={ind} friend={friend}></Call>)
        }
      </div>
      <div className="mt-3">
        {
            checkVideo.map((friend, ind)=><Video key={ind} friend={friend}></Video>)
        }
      </div>
      


    </div>
  );
};

export default TimeLinePage;

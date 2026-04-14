"use client"

import { FiPhoneCall } from "react-icons/fi";
import { IoVideocamOutline } from "react-icons/io5";
import { MdOutlineTextsms } from "react-icons/md";


const TimeLineDisplay = ({entry}) => {

   const icon = 
    entry.type === "Call"  ? <FiPhoneCall className="text-3xl" /> :
    entry.type === "Text"  ? <MdOutlineTextsms className="text-3xl" /> :
                             <IoVideocamOutline className="text-3xl" />
    return (
        <div className='bg-base-100 shadow-sm p-5 mt-3 mb-3'>
           <div className="flex gap-2 items-center ">
        {icon}
        <div >
          <p className='text-[#244D3F]'><span className="text-xl font-bold">{entry.type}</span> with {entry.name}</p>
          <p className="text-[#64748B]">{entry.date}</p>
        </div>
      </div>
            
        </div>
    );
};

export default TimeLineDisplay;
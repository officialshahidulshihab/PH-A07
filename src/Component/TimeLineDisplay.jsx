"use client"

import { MdOutlineTextsms } from "react-icons/md";
const date=new Date().toLocaleDateString();

const TimeLineDisplay = ({friend}) => {
    return (
        <div className='bg-base-100 shadow-sm p-5 mt-3 mb-3'>
           <div className="flex gap-2 items-center ">
        <MdOutlineTextsms className="text-3xl" />
        <div >
          <p className='text-[#244D3F]'><span className="text-xl font-bold">Text</span> with {friend.name}</p>
          <p className="text-[#64748B]">{date}</p>
        </div>
      </div>
            
        </div>
    );
};

export default TimeLineDisplay;
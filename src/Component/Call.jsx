import React from "react";
import { FiPhoneCall } from "react-icons/fi";
const date=new Date().toLocaleDateString();

const Call = ({ friend }) => {
  return (
    <div className="bg-base-100 shadow-sm p-5 mt-3 mb-3">
          <div className="flex gap-2 items-center ">
              <FiPhoneCall className="text-3xl" />
              <div>
                <p className='text-[#244D3F]'><span className="text-xl font-bold">Call</span> with {friend.name}</p>
                <p className="text-[#64748B]">{date}</p>
              </div>
            </div>
    </div>
  );
};

export default Call;

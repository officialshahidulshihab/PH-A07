export const metadata = {
  title: "KeenKeeper || FriendDetails",
  description: "Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.",
};


import Image from "next/image";
import friendDetails from "../../../../public/data.json";
import { TbBellZ } from "react-icons/tb";
import { FaBoxArchive } from "react-icons/fa6";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineTextsms } from "react-icons/md";
import { IoVideocamOutline } from "react-icons/io5";
import { FaHistory } from "react-icons/fa";
import CallTextVideo from "@/Component/CallTextVideo";
const FriendDetailsPage = async ({ params }) => {
  const { id } = await params;

  const friendsAll = friendDetails.filter((data) => data.id == id);
  const friend = friendsAll[0];
  const tags = friend.tags;

  const statusClass =
    friend.status === "almost due"
      ? "bg-[#EFAD44]"
      : friend.status === "on-track"
        ? "bg-[#244D3F]"
        : "bg-[#EF4444]";


        
  return (
    <div className="flex flex-col lg:flex-row w-11/12 md:w-9/12 mx-auto gap-10 justify-between">
      {/* Left Side */}
      <div className="mt-10">
        <div className="bg-base-100 lg:w-80 shadow-sm rounded-xl py-3 px-2 space-y-2.5">
          <Image
            src={friend.picture}
            width={100}
            height={100}
            alt={friend.name}
            className="rounded-full mx-auto"
          ></Image>
          <p className="text-2xl font-bold text-center">{friend.name}</p>
          <div className="flex justify-center">
            <div className={`badge text-white ${statusClass} `}>
              {friend.status}
            </div>
          </div>

          <div className="space-x-2 flex justify-center">
            {tags.map((item, ind) => (
              <li className="badge bg-[#CBFADB] text-[#244D3F]" key={ind}>
                {item}
              </li>
            ))}
          </div>
          <p className="text-[12px] font-semibold  text-[#64748B]">{friend.bio}</p>
          <p className="text-[12px] text-[#64748B]">Email : {friend.email}</p>
        </div>
        <div className="mt-3 space-y-3">
          <div>
            <button className="flex items-center gap-1 btn w-full">
              <TbBellZ />
              Snooze 2 weeks
            </button>
          </div>
          <div>
            <button className="flex items-center gap-1 btn w-full">
              <FaBoxArchive />
              Archive
            </button>
          </div>
          <div className="">
            <button className="flex items-center gap-1 btn w-full text-[#EF4444]">
              <RiDeleteBin6Line />
              Delete
            </button>
          </div>
        </div>
      </div>
      {/* Right side */}
      <div className="mt-10">
        {/* Right top */}
        <div className="flex flex-col md:flex-row gap-5">
          <div className="bg-base-100 shadow-sm p-8  text-center w-60">
            <p className="text-[#1F2937] font-bold text-xl">
              {friend.days_since_contact}
            </p>
            <p>Days Since Contact</p>
          </div>
          <div className="bg-base-100 shadow-sm p-8  w-60 text-center">
            <p className="text-[#1F2937] font-bold text-xl">{friend.goal}</p>
            <p>Goal (Days)</p>
          </div>
          <div className="bg-base-100 shadow-sm p-8  w-60 text-center">
            <p className="text-[#1F2937] font-bold text-xl">
              {friend.next_due_date}
            </p>
            <p>Next Due</p>
          </div>
        </div>

        {/* Right middle top */}
        <div className="bg-base-100 shadow-sm p-8 mt-11">
            <div className="flex justify-between items-center">
                <p className="text-[#244D3F] font-bold text-xl ">
                    Relationship Goal
                </p>
                <button className="btn">Edit</button>
            </div>
            <p className="text-[#64748B]">Connect every <span className="font-bold text-[#1F2937]">{friend.goal} days</span></p>

        </div>

        {/* Right middle */}
       <CallTextVideo friend={friend}></CallTextVideo>


        {/* Right end */}

        <div className="bg-base-100 shadow-sm p-5 mt-10">
            <div className="flex justify-between items-center">
                <p className="text-[#244D3F] text-xl font-semibold">Recent Interactions</p>
                <button className="btn flex items-center gap-1"><FaHistory />Full History</button>
            </div>
            <div>
                <div className="flex justify-between mt-3 items-center">
                    <div className="flex gap-2 items-center ">
                        <MdOutlineTextsms className="text-3xl" />
                        <div>
                            <p>Text</p>
                            <p className="text-[#64748B]">Asked for career advice</p>
                        </div>
                        
                    </div>
                    <p>April 2, 2026</p>
                </div>
                <div className="divider"></div>
                <div className="flex justify-between mt-3 items-center">
                    <div className="flex gap-2 items-center ">
                        <FiPhoneCall className="text-3xl" />
                        <div>
                            <p>Meetup</p>
                            <p className="text-[#64748B]">Industry conference meetup</p>
                        </div>
                        
                    </div>
                    <p>April 5, 2026</p>
                </div>
                <div className="divider"></div>
                <div className="flex justify-between mt-3 items-center">
                    <div className="flex gap-2 items-center ">
                        <IoVideocamOutline className="text-3xl" />
                        <div>
                            <p>Video</p>
                            <p className="text-[#64748B]">Asked for career advice</p>
                        </div>
                        
                    </div>
                    <p>April 10, 2026</p>
                </div>
                <div className="divider"></div>
                <div className="flex justify-between mt-3 items-center">
                    <div className="flex gap-2 items-center ">
                        <MdOutlineTextsms className="text-3xl" />
                        <div>
                            <p>Text</p>
                            <p className="text-[#64748B]">Asked for career advice</p>
                        </div>
                        
                    </div>
                    <p>April 12, 2026</p>
                </div>
                <div className="divider"></div>
            </div>

        </div>







      </div>

      
    </div>
  );
};

export default FriendDetailsPage;

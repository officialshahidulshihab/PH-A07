import { IoVideocamOutline } from "react-icons/io5";

const date = new Date().toLocaleDateString();
const Video = ({ friend }) => {
  return (
    <div className="bg-base-100 shadow-sm p-5 mt-3 mb-3">
      <div className="flex gap-2 items-center ">
        <IoVideocamOutline className="text-3xl" />
        <div>
          <p className="text-[#244D3F]">
            <span className="text-xl font-bold">MeetUp</span> with {friend.name}
          </p>
          <p className="text-[#64748B]">{date}</p>
        </div>
      </div>
    </div>
  );
};

export default Video;

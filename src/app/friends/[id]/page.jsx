import Image from "next/image";
import friendDetails from "../../../../public/data.json";
import { TbBellZ } from "react-icons/tb";
import { FaBoxArchive } from "react-icons/fa6";
import { RiDeleteBin6Line } from "react-icons/ri";
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
    <div className="flex w-11/12 mx-auto">
        {/* Left Side */}
      <div className="mt-10">
        <div className="bg-base-100 shadow-sm rounded-2xl py-8 px-2 space-y-2.5">
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

      <div>

      </div>
    </div>
  );
};

export default FriendDetailsPage;

import Image from "next/image";
import Link from "next/link";
import React from "react";

const FriendDisplay = ({ friend }) => {
  const tags = friend.tags;
  

  //   if(friend.status==="almost due"){
  //     const almostDue="bg-[#EFAD44]"
  //   }else if(friend.status==="on-track"){
  //     const onTrack="bg-[#244D3F]"

  //   }else{
  //     const overDue="bg-[#EF4444]"
  //   }

  const statusClass =
    friend.status === "almost due"
      ? "bg-[#EFAD44]"
      : friend.status === "on-track"
        ? "bg-[#244D3F]"
        : "bg-[#EF4444]";

  return (
    <Link href={`/friends/${friend.id}`}>
      <div className="bg-base-100 shadow-sm rounded-2xl py-8 space-y-2.5">
        <Image
          src={friend.picture}
          width={100}
          height={100}
          alt={friend.name}
          className="rounded-full mx-auto"
        ></Image>
        <p className="text-2xl font-bold text-center">{friend.name}</p>
        <p className="text-[#64748B] text-center">
          {" "}
          {friend.days_since_contact}d ago{" "}
        </p>
        <div className="space-x-2 flex justify-center">
          {tags.map((item, ind) => (
            <li className="badge bg-[#CBFADB] text-[#244D3F]" key={ind}>
              {item}
            </li>
          ))}
        </div>

        <div className="flex justify-center">
          <div className={`badge text-white ${statusClass} `}>
            {friend.status}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default FriendDisplay;

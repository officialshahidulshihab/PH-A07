"use client"
import { useContext } from "react";
import friendsData from "../../public/data.json"
import TimelineContext from "./Shared/Context/TimlineContext";

const FriendTap = () => {
    const { checkCall, checkText, checkVideo } = useContext(TimelineContext)
    
    const onTrack=friendsData.filter(data=>data.status==="on-track");
    const needAttention=friendsData.filter(data=>data.status==="overdue");

    const interactionsThisMonth = [...checkCall, ...checkText, ...checkVideo].length
    
    
    return (
        <div>
            <div className="flex flex-col mx-auto md:flex md:flex-row md:justify-between gap-3">
                <div className='bg-base-100 shadow-sm p-8  text-center w-60'>
                    <p className='text-[#1F2937] font-bold text-xl' >{friendsData.length}</p>
                    <p>Total Friends</p>

                </div>
                <div className='bg-base-100 shadow-sm p-8  w-60 text-center'>
                    <p className='text-[#1F2937] font-bold text-xl' >{onTrack.length}</p>
                    <p>On Track</p>

                </div>
                <div className='bg-base-100 shadow-sm p-8  w-60 text-center'>
                    <p className='text-[#1F2937] font-bold text-xl' >{needAttention.length}</p>
                    <p>Need Attention</p>

                </div>
                <div className='bg-base-100 shadow-sm p-8  w-60 text-center'>
                    <p className='text-[#1F2937] font-bold text-xl' >{interactionsThisMonth}</p>
                    <p>Interactions This Month</p>

                </div>
            </div>
            <div className="divider"></div>
        </div>
    );
};

export default FriendTap;
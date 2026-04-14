
import React from 'react';
import { FaPlus } from 'react-icons/fa';

import FriendTap from './FriendTap';
import FriendDisplay from './FriendDisplay';
import friendData from "../../public/data.json"

const Banner = () => {
    
    return (
        <div className='w-11/12 mx-auto'>
            <p className='text-4xl font-bold text-center text-[#1F2937] mt-6 mb-2'>Friends to keep close in your life</p>
            <div className='text-[#64748B] text-center mb-3'>
                <p>Your personal shelf of meaningful connections. Browse, tend, and nurture the</p>
                <p>relationships that matter most.</p>
            </div>
            <div className='flex justify-center mb-6'>
                <button className='btn bg-[#244D3F] text-white'><FaPlus />Add a Friend</button>
            </div>
           <FriendTap></FriendTap>
           <p className='text-2xl font-bold text-[#1F2937] mb-5'>Your friends</p>
           
           <div className='grid grid-cols-4 gap-5 mt-5 mb-5'>
            {
                friendData.map((friend, ind)=><FriendDisplay key={ind} friend={friend}></FriendDisplay>)
            }
           </div>

        </div>
    );
};

export default Banner;
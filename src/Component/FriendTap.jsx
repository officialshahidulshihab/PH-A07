
import friendsData from "../../public/data.json"

const FriendTap = () => {
    
    const onTrack=friendsData.filter(data=>data.status==="on-track");
    const needAttention=friendsData.filter(data=>data.status==="overdue");
    
    
    return (
        <div>
            <div className="flex justify-between">
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
                    <p className='text-[#1F2937] font-bold text-xl' >12</p>
                    <p>Interactions This Month</p>

                </div>
            </div>
            <div className="divider"></div>
        </div>
    );
};

export default FriendTap;
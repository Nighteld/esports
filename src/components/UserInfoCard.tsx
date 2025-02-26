import Image from "next/image";
import Link from "next/link";
import React from "react";

const UserInfoCard = ({ userId }: { userId: string }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
      {/* TOP */}
      <div className="flex justify-between items-center font-medium">
        <span>User Information</span>
        <Link href="/" className="text-blue-500 text-xs">
          See all
        </Link>
      </div>
      {/* BOTTOM */}

      <div className="flex flex-col gap-4 text-gray-500">
        <div className="flex items-center gap-2">
          <span className="text-xl text-black">Nikesh Shrestha</span>
          <span className="text-sm">@Nikesh </span>
        </div>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos saepe
          obcaecati ut vel hic temporibus earum nobis error eaque dolore in
          dolorem doloremque optio porro, nemo id accusantium atque libero?
        </p>
        <div className="flex items-center gap-2">
          <Image src="/map.png" alt="" width={16} height={16} />
          <span>
            Living in <b>Australia</b>
          </span>
        </div>

        <div className="flex items-center gap-2">
          <Image src="/school.png" alt="" width={16} height={16} />
          <span>
            Went to <b>Everest International College</b>
          </span>
        </div>

        <div className="flex items-center gap-2">
          <Image src="/work.png" alt="" width={16} height={16} />
          <span>
            Works at <b>Arhant solutions.</b>
          </span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex gap-1 items-center">
            <Image src="/link.png" alt="" width={16} height={16} />
            <Link href="asdasd" className="text-blue-500 font-medium">
              Nikesh
            </Link>
          </div>
          <div className="flex gap-1 items-center">
            <Image src="/date.png" alt="" width={16} height={16} />
            <span>Joined March 1997</span>
          </div>
        </div>
        <button className="bg-blue-500 text-white text-sm rounded-md p-2">
          Follow
        </button>
        <span className="text-red-400 self-end text-xs cursor-pointer">
          Block User
        </span>
      </div>
    </div>
  );
};

export default UserInfoCard;

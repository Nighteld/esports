import Image from "next/image";
import React from "react";

const Comments = () => {
  return (
    <div>
      {/* WRITE */}
      <div className="flex items-center gap-4">
        <Image
          src="https://images.pexels.com/photos/20994226/pexels-photo-20994226/free-photo-of-woman-standing-by-bench-on-lakeshore.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          width={32}
          height={32}
          className="w-8 h-8 rounded-full"
          alt=""
        />
        <div className="flex-1 flex items-center justify-between bg-slate-100 rounded-xl text-sm px-6 py-2 w-full ">
          <input
            type="text"
            className="bg-transparent outline-none flex-1"
            placeholder="Write a comment..."
          />
          <Image
            src="/emoji.png"
            width={16}
            height={16}
            className="cursor-pointer"
            alt=""
          />
        </div>
      </div>
      {/* COMMENTS */}
      <div className="flex gap-4 justify-between mt-6">
        {/* AVATAR */}
        <Image
          src="https://images.pexels.com/photos/20994226/pexels-photo-20994226/free-photo-of-woman-standing-by-bench-on-lakeshore.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          width={40}
          height={40}
          className="w-10 h-10 rounded-full"
          alt=""
        />
        {/* DESC */}
        <div className="flex flex-col gap-2 flex-1">
          <span className="font-medium">John Doe</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
            voluptatibus, ipsum, enim dicta vero harum deleniti quae autem
            placeat modi adipisci excepturi qui non cupiditate nam alias
            provident minus dolor!
          </p>
          <div className="flex items-center gap-8 text-xs text-gray-500 mt-2">
            <div className="flex items-center gap-4">
              <Image
                src="/like.png"
                alt=""
                width={12}
                height={12}
                className="cursor-pointer w-4 h-4"
              />
              <span className="text-gray-300">|</span>
              <span className="text-gray-500">123 Likes</span>
              <div className="">Reply</div>
            </div>
          </div>
        </div>

        {/* ICON */}
        <Image
          src="/more.png"
          alt=""
          width={16}
          height={16}
          className="cursor-pointer w-4 h-4"
        />
      </div>
    </div>
  );
};

export default Comments;

import React from "react";
import Image from "next/image";
import Comments from "./Comments";

export default function Post() {
  return (
    <div className="flex flex-col gap-4">
      {/* USER */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            alt="post"
            src="https://images.pexels.com/photos/26857128/pexels-photo-26857128/free-photo-of-purple-anthurium.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="w-10 h-10 rounded-full"
            width={40}
            height={40}
          />
          <span className="font-medium">Jim Morision</span>
        </div>
        <Image
          alt="post"
          src="/more.png"
          // className="w-10 h-10 rounded-full"
          width={16}
          height={16}
        />
      </div>
      {/* DESC */}
      <div className="flex flex-col gap-4">
        <div className="w-full min-h-96 relative">
          <Image
            alt="post"
            src="https://images.pexels.com/photos/20185297/pexels-photo-20185297/free-photo-of-cafe-text-on-cafe-window.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="object-cover rounded-md"
            fill
          />
        </div>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. At magni
          dolores mollitia dicta? Omnis, dicta consequatur repellendus ducimus
          assumenda quisquam perspiciatis, consectetur voluptas error ratione
          maiores autem necessitatibus reiciendis vitae.
        </p>
      </div>
      {/* INTERACTION */}
      <div className="flex items-center justify-between text-sm my-4">
        <div className="flex gap-8">
          <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
            <Image
              alt="post"
              className="cursor-pointer"
              src="/like.png"
              width={16}
              height={16}
            />
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">
              123 <span className="hidden md:inline"> Likes</span>
            </span>
          </div>
          <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
            <Image
              alt="post"
              className="cursor-pointer"
              src="/comment.png"
              width={16}
              height={16}
            />
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">
              123 <span className="hidden md:inline"> Comments</span>
            </span>
          </div>
        </div>
        <div className="">
          <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
            <Image
              alt="share"
              className="cursor-pointer"
              src="/share.png"
              width={16}
              height={16}
            />
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">
              123 <span className="hidden md:inline"> Share</span>
            </span>
          </div>
        </div>
      </div>
      <Comments/>
    </div>
  );
}

import Image from "next/image";
import React from "react";

const Ads = ({ size }: { size: "sm" | "md" | "lg" }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm ">
      {/* TOP */}
      <div className="flex items-center justify-between text-gray-500 font-medium">
        <span>Sponsored Ads</span>
        <Image src="/more.png" height={16} width={16} alt="" />
      </div>
      {/* BOTTOM */}
      <div
        className={`flex flex-col mt-4 ${size === "sm" ? "gap-2" : "gap-4"}`}
      >
        <div
          className={`relative w-full ${
            size === "sm" ? "h-24" : size === "md" ? "h-36" : "h-48"
          }`}
        >
          <Image
            src="https://images.pexels.com/photos/15740861/pexels-photo-15740861/free-photo-of-couple-at-scenic-viewpoint-overlooking-mountains.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            fill
            alt=""
            className="rounded-lg object-cover"
          />
        </div>
        <div className="flex items-center gap-4">
          <Image
            src="https://images.pexels.com/photos/15740861/pexels-photo-15740861/free-photo-of-couple-at-scenic-viewpoint-overlooking-mountains.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            width={24}
            height={24}
            alt=""
            className="rounded-full w-6 h-6 object-cover"
          />
          <span className="text-blue-500 font-medium">Hena Maharjan</span>
        </div>
        <p className={size === "sm" ? "text-xs" : "text-sm"}>
          {size === "sm"
            ? "Lorem ipsum hello testing 123"
            : size === "md"
            ? "Lorem ipsum hello testing 123 medium"
            : "Lorem ipsum hello testing 123 with veryasdsaasdasdasdasd"}
        </p>
        <button className="bg-gray-200 text-gray-500 p-2 text-xs rounded-lg">
          Learn more
        </button>
      </div>
    </div>
  );
};

export default Ads;

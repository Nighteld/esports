import React from "react";
import ProfileCard from "./ProfileCard";
import Link from "next/link";
import Image from "next/image";
import Ads from "./Ads";

export default function LeftMenu({ type }: { type: "home" | "profile" }) {
  const menuItems = [
    { label: "Home", href: "/", src: "/posts.png" },
    { label: "Activity", href: "/profile", src: "/activity.png" },
    { label: "Marketplace", href: "/settings", src: "/market.png" },
    { label: "Events", href: "/help", src: "/events.png" },
    { label: "Albums", href: "/logout", src: "/albums.png" },
    { label: "Videos", href: "/logout", src: "/videos.png" },
    { label: "News", href: "/logout", src: "/news.png" },
    { label: "Courses", href: "/logout", src: "/courses.png" },
    { label: "Lists", href: "/logout", src: "/lists.png" },
    { label: "settings", href: "/logout", src: "/settings.png" },
  ];
  return (
    <div className="flex flex-col gap-6">
      {type === "home" && <ProfileCard />}
      <div className="p-4 bg-white rounded-lg shadow-md text-sm text-gray-500 flex flex-col gap-2">
        {menuItems.map((item, index) => (
          <React.Fragment key={index}>
            <Link
              href={item.href}
              className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100"
            >
              <Image src={item.src} alt="" width={20} height={20} />
              <span>{item.label}</span>
            </Link>
            <hr className="border-t-1 border-gray-50 w-36 self-center" />
          </React.Fragment>
        ))}
      </div>
      <Ads size="sm" />
    </div>
  );
}

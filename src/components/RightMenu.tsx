import React from "react";
import FriendRequest from "./FriendRequest";
import Birthdays from "./Birthdays";
import Ads from "./Ads";
import UserInfoCard from "./UserInfoCard";
import UserMediaCard from "./UserMediaCard";

export default function RightMenu({ userId }: { userId?: string }) {
  return (
    <div className="flex flex-col gap-6">
      {userId ? (
        <>
          <UserInfoCard userId={userId} />
          <UserMediaCard userId={userId} />
        </>
      ) : null}
      <FriendRequest />
      <Birthdays />
      <Ads size="md" />
    </div>
  );
}

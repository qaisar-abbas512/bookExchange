import React from "react";
import Header from "../../components/header/Header";
import ExploreBook from "../../components/shared/ExploreBook";
import UsersChat from "../../components/chat/UsersChat";

const Chat = () => {
  return (
    <>
      <div className="position-sticky top-0 z-3">
        <Header />
      </div>
      <div className="container px-5">
        <ExploreBook
          title={"Exchange your books"}
          content={
            "Chat with the owner/seeker to confirm your dates, places or any source of exchange."
          }
        />

        <div className="w-100">
          <UsersChat />
        </div>
      </div>
    </>
  );
};

export default Chat;

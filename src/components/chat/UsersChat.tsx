import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./ChatComponent.css";

// A complete responsive chat component integrating the React and CSS files
const UsersChat = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [message, setMessage] = useState("");
  const [activeChat, setActiveChat] = useState(3);

  // Sample data for chat list
  const chatList = [
    {
      id: 1,
      bookName: "Book Name",
      ownerName: "Owner Name",
      preview: "Lorem ipsum dolor sit amet consecte...",
      date: "01 Feb, 2024",
      unread: false,
    },
    {
      id: 2,
      bookName: "Book Name",
      ownerName: "Owner Name",
      preview: "Lorem ipsum dolor sit amet consecte...",
      date: "01 Feb, 2024",
      unread: false,
    },
    {
      id: 3,
      bookName: "Book Name",
      ownerName: "Owner Name",
      preview: "Lorem ipsum dolor sit amet consecte...",
      date: "01 Feb, 2024",
      unread: true,
    },
    {
      id: 4,
      bookName: "Book Name",
      ownerName: "Owner Name",
      preview: "Lorem ipsum dolor sit amet consecte...",
      date: "01 Feb, 2024",
      unread: true,
    },
    {
      id: 5,
      bookName: "Book Name",
      ownerName: "Owner Name",
      preview: "Lorem ipsum dolor sit amet consecte...",
      date: "01 Feb, 2024",
      unread: false,
    },
  ];

  // Sample messages for active chat
  const messages = [
    {
      id: 1,
      sender: "You",
      text: "Lorem ipsum dolor sit amet consectetur. Sit nunc purus suscipit pharetra sed sollicitudin et quis massa. Dignissim natoque nunc odio enim risus.Lorem ipsum dolor sit amet consectetur. Sit nunc purus suscipit pharetra sed sollicitudin et quis massa. Dignissim natoque nunc odio enim risus.",
      isOwn: true,
    },
    {
      id: 2,
      sender: "Owner",
      text: "Lorem ipsum dolor sit amet consectetur. Sit nunc purus suscipit pharetra sed sollicitudin et quis massa. Dignissim natoque nunc odio enim risus.Lorem ipsum dolor sit amet consectetur. Sit nunc purus suscipit pharetra sed sollicitudin et quis massa. Dignissim natoque nunc odio enim risus.",
      isOwn: false,
    },
  ];

  const handleSendMessage = () => {
    if (message.trim()) {
      // In a real app, you would add the message to your state or send to backend
      console.log("Sending message:", message);
      setMessage("");
    }
  };

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const selectChat = (id: React.SetStateAction<number>) => {
    setActiveChat(id);
    if (window.innerWidth < 768) {
      setShowSidebar(false);
    }
  };

  return (
    <div className="container-fluid p-0  border rounded-3">
      <div className="row g-0 chatWrapper">
        {/* Sidebar toggle button for mobile */}
        <div className="d-md-none position-fixed start-0 top-50 translate-middle-y z-3">
          <button
            className="btn btn-primary rounded-end"
            onClick={toggleSidebar}
            style={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-chat-left-text"
              viewBox="0 0 16 16"
            >
              <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
              <path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6zm0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z" />
            </svg>
          </button>
        </div>

        {/* Backdrop for mobile sidebar */}
        <div
          className={`sidebar-backdrop ${showSidebar ? "show" : ""}`}
          onClick={toggleSidebar}
        ></div>

        {/* Left sidebar - Chat list */}
        <div
          className={`col-md-4 col-lg-3 d-flex flex-column bg-light sidebar chatWrapper ${
            showSidebar ? "show" : ""
          }`}
        >
          <div className="d-flex justify-content-between align-items-center p-3 ">
            <h5 className="mb-0">Chats</h5>
            <div className="chat-count">03</div>
          </div>

          <div className="search-container pb-3 border-bottom">
            <div className="input-group">
              <span className="input-group-text bg-white border-end-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-search"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
              </span>
              <input
                type="text"
                className="form-control border-start-0"
                placeholder="Search"
              />
            </div>
          </div>

          <div className="chat-list flex-grow-1 overflow-auto">
            {chatList.map((chat) => (
              <div
                key={chat.id}
                className={`chat-item p-3 border-bottom ${
                  chat.id === activeChat ? "active" : ""
                }`}
                onClick={() => selectChat(chat.id)}
              >
                <div className="d-flex align-items-start">
                  <div className="avatar-container me-2">
                    <div className="avatar">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="bi bi-person"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
                      </svg>
                    </div>
                  </div>
                  <div className="chat-info flex-grow-1">
                    <div className="d-flex justify-content-between">
                      <h6 className="mb-0">{chat.bookName}</h6>
                      <small className="text-muted">{chat.date}</small>
                    </div>
                    <div className="owner-name text-muted">
                      {chat.ownerName}
                    </div>
                    <div className="message-preview text-truncate">
                      {chat.preview}
                    </div>
                  </div>
                </div>
                {chat.unread && <div className="unread-indicator"></div>}
              </div>
            ))}
          </div>
        </div>

        {/* Right side - Active chat */}
        <div className="col-md-8 col-lg-9 d-flex flex-column chat-content chatWrapper">
          <div className="chat-header p-3 border-bottom d-flex align-content-center justify-content-between">
            <div className="d-flex align-items-center">
              <div className="d-md-none me-2">
                <button
                  className="btn btn-sm btn-outline-secondary"
                  onClick={toggleSidebar}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-list"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                    />
                  </svg>
                </button>
              </div>
              <div className="avatar-container me-2">
                <div className="avatar">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-person"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
                  </svg>
                </div>
              </div>
              <div>
                <h6 className="mb-0">Book Name</h6>
                <div className="owner-name text-muted">Owner Name</div>
              </div>
            </div>
            <button className="border-0 bg-transparent">
              <img src="./images/red-trash-icon.svg" alt="delete chat" />
            </button>
          </div>

          <div className="messages-container flex-grow-1 p-3 overflow-auto">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`message-wrapper ${
                  msg.isOwn ? "own-message" : "other-message"
                }`}
              >
                <div className="message-bubble">
                  <div className="message-sender d-flex align-items-center mb-1">
                    <div className="avatar-container me-2">
                      <div className="avatar avatar-sm">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-person"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
                        </svg>
                      </div>
                    </div>
                    <span>{msg.sender}</span>
                  </div>
                  <div className="message-text">{msg.text}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="chat-input-container p-3">
            <div className="d-flex align-items-center">
              <input
                type="text"
                className="form-control me-2"
                placeholder="Talk about books..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
              />
              <button
                type="button"
                className="btn btn-light send-button"
                onClick={handleSendMessage}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="currentColor"
                  className="bi bi-send"
                  viewBox="0 0 16 16"
                >
                  <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsersChat;

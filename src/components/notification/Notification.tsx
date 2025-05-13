import { useState } from "react";
import { Dropdown } from "react-bootstrap";

const NotificationDropdown = () => {
  const [show, setShow] = useState(false);

  const toggleDropdown = () => setShow(!show);
  const closeDropdown = () => setShow(false);

  return (
    <Dropdown align="end" show={show} onToggle={setShow}>
      <Dropdown.Toggle
        id="notification-dropdown"
        onClick={toggleDropdown}
        className="btnNotification"
      >
        <img src="/images/bell-icon.svg" alt="notification" />
      </Dropdown.Toggle>

      <Dropdown.Menu
        className="p-3"
        style={{ width: "407px", borderRadius: "8px" }}
      >
        <div className="d-flex justify-content-between align-items-center mb-2">
          <strong>Notifications</strong>
          <button
            className="btn-close"
            aria-label="Close"
            onClick={closeDropdown}
          />
        </div>
        <div className="d-flex mb-2">
          <button className="btnAllread me-2">All</button>
          <button className="border-0 bg-transparent">Unread</button>
        </div>
        <hr />
        {/* Example notifications */}
        <div className="notificationMenu">
          {/* {[...Array(5)].map((_, i) => ( */}
          <div className="d-flex align-items-start mb-2">
            <span className="me-2">
              <img src="/images/flam-icon.svg" alt="new" />
            </span>
            <div>
              <div className="fw-bold">New Request</div>
              <small>Rupi Kaur</small>
            </div>
          </div>
          <div className="d-flex align-items-start mb-2">
            <span className="me-2">
              <img src="/images/flam-icon.svg" alt="new" />
            </span>
            <div>
              <div className="fw-bold">New Request</div>
              <small>Rupi Kaur</small>
            </div>
          </div>
          <div className="d-flex align-items-start mb-2">
            <span className="me-2">
              <img src="/images/chat-icon.svg" alt="new" />
            </span>
            <div>
              <div className="fw-bold">New Message</div>
              <small>Rupi Kaur</small>
            </div>
          </div>
          <div className="d-flex align-items-start mb-2">
            <span className="me-2">
              <img src="/images/chat-icon.svg" alt="new" />
            </span>
            <div>
              <div className="fw-bold">New Message</div>
              <small>Rupi Kaur</small>
            </div>
          </div>
          <div className="d-flex align-items-start mb-2">
            <span className="me-2">
              <img src="/images/chat-icon.svg" alt="new" />
            </span>
            <div>
              <div className="fw-bold">New Message</div>
              <small>Rupi Kaur</small>
            </div>
          </div>
          {/* ))} */}
        </div>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default NotificationDropdown;

import { useState } from "react";
import { Dropdown } from "react-bootstrap";

const NotificationDropdown = () => {
  const [show, setShow] = useState(false);

  const toggleDropdown = () => setShow(!show);
  const closeDropdown = () => setShow(false);

  return (
    <Dropdown align="end" show={show} onToggle={setShow}>
      <Dropdown.Toggle
        variant="light"
        id="notification-dropdown"
        onClick={toggleDropdown}
      >
        🔔
      </Dropdown.Toggle>

      <Dropdown.Menu className="p-3" style={{ width: "300px" }}>
        <div className="d-flex justify-content-between align-items-center mb-2">
          <strong>Notifications</strong>
          <button
            className="btn-close"
            aria-label="Close"
            onClick={closeDropdown}
          />
        </div>

        <div className="d-flex mb-2">
          <button className="btn btn-sm btn-primary me-2">All</button>
          <button className="btn btn-sm btn-outline-secondary">Unread</button>
        </div>

        {/* Example notifications */}
        <div>
          {[...Array(5)].map((_, i) => (
            <div key={i} className="d-flex align-items-start mb-2">
              <span className="me-2">🔥</span>
              <div>
                <div className="fw-bold">New Request</div>
                <small>Rupi Kaur</small>
              </div>
            </div>
          ))}
        </div>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default NotificationDropdown;

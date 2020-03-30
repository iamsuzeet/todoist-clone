import React from 'react';
import {
  FaChevronDown,
  FaInbox,
  FaRegCalendarAlt,
  FaRegCalendar,
} from 'react-icons/fa';

export const Sidebar = () => (
  <div className="sidebar" data-testid="sidebar">
    <ul className="sidebar__generic">
      <li>
        <span>
          <FaInbox />
        </span>
        Inbox
      </li>
      <li>
        <span>
          <FaRegCalendar />
        </span>
        Today
      </li>
      <li>
        <span>
          <FaRegCalendarAlt />
        </span>
        Next 7 days
      </li>
    </ul>
    <div className="sidebar__middle">
      <span>
        <FaChevronDown />
      </span>
      <h2>Project</h2>
    </div>
    <ul className="sidebar__projects">Projects will be here!</ul>
    Add Project component!
  </div>
);

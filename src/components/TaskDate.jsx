import React from 'react';
import { FaSpaceShuttle, FaSun, FaRegPaperPlane } from 'react-icons/fa';
import moment from 'moment';

export const TaskDate = ({ setTaskDate, showTaskDate, setShowTaskDate }) => {
  return (
    showTaskDate && (
      <div className="task-date" data-testid="task-date-overlay">
        <ul className="task-date__list">
          <li
            className=""
            onClick={() => {
              setShowTaskDate(false);
              setTaskDate(moment().format('DD/MM/YYYY'));
            }}
            data-testid="task-date-overlay"
          >
            <div>
              <span>
                <FaSpaceShuttle />
              </span>
              <span>Today</span>
            </div>
          </li>

          <li
            className=""
            onClick={() => {
              setShowTaskDate(false);
              setTaskDate(moment().add(1, 'day').format('DD/MM/YYYY'));
            }}
            data-testid="task-date-tomorrow"
          >
            <div>
              <span>
                <FaSun />
              </span>
              <span>Tomorrow</span>
            </div>
          </li>

          <li
            className=""
            onClick={() => {
              setShowTaskDate(false);
              setTaskDate(moment().add(7, 'days').format('DD/MM/YYYY'));
            }}
            data-testid="task-date-next-week"
          >
            <div>
              <span>
                <FaRegPaperPlane />
              </span>
              <span>Next week</span>
            </div>
          </li>
        </ul>
      </div>
    )
  );
};

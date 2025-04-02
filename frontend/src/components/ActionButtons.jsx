// ActionButtons.jsx
import React from "react";

const ActionButtons = ({ onIncrease, onDecrease, onConfirm }) => {
  return (
    <div className="action-buttons">
      <button className="action-button" onClick={onDecrease}>-</button>
      <button className="action-button" onClick={onIncrease}>+</button>
      <button className="action-button" onClick={onConfirm}>Confirm</button>

      <style jsx>{`
        .action-buttons {
          display: flex;
          justify-content: space-between;
          padding: 0;
          gap: 24px;
        }

        .action-button {
          flex: 1;
          padding: 16px;
          min-height: 72px;
          font-size: 24px;
          background-color: #00664f;
          color: white;
          border: none;
          border-radius: 12px;
          cursor: pointer;
          transition: background-color 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .action-button:hover {
          background-color: #004d3f;
        }

        @media (max-width: 480px) {
          .action-buttons {
            gap: 16px;
          }
          
          .action-button {
            padding: 14px;
            min-height: 64px;
            font-size: 22px;
          }
        }
      `}</style>
    </div>
  );
};

export default ActionButtons;


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
          justify-content: center;
          gap: 10px;
          margin-top: 20px;
        }

        .action-button {
          padding: 10px 20px;
          font-size: 16px;
          background-color: #00664f;
          color: white;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .action-button:hover {
          background-color: #004d3f;
        }

        @media (max-width: 480px) and (min-height: 800px) {
          .action-button {
            font-size: 14px;
            padding: 6px 12px;
          }
        }
      `}</style>
    </div>
  );
};

export default ActionButtons;


// ActionButtons.jsx
import React from "react";

const ActionButtons = () => {
  return (
    <div className="action-buttons">
      <button className="action-button">-</button>
      <button className="action-button">+</button>
      <button className="action-button">Confirm</button>

      <style jsx>{`
        .action-buttons {
          display: flex;
          justify-content: space-between; /* Ensure buttons are spread out */
          gap: 10px; /* Space between the buttons */
        }

        .action-button {
          padding: 8px 16px; /* Reduced padding for smaller buttons */
          font-size: 14px; /* Smaller font size */
          background-color: #00664f;
          color: white;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .action-button:hover {
          background-color: #004d3f; /* Slightly darker green on hover */
        }

        @media (max-width: 480px) and (min-height: 800px) {
          .action-buttons {
            flex-wrap: nowrap; /* Prevent buttons from stacking */
            width: 100%; /* Ensure the buttons stretch to fit the container */
            justify-content: space-between; /* Keep buttons in a row */
          }

          .action-button {
            font-size: 14px; /* Further reduce font size for smaller screens */
            padding: 6px 12px; /* Even smaller padding for the buttons */
          }
        }
      `}</style>
    </div>
  );
};

export default ActionButtons;


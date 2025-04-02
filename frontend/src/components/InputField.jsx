// InputField.jsx
import React from "react";

const InputField = ({ text, volume, isActive, isConfirmed, onClick }) => {
  return (
    <div
      className={`input-field ${isActive ? "active" : ""}`}
      onClick={onClick}
    >
      <div className="input-text">
        {text} <strong>{volume} ml</strong>
      </div>
      {isConfirmed && (
        <div className="check-icon">
          <i className="ti ti-check" />
        </div>
      )}

      <style jsx>{`
        .input-field {
          flex: 1;
          background-color: #f5f5f5;
          border-radius: 12px;
          padding: 20px 18px;
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 18px;
          color: #333;
          display: flex;
          justify-content: space-between;
          align-items: center;
          cursor: pointer;
          transition: 0.3s ease;
          min-height: 72px;
        }

        .input-field.active {
          border: 3px solid #00664f;
          background-color: #e6f9f3;
        }

        .input-text {
          display: flex;
          gap: 10px;
          align-items: center;
        }

        .check-icon {
          color: #00664f;
          font-size: 24px;
          margin-left: 10px;
        }

        @media (max-width: 480px) {
          .input-field {
            padding: 18px 16px;
            font-size: 16px;
            min-height: 68px;
          }
        }
      `}</style>
    </div>
  );
};

export default InputField;

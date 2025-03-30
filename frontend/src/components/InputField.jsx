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
          border-bottom-right-radius: 8px;
          border-top-right-radius: 8px;
          border-bottom-left-radius: 0px;
          border-top-left-radius: 0px;
          padding: 12px 16px;
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 16px;
          color: #333;
          display: flex;
          justify-content: space-between;
          align-items: center;
          cursor: pointer;
          transition: 0.3s ease;
        }

        .input-field.active {
          border: 2px solid #00664f;
          background-color: #e6f9f3;
        }

        .check-icon {
          color: #00664f;
        }
      `}</style>
    </div>
  );
};

export default InputField;

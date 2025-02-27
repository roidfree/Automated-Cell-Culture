// InputField.jsx
import React from "react";

const InputField = ({ text, hasCheck, variant }) => {
  return (
    <div className={`input-field ${variant}`}>
      <div className="input-text">{text}</div>
      {hasCheck && (
        <div className="check-icon">
          <i className="ti ti-check" />
        </div>
      )}
      <style jsx>{`
        .input-field {
          flex: 1;
          background-color: #f5f5f5;
          padding: 12px 16px;
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 16px;
          color: #333;
          border-top-right-radius: 8px;
          border-bottom-right-radius: 8px;
          display: flex;
          align-items: center;
          height: 40px; /* Ensure consistent height with color block */
        }

        .input-field.with-check {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .check-icon {
          color: #00664f;
        }

        @media (max-width: 480px) and (min-height: 800px) {
          .input-field {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default InputField;

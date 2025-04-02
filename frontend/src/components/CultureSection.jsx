import React from "react";

const CultureSection = ({ onStart }) => {
  return (
    <section className="culture-section">
      <h2 className="culture-text">Begin cell Culture</h2>
      <button className="start-button" onClick={onStart}>Start</button>
      <style jsx>{`
        .culture-section {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
          padding-top: 24px;
        }
        .culture-text {
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 24px;
          font-weight: 600;
          color: #333;
          margin: 0;
        }
        .start-button {
          background-color: #00664f;
          color: white;
          border: none;
          border-radius: 12px;
          padding: 20px;
          width: 100%;
          max-width: 400px;
          min-height: 72px;
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 22px;
          font-weight: 600;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .start-button:hover {
          background-color: #004d3f;
        }

        @media (max-width: 480px) {
          .culture-section {
            gap: 16px;
            padding-top: 20px;
          }
          .culture-text {
            font-size: 20px;
          }
          .start-button {
            min-height: 64px;
            padding: 16px;
            font-size: 20px;
          }
        }
      `}</style>
    </section>
  );
};

export default CultureSection;

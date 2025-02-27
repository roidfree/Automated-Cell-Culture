import React from "react";

const CultureSection = () => {
  return (
    <section className="culture-section">
      <h2 className="culture-text">Begin cell Culture</h2>
      <button className="start-button">Start</button>
      <style jsx>{`
        .culture-section {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
          margin-top: 24px;
        }
        .culture-text {
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 20px;
          font-weight: 600;
          color: #333;
          margin: 0;
        }
        .start-button {
          background-color: #00664f;
          color: white;
          border: none;
          border-radius: 8px;
          padding: 12px 48px;
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
        }
      `}</style>
    </section>
  );
};

export default CultureSection;


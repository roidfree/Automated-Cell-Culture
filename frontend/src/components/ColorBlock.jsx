import React from "react";

const ColorBlock = ({ color }) => {
  return (
    <div className={`color-block ${color}`}>
      <style jsx>{`
        .color-block {
          width: 40px;
          height: 45;
          border-bottom-right-radius: 0px;
          border-top-right-radius: 0px;
          border-bottom-left-radius: 8px;
          border-top-left-radius: 8px;
          display:flex;
          align-items:center;
          justify-content:center;

        }
        .purple {
          background-color: #4f46e5;
        }
        .orange {
          background-color: #ffa07a;
        }
        .pink {
          background-color: #ff69b4;
        }
        @media (max-width: 640px) {
          .color-block {
            margin-bottom: 0x;
          }
        }
      `}</style>
    </div>
  );
};

export default ColorBlock;

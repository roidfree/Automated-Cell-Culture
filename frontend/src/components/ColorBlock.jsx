import React from "react";

const ColorBlock = ({ color }) => {
  return (
    <div className={`color-block ${color}`}>
      <style jsx>{`
        .color-block {
          width: 24px;
          height: 24px;
          border-radius: 4px;
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

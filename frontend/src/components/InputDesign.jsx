// InputDesign.jsx
import React from "react";
import ColorBlock from "./ColorBlock";
import InputField from "./InputField";
import ActionButtons from "./ActionButtons";
import CultureSection from "./CultureSection";

const InputDesign = () => {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/dist/tabler-icons.min.css"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600&display=swap"
        rel="stylesheet"
      />
      <main className="app-container">
        <article className="content-card">
          <h1 className="header">Start a new culture</h1>

          <div className="input-group">
            <ColorBlock color="purple" />
            <InputField text="Enter a volume of PBS:" />
          </div>

          <div className="input-group">
            <ColorBlock color="orange" />
            <InputField
              text="Enter a volume of Trypsin:"
              hasCheck={true}
              variant="with-check"
            />
          </div>

          <div className="input-group">
            <ColorBlock color="pink" />
            <InputField
              text="Enter a volume of Medium:"
              hasCheck={true}
              variant="with-check"
            />
          </div>

          <ActionButtons />
          <CultureSection />
        </article>
      </main>

      <style jsx>{`
        .app-container {
          width: 100%;
          min-height: 100vh;
          background-color: #00664f;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 20px;
        }

        .content-card {
          background-color: white;
          border-radius: 32px;
          padding: 32px;
          max-width: 1000px;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .header {
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 24px;
          font-weight: 600;
          margin: 0 0 20px 0;
          text-align: center;
        }

        .input-group {
          display: flex;
          align-items: center; /* Align both elements vertically */
          gap: 16px;
          margin-bottom: 16px;
        }

        .color-block {
          height: 40px; /* Ensuring the color block has the same height */
          width: 60px;
          border-top-right-radius: 0;
          border-bottom-right-radius: 0;
          border-top-left-radius: 8px;
          border-bottom-left-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        @media (max-width: 480px) and (min-height: 800px) {
          .content-card {
            padding: 24px;
            max-width: 480px;
          }

          .input-group {
            gap: 10px; /* Space between the color block and input field */
          }
        }
      `}</style>
    </>
  );
};

export default InputDesign;
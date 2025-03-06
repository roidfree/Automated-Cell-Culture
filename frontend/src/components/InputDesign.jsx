import React, { useState } from "react";
import ColorBlock from "./ColorBlock";
import InputField from "./InputField";
import ActionButtons from "./ActionButtons";
import CultureSection from "./CultureSection";

const InputDesign = () => {
  const [activeChemical, setActiveChemical] = useState(null);
  const [volumes, setVolumes] = useState({
    PBS: 0,
    Trypsin: 0,
    Medium: 0,
  });

  const [confirmed, setConfirmed] = useState({
    PBS: false,
    Trypsin: false,
    Medium: false,
  });

  const handleIncrease = () => {
    if (activeChemical) {
      setVolumes((prev) => ({
        ...prev,
        [activeChemical]: prev[activeChemical] + 1,
      }));
    }
  };

  const handleDecrease = () => {
    if (activeChemical && volumes[activeChemical] > 0) {
      setVolumes((prev) => ({
        ...prev,
        [activeChemical]: prev[activeChemical] - 1,
      }));
    }
  };

  const handleConfirm = () => {
    if (activeChemical) {
      setConfirmed((prev) => ({
        ...prev,
        [activeChemical]: !prev[activeChemical], // Toggle confirmation state
      }));
    }
  };

  // Function to send the confirmed volumes to Flask when "Start" is clicked
  const handleStartCellCulture = async () => {
    // Check if all chemicals have been confirmed
    if (!confirmed.PBS || !confirmed.Trypsin || !confirmed.Medium) {
      alert("Please confirm all volumes before starting the culture.");
      return;
    }

    const confirmedVolumes = {
      PBS: volumes.PBS,
      Trypsin: volumes.Trypsin,
      Medium: volumes.Medium,
    };

    // Send the confirmed volumes to the backend (Flask)
    try {
      const response = await fetch("http://127.0.0.1:5000/start_culture", { 
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(confirmedVolumes),
      });

      if (!response.ok) {
        throw new Error("Failed to start the cell culture.");
      }

      const data = await response.json();
      console.log("Backend Response:", data);
      alert("Cell culture started successfully!");
    } catch (error) {
      console.error("Error:", error);
      alert("There was an error while communicating with the backend.");
    }
  };

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

          {/* PBS Input */}
          <div className="input-group">
            <ColorBlock color="purple" />
            <InputField
              text="Enter a volume of PBS:"
              volume={volumes.PBS}
              isActive={activeChemical === "PBS"}
              isConfirmed={confirmed.PBS}
              onClick={() => setActiveChemical("PBS")}
            />
          </div>

          {/* Trypsin Input */}
          <div className="input-group">
            <ColorBlock color="orange" />
            <InputField
              text="Enter a volume of Trypsin:"
              volume={volumes.Trypsin}
              isActive={activeChemical === "Trypsin"}
              isConfirmed={confirmed.Trypsin}
              onClick={() => setActiveChemical("Trypsin")}
            />
          </div>

          {/* Medium Input */}
          <div className="input-group">
            <ColorBlock color="pink" />
            <InputField
              text="Enter a volume of Medium:"
              volume={volumes.Medium}
              isActive={activeChemical === "Medium"}
              isConfirmed={confirmed.Medium}
              onClick={() => setActiveChemical("Medium")}
            />
          </div>

          {/* Action Buttons */}
          <ActionButtons
            onIncrease={handleIncrease}
            onDecrease={handleDecrease}
            onConfirm={handleConfirm}
          />

          {/* Pass the function to CultureSection */}
          <CultureSection onStart={handleStartCellCulture} />
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
          align-items: stretch;
          gap: 16px;
          margin-bottom: 16px;
        }

        @media (max-width: 480px) and (min-height: 800px) {
          .content-card {
            padding: 24px;
            max-width: 480px;
          }
        }
      `}</style>
    </>
  );
};

export default InputDesign;

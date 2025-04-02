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
      setConfirmed((prev) => {
        const newConfirmed = { ...prev };
        if (prev[activeChemical]) {
          // Unconfirm the chemical if it's already confirmed
          newConfirmed[activeChemical] = false;
        } else {
          // Confirm the chemical and unconfirm all others
          Object.keys(newConfirmed).forEach(
            (chemical) => (newConfirmed[chemical] = false)
          );
          newConfirmed[activeChemical] = true;
        }
        return newConfirmed;
      });
    }
  };

  const handleStartCellCulture = async () => {
    // Check if exactly one chemical is confirmed
    const confirmedChemicals = Object.keys(confirmed).filter(
      (chemical) => confirmed[chemical]
    );

    if (confirmedChemicals.length !== 1) {
      alert("Please confirm exactly one chemical before starting the culture.");
      return;
    }

    // Prepare the confirmed volumes object
    const confirmedVolumes = {};
    confirmedChemicals.forEach((chemical) => {
      confirmedVolumes[chemical] = volumes[chemical];
    });

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

      // Reset all fields after success
      setVolumes({
        PBS: 0,
        Trypsin: 0,
        Medium: 0,
      });

      setConfirmed({
        PBS: false,
        Trypsin: false,
        Medium: false,
      });

      setActiveChemical(null); // Unhighlight the input fields
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
          <div className="main-content">
            <h1 className="header">Start a new culture</h1>

            {/* Input Fields Container */}
            <div className="input-fields-container">
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
            </div>
          </div>

          {/* Bottom controls section */}
          <div className="bottom-controls">
            {/* Action Buttons */}
            <ActionButtons
              onIncrease={handleIncrease}
              onDecrease={handleDecrease}
              onConfirm={handleConfirm}
            />

            {/* CultureSection */}
            <CultureSection onStart={handleStartCellCulture} />
          </div>
        </article>
      </main>

      <style jsx>{`
        .app-container {
          width: 100vw;
          min-height: 100vh;
          background-color: #00664f;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 0;
          margin: 0;
        }

        .content-card {
          background-color: white;
          border-radius: 0;
          padding: 32px 24px;
          width: 100%;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: space-between; /* Push main up, culture down */
        }

        .main-content {
          display: flex;
          flex-direction: column;
          flex-grow: 1;
          /* Removed specific margin-bottom value */
        }

        .header {
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 28px;
          font-weight: 600;
          margin: 0 0 30px 0;
          text-align: center;
          flex-shrink: 0;
        }

        .input-fields-container {
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
          flex-grow: 1;
          min-height: 50vh; /* Ensure it takes up significant vertical space */
        }

        .input-group {
          display: flex;
          align-items: stretch;
          gap: 16px;
          /* Removed specific margin-bottom as spacing is now handled by justify-content: space-evenly */
        }

        .input-group:last-of-type {
          margin-bottom: 0;
        }

        .bottom-controls {
          display: flex;
          flex-direction: column;
          gap: 4vh;
          margin-top: 5vh; /* Add some space above bottom controls */
        }

        @media (max-width: 480px) {
          .content-card {
            padding: 28px 20px;
          }
          
          .header {
            font-size: 24px;
            margin: 0 0 25px 0;
          }

          .input-fields-container {
            min-height: 45vh; /* Slightly less on smaller screens */
          }

          .input-group {
            gap: 12px;
          }

          .bottom-controls {
            gap: 3vh;
            margin-top: 4vh;
          }
        }
      `}</style>
    </>
  );
};

export default InputDesign;

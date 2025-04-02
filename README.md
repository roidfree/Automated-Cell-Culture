# Automated Cell Culture Pump Control System

A web-based control system for managing peristaltic pumps in cell culture experiments using Arduino-controlled hardware and a Flask backend, running on a Raspberry Pi 4 with touchscreen display.

## Overview
This project provides a web interface to control and monitor peristaltic pumps for cell culture experiments. It consists of:
- A Flask backend API for handling web requests
- Arduino-controlled peristaltic pumps
- Serial communication between the backend and Arduino
- Raspberry Pi 4 with Elecrow touchscreen display for local control

## Hardware Requirements
- Raspberry Pi 4 Model B
- Elecrow 7" Touchscreen Display
- Arduino Mega 2560 (or compatible)
- Peristaltic pumps for liquid handling
- USB cables for Arduino connection

## Software Setup

### Raspberry Pi Setup
1. Install Raspberry Pi OS (64-bit)
2. Connect the Elecrow touchscreen display
3. Configure display settings:
   - Set correct DPI in `/boot/config.txt`
   - Enable touchscreen driver

### Backend Setup
1. Create and activate a Python virtual environment:
```bash
python -m venv backend/venv
source backend/venv/bin/activate  # On Windows: backend\venv\Scripts\activate
```

2. Install required Python packages:
```bash
pip install flask flask-cors pyserial
```

3. Configure Arduino port:
   - Edit `backend/app.py` and set the correct `arduino_port`
   - For Windows: use COM port (e.g., "COM3")
   - For Linux: use ttyACM port (e.g., "/dev/ttyACM0")

### Arduino Setup
1. Open Arduino IDE
2. Install required libraries:
   - `LiquidCrystal_I2C`

3. Upload the Arduino code from `Arduino/pump_control1.ino`

## Running the System

### Starting the Backend
```bash
cd backend
python app.py
```
The Flask server will start on `http://localhost:5000`

### Arduino Connection
The system will automatically attempt to connect to the Arduino. You should see connection messages in the terminal.

## API Endpoints
| Endpoint | Method | Description |
|----------|--------|-------------|
| `/` | GET | Check server status |
| `/control` | POST | Send control commands to Arduino |
| `/status` | GET | Get current system status |

## Troubleshooting
- **Arduino Connection Issues:**
  1. Ensure Arduino is properly connected
  2. Check the port configuration in `app.py`
  3. Verify Arduino is uploading code correctly

- **Serial Communication Errors:**
  1. Check baud rate settings (9600)
  2. Ensure no other programs are using the serial port
  3. Try restarting both the Arduino and the Flask server

- **Touchscreen Issues:**
  1. Verify display is properly connected
  2. Check touchscreen calibration
  3. Ensure correct display resolution is set

## Safety Notes
- Always ensure proper sterilization procedures are followed
- Regularly check system connections and hardware
- Implement emergency stop procedures for safety

## Contributing
1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License
MIT License - feel free to use this code for your cell culture projects!

## Relevant Documents
OneDrive with Resources:
[Link 1](https://imperiallondon-my.sharepoint.com/:f:/r/personal/da1322_ic_ac_uk/Documents/Year%202/Principles%20of%20Design?csf=1&web=1&e=z1GgJt)

[Link 2](https://imperiallondon-my.sharepoint.com/:f:/g/personal/da1322_ic_ac_uk/EldzbFKCJ05FsMq1v_xzhH8BW1Hi2h5r3NOkbWd83Tpb-w?e=X1X9ii)
 
OneDrive with PSD:[Link 1](https://imperiallondon-my.sharepoint.com/:w:/r/personal/da1322_ic_ac_uk/Documents/Year%202/Principles%20of%20Design/PSD%20-%20Cellsys.docx?d=wde8694729dce4957b2aad5eb4b9bd8f0&csf=1&web=1&e=NK2LZj)(https://imperiallondon-my.sharepoint.com/:w:/g/personal/da1322_ic_ac_uk/EXKUht7OnVdJsqrV60ub2PAB3-0p0oUdjwzsyK82-7Xsmw?e=OTsWRL )

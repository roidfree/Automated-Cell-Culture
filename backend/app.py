from flask import Flask, request, jsonify
from flask_cors import CORS  
import serial
import serial.tools.list_ports  # Import for auto-detecting Arduino
import time

app = Flask(__name__)
CORS(app)

# Function to automatically find the Arduino's port
def find_arduino():
    ports = list(serial.tools.list_ports.comports())
    for port in ports:
        print(f"Found port: {port.device} - {port.description}")  # Debugging: Show all ports
        if "Arduino" in port.description or "usbmodem" in port.device or "ttyACM" in port.device:
            return port.device  # Return the first matching port
    return None  # If no Arduino is found

# Try to connect to Arduino automatically
arduino_port = find_arduino()
if arduino_port:
    try:
        print(f"Connecting to Arduino on {arduino_port}...")
        arduino = serial.Serial(port=arduino_port, baudrate=9600, timeout=1)
        time.sleep(2)  #
        print("Arduino connection successful!")
    except Exception as e:
        print(f"Error connecting to Arduino: {e}")
        arduino = None
else:
    print("No Arduino found. Check connections.")
    arduino = None

@app.route('/start_culture', methods=['POST'])
def start_culture():
    try:
        data = request.get_json()
        print("Received data from frontend:", data)

        if len(data) != 1:
            return jsonify({"error": "Only one chemical can be confirmed."}), 400

        chemical, volume = next(iter(data.items()))
        response_message = f"Cell culture started successfully with {chemical} ({volume} µL)."

        # Send data to Arduino if serial connection is active
        if arduino and arduino.is_open:
            message = f"{chemical}:{volume}\n"
            arduino.write(message.encode())  # Send as a formatted string
            print(f"Sent to Arduino: {message}")
            
            time.sleep(1)  # Allow Arduino to process
            arduino.flush()  # Clear serial buffer
        else:
            print("Error: Arduino is not connected.")

        return jsonify({
            "message": response_message,
            "chemical": chemical,
            "volume": volume
        }), 200

    except Exception as e:
        print("Error:", e)
        return jsonify({"error": "Failed to start the culture. Please try again."}), 500

if __name__ == '__main__':
    app.run(debug=True)

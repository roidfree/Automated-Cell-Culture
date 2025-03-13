from flask import Flask, request, jsonify
from flask_cors import CORS  
import serial
import time

app = Flask(__name__)
CORS(app)  


try:
    arduino = serial.Serial(port='/dev/cu.usbmodem101', baudrate=9600, timeout=1)  
    time.sleep(2) 
except Exception as e:
    print(f"Error connecting to Arduino: {e}")
    arduino = None  

@app.route('/start_culture', methods=['POST'])
def start_culture():
    try:
        data = request.get_json()
        print("Received data:", data)

       
        if len(data) != 1:
            return jsonify({"error": "Only one chemical can be confirmed."}), 400

        
        chemical, volume = next(iter(data.items()))
        response_message = f"Cell culture started successfully with {chemical} ({volume} µL)."
        
        # Send data to Arduino if serial connection is active
        if arduino and arduino.is_open:
            arduino.write(f"{chemical}:{volume}\n".encode())  # Send as a formatted string
            print(f"Sent to Arduino: {chemical}:{volume}")

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

from flask import Flask, request, jsonify
from flask_cors import CORS  

app = Flask(__name__)
CORS(app)  

@app.route('/start_culture', methods=['POST'])
def start_culture():
    try:
        data = request.get_json()
        print("Received data:", data)
        return jsonify({"message": "Cell culture started successfully!", "data": data}), 200
    except Exception as e:
        print("Error:", e)
        return jsonify({"error": "Failed to start the culture. Please try again."}), 500

if __name__ == '__main__':
    app.run(debug=True)

from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/start_culture', methods=['POST'])
def start_culture():
    try:
        # Get data from the request
        data = request.get_json()

        # Check if the data is received properly
        print("Received data:", data)

        # You can also do other operations like starting the culture process here.

        # Send a confirmation back to the frontend
        return jsonify({"message": "Cell culture started successfully!", "data": data}), 200

    except Exception as e:
        print("Error:", e)
        return jsonify({"error": "Failed to start the culture. Please try again."}), 500

if __name__ == '__main__':
    app.run(debug=True)

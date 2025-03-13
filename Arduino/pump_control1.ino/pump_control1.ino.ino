String receivedData;  // Variable to store received data
const int motorPin1 = 2;    // Motor control pin 1
const int motorPin2 = 3;    // Motor control pin 2
const float FLOW_RATE = 75.0; // Estimated flow rate in mL/min

void setup() {
    pinMode(motorPin1, OUTPUT);
    pinMode(motorPin2, OUTPUT);
    Serial.begin(9600);
    Serial.println("Peristaltic Pump Controller Ready");
}

void loop() {
    if (Serial.available() > 0) {
        receivedData = Serial.readStringUntil('\n');  // Read incoming data until newline
        receivedData.trim();  // Remove any extra spaces or newlines
        Serial.print("Raw Data Received: ");
        Serial.println(receivedData);

        if (receivedData.length() == 0) {
            Serial.println("Error: No valid data received.");
            return;
        }

        // Split the received string into chemical name and volume
        int separatorIndex = receivedData.indexOf(':');
        if (separatorIndex == -1) {
            Serial.println("Error: Invalid data format. Expected 'chemical:volume'.");
            return;
        }

        String chemical = receivedData.substring(0, separatorIndex);
        String volumeStr = receivedData.substring(separatorIndex + 1);
        float desiredVolume = volumeStr.toFloat();

        Serial.print("Chemical: ");
        Serial.println(chemical);
        Serial.print("Volume: ");
        Serial.println(desiredVolume);

        if (desiredVolume <= 0) {
            Serial.println("Error: Invalid volume value.");
            return;
        }

        // Calculate pump run time
        float pumpTime = ((desiredVolume * 60.0) / FLOW_RATE) * 3;
        Serial.print("Pump will run for ");
        Serial.print(pumpTime);
        Serial.println(" seconds");

        // Activate pump
        startMotor();
        delay(pumpTime * 1000); // Convert seconds to milliseconds
        stopMotor();
        Serial.println("Pumping complete");
    }
}

void startMotor() {
    digitalWrite(motorPin1, HIGH);
    digitalWrite(motorPin2, LOW);
    Serial.println("Motor ON");
}

void stopMotor() {
    digitalWrite(motorPin1, LOW);
    digitalWrite(motorPin2, LOW);
    Serial.println("Motor OFF");
}



#define IN1 7    // Motor direction pin 1
#define IN2 8    // Motor direction pin 2
#define ENA 9    // PWM speed control

bool pumpRunning = false; // Track pump state

void setup() {
    pinMode(IN1, OUTPUT);
    pinMode(IN2, OUTPUT);
    pinMode(ENA, OUTPUT);
    Serial.begin(9600); // Initialize Serial Monitor
    Serial.println("Enter '1' to START pump, '0' to STOP pump");
}

void loop() {
    if (Serial.available()) {  // Check for input
        char command = Serial.read();
        if (command == '1') {
            pumpRunning = true;
            Serial.println("Pump ON");
        } else if (command == '0') {
            pumpRunning = false;
            Serial.println("Pump OFF");
        }
    }

    if (pumpRunning) {
        digitalWrite(IN1, HIGH);
        digitalWrite(IN2, LOW);  // Forward direction
        analogWrite(ENA, 150);   // Adjust speed (0-255)
    } else {
        digitalWrite(IN1, LOW);
        digitalWrite(IN2, LOW);  // Stop motor
        analogWrite(ENA, 0);
    }
}

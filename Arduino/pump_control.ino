#define IN1 7    // Motor direction pin 1
#define IN2 8    // Motor direction pin 2
#define ENA 9    // PWM speed control

#define BUTTON 2 // Start/Stop button

bool pumpRunning = false; // Track pump state

void setup() {
    pinMode(IN1, OUTPUT);
    pinMode(IN2, OUTPUT);
    pinMode(ENA, OUTPUT);
    pinMode(BUTTON, INPUT_PULLUP); // Use internal pull-up resistor

    attachInterrupt(digitalPinToInterrupt(BUTTON), togglePump, FALLING); // Interrupt on button press
}

void loop() {
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

// Interrupt function to toggle pump state
void togglePump() {
    delay(50); // Debounce delay
    pumpRunning = !pumpRunning;
}
S
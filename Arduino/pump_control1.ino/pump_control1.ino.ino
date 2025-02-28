// Simple Arduino code for testing KPHM100 24V stepper motor with L298N driver
// Connections:
// L298N I1 -> Arduino Mega pin 8
// L298N I2 -> Arduino Mega pin 9
// L298N I3 -> Arduino Mega pin 10
// L298N I4 -> Arduino Mega pin 11

// Define motor control pins
const int motorPin1 = 8;    // L298N In1
const int motorPin2 = 9;    // L298N In2
const int motorPin3 = 10;   // L298N In3
const int motorPin4 = 11;   // L298N In4

// Simple 4-step sequence
const int stepSequence[4][4] = {
  {1, 0, 0, 1},
  {1, 1, 0, 0},
  {0, 1, 1, 0},
  {0, 0, 1, 1}
};

void setup() {
  // Initialize motor control pins as outputs
  pinMode(motorPin1, OUTPUT);
  pinMode(motorPin2, OUTPUT);
  pinMode(motorPin3, OUTPUT);
  pinMode(motorPin4, OUTPUT);
}

void loop() {
  // Just rotate continuously through the 4 steps
  for (int step = 0; step < 4; step++) {
    // Set motor pins according to sequence
    digitalWrite(motorPin1, stepSequence[step][0]);
    digitalWrite(motorPin2, stepSequence[step][1]);
    digitalWrite(motorPin3, stepSequence[step][2]);
    digitalWrite(motorPin4, stepSequence[step][3]);
    
    delay(10);  // Adjust for desired speed (lower = faster)
  }
}
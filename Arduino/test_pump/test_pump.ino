// Arduino Mega Serial-Controlled DC Motor
// Uses L298N motor driver
// Press 'f' in Serial Monitor to activate the motor
// Press 's' in Serial Monitor to stop the motor

// L298N Motor Driver Pins
//const int motorEnable = 9;  // Enable pin for motor speed control
const int motorPin1 = 2;    // Motor control pin 1
const int motorPin2 = 3;    // Motor control pin 2

// Variables for serial control
char receivedChar;
boolean motorRunning = false;

void setup() {
  // Set motor control pins as outputs
//  pinMode(motorEnable, OUTPUT);
  pinMode(motorPin1, OUTPUT);
  pinMode(motorPin2, OUTPUT);
  
  // Initialize serial communication
  Serial.begin(9600);
  Serial.println("Serial-controlled motor ready");
  Serial.println("Press 'f' to start motor, 's' to stop");
  
  // Ensure motor is off at startup
  stopMotor();
}

void loop() {
  // Check if serial data is available
  if (Serial.available() > 0) {
    // Read the incoming byte
    receivedChar = Serial.read();
    
    // Check if the received character is 'f' (start motor)
    if (receivedChar == 'f') {
      startMotor();
      Serial.println("Motor ON");
    } 
    // Check if the received character is 's' (stop motor)
    else if (receivedChar == 's') {
      stopMotor();
      Serial.println("Motor OFF");
    }

    // Clear any remaining characters in the buffer
    while (Serial.available() > 0) {
      Serial.read();
    }
  }
}

// Function to start the motor
void startMotor() {
  // Set motor direction (forward)
  digitalWrite(motorPin1, HIGH);
  digitalWrite(motorPin2, LOW);
  
  // Set motor speed (0-255)
//  analogWrite(motorEnable, 200);  // ~75% speed
  
  motorRunning = true;
}

// Function to stop the motor
void stopMotor() {
  digitalWrite(motorPin1, LOW);
  digitalWrite(motorPin2, LOW);
//  analogWrite(motorEnable, 0);
  
  motorRunning = false;
}

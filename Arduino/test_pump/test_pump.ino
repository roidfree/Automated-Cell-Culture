// Define Arduino pins connected to L298N inputs (updated to pins 8-11)
const int IN1 = 8;  // Black wire (PIN1) control
const int IN2 = 9;  // Green wire (PIN2) control
const int IN3 = 10; // Red wire (PIN3) control
const int IN4 = 11; // Blue wire (PIN4) control
const int ENA = 2;  // Enable A pin
const int ENB = 3;  // Enable B pin
// Step sequence for CW rotation (from Kamoer datasheet)
int steps[4][4] = {
  {HIGH, LOW, LOW, HIGH},  // Step 1: Black +, Green -, Red -, Blue +
  {LOW, HIGH, HIGH, LOW},  // Step 2: Black -, Green +, Red +, Blue -
  {HIGH, LOW, HIGH, LOW},  // Step 3: Black +, Green -, Red +, Blue -
  {LOW, HIGH, LOW, HIGH}   // Step 4: Black -, Green +, Red -, Blue +
};

void setup() {
  // Set pin modes as outputs
  pinMode(IN1, OUTPUT);
  pinMode(IN2, OUTPUT);
  pinMode(IN3, OUTPUT);
  pinMode(IN4, OUTPUT);
  digitalWrite(ENA, HIGH);  // Enable full speed
  digitalWrite(ENB, HIGH);
  
  // Initialize pins to LOW
  digitalWrite(IN1, LOW);
  digitalWrite(IN2, LOW);
  digitalWrite(IN3, LOW);
  digitalWrite(IN4, LOW);
}

void loop() {
  // Run motor CW for 512 steps (one full revolution, assuming 200 steps/rev)
  for (int i = 0; i < 512; i++) {
    for (int j = 0; j < 4; j++) {
      digitalWrite(IN1, steps[j][0]);
      digitalWrite(IN2, steps[j][1]);
      digitalWrite(IN3, steps[j][2]);
      digitalWrite(IN4, steps[j][3]);
      delay(10);  // Adjust delay for speed (10ms = ~100 steps/sec)
    }
  }
  
  delay(1000);  // Pause for 1 second
  
  // Run motor CCW for 512 steps
  for (int i = 0; i < 512; i++) {
    for (int j = 3; j >= 0; j--) {  // Reverse order for CCW
      digitalWrite(IN1, steps[j][0]);
      digitalWrite(IN2, steps[j][1]);
      digitalWrite(IN3, steps[j][2]);
      digitalWrite(IN4, steps[j][3]);
      delay(10);  // Adjust delay for speed
    }
  }
  
  delay(1000);  // Pause for 1 second
}
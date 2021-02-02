#include <Arduino.h>
int LED = 13;

void setup() {
  pinMode(LED, OUTPUT);
  digitalWrite(LED, LOW);
  Serial.begin(9600);
}

void loop() {
  if(Serial.available()) {
    int value = Serial.read();
    if(value == '0') digitalWrite(LED, LOW);
    else if (value == '1') digitalWrite(LED, HIGH);
    else if (value == '2'); // Servo at 0 Degrees
    else if (value == '3'); // Servo at 90 Degrees
    else if (value == '4'); // Stepper Motor at 0 Degrees
    else if (value == '5'); // Stepper Motor at 90 Degrees
    else if (value == '6'); // Stepper Motor at 180 Degrees
    else if (value == '7'); // Stepper Motor at 270 Degrees
    else if (value == '8'); // Stepper Motor at 360 Degrees
  }
}
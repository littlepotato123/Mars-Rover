#include <Servo.h>
#include <Arduino.h>
int LED = 13;

Servo servo;

void setup() {
  servo.attach(10);
  pinMode(LED, OUTPUT);
  digitalWrite(LED, LOW);
  servo.write(0);
  Serial.begin(9600);
}

void loop() {
  if(Serial.available()) {
    int value = Serial.read();
    if(value == '0') digitalWrite(LED, LOW);
    else if (value == '1') digitalWrite(LED, HIGH);
    else if (value == '2') servo.write(0); 
    else if (value == '3') servo.write(90); 
    // Stepper Motor?
  }
}
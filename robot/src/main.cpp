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
    if(value == '1') digitalWrite(LED, HIGH);
    else if (value == '0') digitalWrite(LED, LOW);
  }
}
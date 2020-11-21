#include <SoftwareSerial.h>
#include <Servo.h>
Servo servo1;

int TX = 10;
int RX = 11;
SoftwareSerial HC_06(TX, RX);

void setup() {
  servo1.attach(9);
  Serial.begin(9600);
  HC_06.begin(9600);
}

void loop() {
  if(HC_06.avaliable() > 0) {
    int value = HC_06.read();
    if(value > 0 && value <= 90) {
      Serial.println(value);
      int servo1_position = map(value, 0, 90, 0, 180);
      servo1.write(servo1_position);
    }
  }
}
#include <Servo.h>

Servo myservo;

int pos = 0;

void setup() {
  myservo.attach(13); // Servo at Pin 13
}

void loop() {
  for (pos = 0; pos <= 180; pos += 1) {
     myservo.write(pos);
     delay(15); // Delaying 15 Miliseconds
  }

  for (pos = 180; pos >= 0; pos -= 1) {
    myservo.write(pos);
    delay(15); // Delaying 15 Miliseconds
  }
}

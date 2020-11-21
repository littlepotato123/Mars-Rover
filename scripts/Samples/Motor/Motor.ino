const int pwm = 2; // Initializing Pin 2 as PWM
const int in_1 = 8;
const int in_2 = 9;

void setup() {
  pinMode(pwm, OUTPUT);
  pinMode(in_1, OUTPUT);
  pinMode(in_2, OUTPUT);
}

void loop() {
  digitalWrite(in_1, HIGH);
  digitalWrite(in_2, LOW);
  analogWrite(pwm, 255);
  delay(3000);
  digitalWrite(in_1, HIGH);
  digitalWrite(in_2, HIGH);
  delay(1000);
  digitalWrite(in_1, LOW);
  digitalWrite(in_2, HIGH);
  delay(1000);
  Serial.println("Done with Motor Movements");
}

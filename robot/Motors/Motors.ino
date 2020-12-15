int In1 = 7;
int In2 = 6;
int ENA = 5;
int SPEED = 255;

void setup() {
  pinMode(In1, OUTPUT);
  pinMode(In2, OUTPUT);
  pinMode(ENA, OUTPUT);
}

void loop() {
  digitalWrite(In1, HIGH);
  digitalWrite(In2, LOW);
  analogWrite(ENA, SPEED);
}

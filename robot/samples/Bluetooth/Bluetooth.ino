int LED = 13;

void setup() {
  Serial.begin(9600);
  pinMode(LED, OUTPUT);
}

void loop() {
  if(Serial.available()) {
    char c = Serial.read();
    if(c=='1') {
      digitalWrite(LED, HIGH);
      Serial.write("On\n");
    }

    if(c=='0') {
      digitalWrite(LED, LOW);
      Serial.write("Off\n");
    }
  }
}

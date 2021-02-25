#include <Servo.h>
#include <Arduino.h>
#include <SoftwareSerial.h>
int LED = 13;

SoftwareSerial hc(6, 7);

#define A 2
#define B 3
#define C 4
#define D 5
#define NUMBER_OF_STEPS_PER_REV 512

Servo servo;

void write(int a,int b,int c,int d){
  digitalWrite(A,a);
  digitalWrite(B,b);
  digitalWrite(C,c);
  digitalWrite(D,d);
}

void leave() {
  servo.write(20);
  digitalWrite(LED, LOW);
}

void setup() {
  Serial.begin(9600);
  hc.begin(9600);
  pinMode(A,OUTPUT);
  pinMode(B,OUTPUT);
  pinMode(C,OUTPUT);
  pinMode(D,OUTPUT);
  servo.attach(9);
  pinMode(LED, OUTPUT);
  leave();
}

void onestep(){
  write(1,0,0,0);
  delay(5);
  write(1,1,0,0);
  delay(5);
  write(0,1,0,0);
  delay(5);
  write(0,1,1,0);
  delay(5);
  write(0,0,1,0);
  delay(5);
  write(0,0,1,1);
  delay(5);
  write(0,0,0,1);
  delay(5);
  write(1,0,0,1);
  delay(5);
}

void revolution() {
  int i;
  i = 0;
  while (i<NUMBER_OF_STEPS_PER_REV) {
    onestep();
    i++;
  };
}

void loop() {
  // 20, 90, 160
  if(hc.available()){
    int value = hc.read();
    if (value == '0') {
      digitalWrite(LED, LOW);
      hc.println("LED is OFF");
    }
    else if (value == '1') {
      digitalWrite(LED, HIGH);
      hc.println("LED is ON");
    }
    else if (value == '2') {
      servo.write(20);
      hc.println("Servo at 0 Degrees");
    }
    else if (value == '3') {
      servo.write(90);
      hc.println("Servo at 90 Degrees");
    }
    else if (value == '4') {
      servo.write(160);
      hc.println("Servo at 180 Degrees");
    } 
    else if (value == '5') {
      revolution();
      hc.println("Motor completed one revolution");
    }
    else if (value == '6') {
      leave();
      hc.println("LED is OFF");
      hc.println("Servo at 0 Degrees");
    }
  }
}
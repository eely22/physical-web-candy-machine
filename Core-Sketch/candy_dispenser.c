#define MOTOR_PIN A2
#define LED_PIN A1



int giveCandy(String params) {
    digitalWrite(MOTOR_PIN, HIGH);
    digitalWrite(LED_PIN, HIGH);
    delay(2000);
    digitalWrite(MOTOR_PIN, LOW);
    digitalWrite(LED_PIN, LOW);
}

void setup() {
    Spark.function("giveCandy", giveCandy);
    pinMode(MOTOR_PIN, OUTPUT);
    pinMode(LED_PIN, OUTPUT);
}

void loop() {
    
}

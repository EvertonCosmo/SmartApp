
#include "HX711.h"


HX711 scale;

float calibration_factor = -375;
float units;
float kg;
void setup() {
//  Serial.print(" calibration_factor: ");
  Serial.print(calibration_factor);
  
  Serial.begin(9600);
  scale.begin(7, 5); //DOUT,SCK
//  Serial.println("Initializing ... ");


//  Serial.println("leitura inicial antes de definir escala : ");
  Serial.println(scale.read());

  //Calibration to 0 value

  scale.set_scale(calibration_factor);
  scale.tare();


  long zero_factor = scale.read_average();
//  Serial.print("Zero Factor: ");
//  Serial.println(zero_factor);





}


void loop() {
//  Serial.print("Leitura: ");
  units = scale.get_units(), 10;

  if (units <  0) {
    units = 0.00;
  }

  kg = units * 0.035274;
  Serial.print(kg);
//  Serial.print(" kg");
  

  
  Serial.println();

  if (Serial.available())
  {
    char temp = Serial.read();
    if (temp == '+' || temp == 'a')
      calibration_factor += 1;
    else if (temp == '-' || temp == 'z')
      calibration_factor -= 1;
  }

}

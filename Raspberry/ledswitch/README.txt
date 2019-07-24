This process is for switching the LED.

If you want to set interval on/off, just unmark the interval block and mark the led.write() function.

Notice: the log will be wrong in interval.

Below is the circuit diagram:

GPIO 4 -> switch -> resistance -> LED ---> GND
(out)				       | 
				       --> GPIO 17
					   (sensor)
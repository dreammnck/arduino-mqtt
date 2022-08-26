import time
from pymata4 import pymata4

triger_pin = 4
echo_pin = 5

board = pymata4.Pymata4()

def callback(data):
    print(f'distance: {data}')
board.set_pin_mode_sonar(triger_pin, echo_pin,callback)

while True:
    try:

        time.sleep(1)
        board.sonar_read(triger_pin)
    except: 
        print('error')
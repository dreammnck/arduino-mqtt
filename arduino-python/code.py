from curses import echo
import pyfirmata
import paho.mqtt.client as mqtt
import time
import sys

board = pyfirmata.Arduino('/dev/cu.usbserial-A504XWBK')
host = "127.0.0.1"
port = 1883


it = pyfirmata.util.Iterator(board)
it.start()

# send wve with trig pin
triger_pin =  board.get_pin('d:3:0')

#receive signal form echo pin
echo_pin = board.get_pin('d:2:i')

client = mqtt.Client()
if client.connect(host, port) != 0:
    print('Could not connect to MQTT broker')
    sys.exit(-1)


while True: 


    client.publish('test', echo_status)
    time.sleep(2)

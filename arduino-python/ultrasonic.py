import time
import sys
import paho.mqtt.client as mqtt
from pymata4 import pymata4

def connect_mqtt():
    host = "127.0.0.1"
    port = 1883
    client = mqtt.Client()
    if client.connect(host, port) != 0:
        print('Could not connect to MQTT broker')
        sys.exit(-1)
    return client

def connect_arduino():
    board = pymata4.Pymata4()
    return board

def callback(data):
    mqtt_client = connect_mqtt()
    print(f'distance: {data[2]}')
    mqtt_client.publish('test', data[2])

def loop():
    triger_pin = 4
    echo_pin = 5
    board = connect_arduino()
    board.set_pin_mode_sonar(triger_pin, echo_pin, callback)

    while True:
        try:
            time.sleep(5)
            board.sonar_read(triger_pin)
        except:
            print("Problem occured")
            sys.exit(-1)

if __name__ == "__main__":
    loop()

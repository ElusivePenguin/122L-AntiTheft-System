import os
from gpiozero import MotionSensor
import time
import pyrebase
import random

def on_alarm():
        os.system("fswebcam image.jpg")
        os.system("./mac_dump/runmacdump.sh &")
        time.sleep(10)
        os.system("pkill -9 runmackdump.sh")
        os.system("cut -f 4 -d ' '  ./mac_dump/mac_dump.txt | sort | uniq > ./mac_dump/mac_dump_unique.txt")

        mac_file = open("./mac_dump/mac_dump_unique.txt", "r")

        mac_addrs = []
        secret = <secret>

        for line in mac_file:
                mac_addr = line.strip()
                mac_int = int(mac_addr.replace(":", ""), 16)
                mac_int ^= secret
                mac_hex = "{:012x}".format(mac_int)
                mac_str = ":".join(mac_hex[i:i+2] for i in range(0, len(mac_hex), 2))
                mac_addrs.append(mac_str)

        #create a randomizer for different car model names
        carArray = ["Kia Optima","Honda Civic","Ford Mustang","Jeep Cherokee","Hyundai Elantra"]
        randomCar = random.choice(carArray)
        

        firebase.database().child("alert_info").push({"car_model": "{}".format{randomCar}, "mac_addrs": mac_addrs, "timestamp": {".sv": "timestamp"}})

firebaseConfig = {
    "apiKey": "AIzaSyCJHH27qHSwO8FLal5p8wf5aPQEEf7lpGY",
    "authDomain": "ece122l-carsecurity.firebaseapp.com",
    "databaseURL": "https://ece122l-carsecurity.firebaseio.com",
    "projectId": "ece122l-carsecurity",
    "storageBucket": "ece122l-carsecurity.appspot.com",
    "messagingSenderId": "153625676348",
    "appId": "1:153625676348:web:284878b5724681a154d139",
    "measurementId": "G-W4QKDKQD74"
  };

firebase = pyrebase.initialize_app(firebaseConfig)
        
os.system("sudo ./mac_dump/macdumpsetup.sh")
os.system("sudo ./mac_dump/macdumpchanhop.sh &")

pir = MotionSensor(4)

pir.when_motion = on_alarm

while(True):
        time.sleep(1)

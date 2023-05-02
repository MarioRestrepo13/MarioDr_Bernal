from String import  Hilo_1
import datetime 
import logging 
import time

class principal ():
        def main ():
            logging.basicConfig(level=logging.DEBUG)
            inicio=datetime.datetime.now()
            Hilo= Hilo_1("hilo",2,"")
            Hilo.start()
            
            while True:
                var="a"
                var=input ("Ingrese: \n  ")
                time.sleep(2)
                Hilo.setVar(var)
                if var=="pool":
                     break
            
            final=datetime.datetime.now()
            print("\nTiempo total= {}".format (final.second - inicio.second)+"  Segundos")

        main()
    
    
import threading 
import logging 

logging.basicConfig(level=logging.DEBUG)

class Hilo_1 (threading.Thread):
    def __init__(self, nombre_Hilo, time, var ):
        threading.Thread.__init__(self, name=nombre_Hilo, target=Hilo_1.run)
        self.nombre_Hilo = nombre_Hilo
        self.time= time
        self.var=var

    def setTime (self,time):
        self.time = time

    def setVar (self,var):
        self.var=var
                
    def run (self):
        self.Guardar()
        
    def Guardar (self):
        save = ""
        while  True:
            if self.var == save:
                save = self.var
            else:
                save = self.var
                with open("Datos user", "a") as f:
                    f.write(save + "\n")
                


"""
class mi_Ciclo ():
    def Infinity ():
        i = False
        while i!= True:
            time.sleep(2)
            Ghost =  input("Ingrese un dato: ")

    Info = Infinity ()

f = open ('Infinito.txt','w')
f.write('Mi infinito')
f.close"""
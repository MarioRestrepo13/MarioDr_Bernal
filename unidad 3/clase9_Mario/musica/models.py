from django.db import models


class Musica(models.Model):
    genero = models.CharField(max_length=255)
    cancion = models.CharField(max_length=255)
    artista = models.CharField(max_length=255, default="")
    


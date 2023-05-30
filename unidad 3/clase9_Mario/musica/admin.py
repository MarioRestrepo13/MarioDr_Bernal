from django.contrib import admin
from musica.models import Musica

@admin.register(Musica)
class MusicaAdmin(admin.ModelAdmin):
    list_display = ['genero', 'artista', 'cancion']
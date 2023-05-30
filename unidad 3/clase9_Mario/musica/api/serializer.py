from rest_framework.serializers import ModelSerializer
from musica.models import Musica


class MusicaSerializer(ModelSerializer):
    
    class Meta:
        model = Musica
        fields = ['genero', 'artista', 'cancion']
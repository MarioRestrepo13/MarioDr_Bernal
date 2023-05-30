from rest_framework.viewsets import ModelViewSet  
from musica.api.serializer import MusicaSerializer
from musica.models import Musica

class MusicaApiSet(ModelViewSet):
    serializer_class = MusicaSerializer
    queryset = Musica.objects.all()
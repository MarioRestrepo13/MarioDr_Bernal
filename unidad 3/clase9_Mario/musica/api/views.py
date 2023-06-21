from rest_framework.viewsets import ModelViewSet  
from musica.api.serializer import MusicaSerializer
from musica.models import Musica

class MusicaApiSet(ModelViewSet):
    serializer_class = MusicaSerializer
    def get_queryset(self):
        queryset = Musica.objects.all()
        genero = self.request.query_params.get('genero')        
        artista = self.request.query_params.get('artista')
        if genero is not None:
            queryset = queryset.filter(genero=genero)
        if artista is not None:
            queryset = queryset.filter(artista=artista)
        return queryset 
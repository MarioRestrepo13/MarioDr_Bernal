from rest_framework.routers import DefaultRouter
from musica.api.views import MusicaApiSet

router_Musica = DefaultRouter()
router_Musica.register(prefix='musica', basename= 'musica', viewset= MusicaApiSet)

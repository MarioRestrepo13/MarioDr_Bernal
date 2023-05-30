from django.http import HttpResponse

from django.views.decorators.csrf import csrf_exempt

def index(request):
    texto = '{"name": "Javi es bello" }'
    return HttpResponse(texto)

@csrf_exempt
def test_post(request):
    texto = 'Hola, "$s"' % str(request.body)
    return HttpResponse(texto)

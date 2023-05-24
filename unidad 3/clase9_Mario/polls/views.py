from django.http import HttpResponse

from django.views.decorators.csrf import csrf_exempt

def index(request):
    texto = '{"name": "Hola mundo, you,re at the polls index." }'
    return HttpResponse(texto)

@csrf_exempt
def test_post(request):
    texto = 'Hola, "$s"' % str(request.body)
    return HttpResponse(texto)

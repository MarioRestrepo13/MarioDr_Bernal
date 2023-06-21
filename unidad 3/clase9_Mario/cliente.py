import requests

base_url = 'http://localhost:8000/api/'
content_type = 'application/json'

def configuracion (metodo, url, informacion):
    headers = {
        'Content-Type': content_type
    }
    if(metodo == 'POST'):
        return requests.post(base_url+url, json = informacion, headers = headers)

def configuracionTraer (metodo, url):
        return requests.get(base_url+url)
data = {
    'genero': 'tipo de genero',
    'artista': 'nombre de artista',
    'cancion': 'nombre de cancion',
}

#print(configuracion('POST', 'musica/', data))
lista = configuracion('GET', 'musica/', data).json()
print (lista[0]["genero"])
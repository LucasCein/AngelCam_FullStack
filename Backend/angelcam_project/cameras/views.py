# Backend/angelcam_project/cameras/views.py
from django.http import JsonResponse
import requests
from django.views.decorators.csrf import ensure_csrf_cookie, csrf_exempt

@csrf_exempt
def login(request):
    if request.method == 'POST':
        token = request.POST.get('token')
        print("Token recibido:", token)
        url = "https://api.angelcam.com/v1/shared-cameras/"
        headers = {
            "Authorization": f"PersonalAccessToken {token}"
        }
        response = requests.get(url, headers=headers)
        print("Código de estado de la respuesta:", response.status_code)
        if response.status_code == 200:
            cameras = response.json()
            return JsonResponse({'status': 'success', 'cameras': cameras})
        else:
            return JsonResponse({'status': 'error', 'message': 'Invalid token or request failed'})
    return JsonResponse({'status': 'error', 'message': 'Invalid request method'}, status=405)

@ensure_csrf_cookie
def get_csrf_token(request):
    return JsonResponse({'detail': 'CSRF cookie set'})

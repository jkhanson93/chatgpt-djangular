import os
import random
from django.conf import settings
from rest_framework.decorators import api_view
from rest_framework.response import Response

previous_photo = None

@api_view(['GET'])
def get_random_photo(request):
    global previous_photo

    photos_dir = os.path.join(settings.MEDIA_ROOT, 'photos')
    try:
        files = os.listdir(photos_dir)
        chosen = random.choice(files)

        while (chosen == previous_photo):
            chosen = random.choice(files)
            print("Whoops, we can't pick that one!")

        previous_photo = chosen
        return Response({'url': f'{settings.MEDIA_URL}photos/{chosen}'})
    except (FileNotFoundError, IndexError):
        return Response({'error': 'No photos found'}, status=404)

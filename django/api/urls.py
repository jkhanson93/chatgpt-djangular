from django.urls import path
from .views import get_random_photo

urlpatterns = [
    path('random-photo/', get_random_photo),
]

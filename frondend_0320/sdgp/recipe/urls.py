from rest_framework import routers
from django.urls import path
from .views import RecipeAPI, ImageRegognition, ImageRecognitionView


urlpatterns = [
    path('api/recipe', RecipeAPI.as_view()),
    path('api/image_recognition', ImageRecognitionView.as_view()),
    # path('api/image_recognition', ImageRegognition),
]
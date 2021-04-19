from rest_framework import routers
from django.urls import path
from .views import RecipeAPI, ImageRecognitionView, RecipeSearchByIngredient


urlpatterns = [
    path('api/recipe', RecipeAPI.as_view()),
    path('api/image_recognition', ImageRecognitionView.as_view()),
    path('api/recipe_search_by_ingredient', RecipeSearchByIngredient.as_view()),
    # path(
]
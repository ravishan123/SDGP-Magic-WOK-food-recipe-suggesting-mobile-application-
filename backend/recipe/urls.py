from rest_framework import routers
from django.urls import path
from .views import RecipeAPI, ImageRegognition, ImageRecognitionView, RecipeSearchByIngredient,HomeRecipe


urlpatterns = [
    path('api/recipe', RecipeAPI.as_view()),
    path('api/image_recognition', ImageRecognitionView.as_view()),
    path('api/recipe_search_by_ingredient', RecipeSearchByIngredient.as_view()),
    path('api/home_receipe', HomeRecipe.as_view()),
    # path('api/image_recognition', ImageRegognition),
]
from rest_framework import routers
from django.urls import path
<<<<<<< HEAD
from .views import RecipeAPI, ImageRecognitionView, RecipeSearchByIngredient
=======
from .views import RecipeAPI, ImageRegognition, ImageRecognitionView, RecipeSearchByIngredient,HomeRecipeFrance,HomeRecipeMexican,HomeRecipeChinese,HomeRecipeAsian,HomeRecipeItaly,HomeRecipeAmerican,HomeRecipeJapanese,HomeRecipeArabic
>>>>>>> 3c1aebf1a6d80c2546dc7b9a37c192edd7cc3105


urlpatterns = [
    path('api/recipe', RecipeAPI.as_view()),
    path('api/image_recognition', ImageRecognitionView.as_view()),
    path('api/recipe_search_by_ingredient', RecipeSearchByIngredient.as_view()),
<<<<<<< HEAD
    # path(
=======
    path('api/home_recipe_france', HomeRecipeFrance.as_view()),
    path('api/home_recipe_mexican', HomeRecipeMexican.as_view()),
    path('api/home_recipe_chinese', HomeRecipeChinese.as_view()),
    path('api/home_recipe_asian', HomeRecipeAsian.as_view()),
    path('api/home_recipe_italy', HomeRecipeItaly.as_view()),
    path('api/home_recipe_american', HomeRecipeAmerican.as_view()),
    path('api/home_recipe_japanese', HomeRecipeJapanese.as_view()),
    path('api/home_recipe_arabic', HomeRecipeArabic.as_view()),
    
    # path('api/image_recognition', ImageRegognition),
>>>>>>> 3c1aebf1a6d80c2546dc7b9a37c192edd7cc3105
]
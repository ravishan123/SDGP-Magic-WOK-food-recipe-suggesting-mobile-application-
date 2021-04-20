from rest_framework import routers
from django.urls import path
from .views import RecipeAPI, ImageRegognition, ImageRecognitionView, RecipeSearchByIngredient,HomeRecipeFrance,HomeRecipeMexican,HomeRecipeChinese,HomeRecipeAsian,HomeRecipeItaly,HomeRecipeAmerican,HomeRecipeJapanese,HomeRecipeArabic,IngredientSearch,IngredientRecognitionView


urlpatterns = [
    path('api/recipe', RecipeAPI.as_view()),
    path('api/image_recognition', ImageRecognitionView.as_view()),
    path('api/image_recognition2', IngredientRecognitionView.as_view()),
    path('api/recipe_search_by_ingredient', RecipeSearchByIngredient.as_view()),
    path('api/ingredient_search', IngredientSearch.as_view()),
    path('api/home_recipe_france', HomeRecipeFrance.as_view()),
    path('api/home_recipe_mexican', HomeRecipeMexican.as_view()),
    path('api/home_recipe_chinese', HomeRecipeChinese.as_view()),
    path('api/home_recipe_asian', HomeRecipeAsian.as_view()),
    path('api/home_recipe_italy', HomeRecipeItaly.as_view()),
    path('api/home_recipe_american', HomeRecipeAmerican.as_view()),
    path('api/home_recipe_japanese', HomeRecipeJapanese.as_view()),
    path('api/home_recipe_arabic', HomeRecipeArabic.as_view()),
    
    # path('api/image_recognition', ImageRegognition),
]
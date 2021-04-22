from rest_framework import routers
from django.urls import path
from .views import RecipeAPI, ImageRegognition, ImageRecognitionView, RecipeSearchByIngredient, RecipeSearch, IngredientImageRecognitionView, HomeRecipeAmerican, HomeRecipeArabic, HomeRecipeAsian, HomeRecipeChinese, HomeRecipeFrance, HomeRecipeItaly, HomeRecipeJapanese, HomeRecipeMexican, HomeRecipes


urlpatterns = [
    path('api/recipe', RecipeAPI.as_view()),
    path('api/image_recognition', ImageRecognitionView.as_view()),
    path('api/ingredient_image_recognition', IngredientImageRecognitionView.as_view()),
    path('api/recipe_search_by_ingredient', RecipeSearchByIngredient.as_view()),
    path('api/recipe_search', RecipeSearch.as_view()),
    # path('api/recipe_search_by_ingredients', RecipeSearchByIngredient.as_view()),
    path('api/recipes_for_home', HomeRecipes.as_view()),
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
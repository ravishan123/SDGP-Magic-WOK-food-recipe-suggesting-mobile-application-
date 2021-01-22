from django.urls import path, include
from .views import UserAPI, FoodAPI

urlpatterns = [
                path('api/food', FoodAPI.as_view()),
                path('api/user', UserAPI.as_view()),
                ]

  
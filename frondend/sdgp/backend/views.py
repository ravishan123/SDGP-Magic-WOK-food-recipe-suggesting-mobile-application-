from django.shortcuts import render
from rest_framework import generics
from .serializers import UserSerializer, FoodSerializer

class UserAPI(generics.GenericAPIView):
    serializer_class = UserSerializer

    
class FoodAPI(generics.GenericAPIView):
    serializer_class = FoodSerializer
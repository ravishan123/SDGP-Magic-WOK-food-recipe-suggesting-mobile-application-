from django.shortcuts import render
from .serializers import UserSerializer, UserRegisterSerializer, LoginSerializer, FavouritesSerializer
from .models import User
from rest_framework import viewsets, permissions, generics
from rest_framework.response import Response
from knox.models import AuthToken


class RegisterAPI(generics.GenericAPIView):
    serializer_class = UserRegisterSerializer

    def post(self, request, *args, **kwargs):
        print(request.data)
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        return Response({
            "user": UserSerializer(user, context=self.get_serializer_context()).data,
            "token": AuthToken.objects.create(user)[1]
        })


class LoginAPI(generics.GenericAPIView):
    serializer_class = LoginSerializer

    def post(self, request, *args, **kwargs):
        print(request.data)
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data
        return Response({
            "user": UserSerializer(user, context=self.get_serializer_context()).data,
            "token": AuthToken.objects.create(user)[1]
        })

class FavouritesAPI(generics.GenericAPIView):
    serializer_class = FavouritesSerializer

    def post(self, request, *args, **kwargs):
        print(request.data)
        dish_id = request.data["dish_id"]
        user_id = request.data["user_id"]
        is_favourite = request.data["is_favourite"]
        user_obj = User.objects.get(pk=user_id)
        user_obj.favourites.create(recipe_id=dish_id)
        print(user_obj.favourites.all())
        return Response({"message": "dish addedd to favourites"})


class UserAPI(generics.RetrieveAPIView):
    permission_classes = [
        permissions.IsAuthenticated
    ]
    serializer_class = UserSerializer

    def get_object(self):
        return self.request.user
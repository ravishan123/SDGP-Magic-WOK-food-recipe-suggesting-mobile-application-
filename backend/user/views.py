from django.shortcuts import render
from .serializers import UserSerializer, UserRegisterSerializer, LoginSerializer, FavouritesSerializer
from .models import User, Favourites
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
        favourites = user.favourites.get(user=user)
        return Response({
            "user": UserSerializer(user, context=self.get_serializer_context()).data,
            "favourites": FavouritesSerializer(favourites),
            "token": AuthToken.objects.create(user)[1]
        })


class LoginAPI(generics.GenericAPIView):
    serializer_class = LoginSerializer

    def post(self, request, *args, **kwargs):
        print(request.data)
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data
        favourites = user.favourites.filter(user=user)
        print(FavouritesSerializer(favourites))
        return Response({
            "user": UserSerializer(user, context=self.get_serializer_context()).data,
            "favourites": FavouritesSerializer(favourites, context=self.get_serializer_context()).data,
            "token": AuthToken.objects.create(user)[1]
        })

class FavouritesAPI(generics.GenericAPIView):
    serializer_class = FavouritesSerializer

    def post(self, request, *args, **kwargs):
        # print(request.data)
        # dish_id = request.data["dish_id"]
        # user_id = request.data["user_id"]
        # is_favourite = request.data["is_favourite"]
        # user_obj = User.objects.get(pk=user_id)
        # user_obj.favourites.create(recipe_id=dish_id)
        # serializer = FavouritesSerializer(recipe_id=dish_id, data=request.data)
        # if serializer.is_valid():
        #     serializer.save()
        # print(user_obj.favourites.all())
        # return Response({"message": "dish addedd to favourites"})
        serializer = FavouritesSerializer(data=request.data, many=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            print('error', serializer.errors)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def get(self, request, pk, *args, **kwargs):
        print(self)
        print(request.data)
        user_obj = User.objects.get(pk=pk)
        # favourites = user_obj.favourites.filter(user=user_obj)
        favourites = Favourites.objects.filter(user=user_obj)
        serializer = FavouritesSerializer(favourites, many=True)
        return Response(serializer.data)

class UserAPI(generics.RetrieveAPIView):
    permission_classes = [
        permissions.IsAuthenticated
    ]
    serializer_class = UserSerializer

    def get_object(self):
        return self.request.user
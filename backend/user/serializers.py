from rest_framework import serializers
from .models import User, Favourites  #Account, User
from django.contrib.auth import authenticate


class UserRegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('email', 'password', 'first_name', 'last_name')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User.objects.create_user(validated_data['email'], 
                validated_data['password'],
                last_name=validated_data['last_name'], 
                first_name=validated_data['first_name'])
        return user

class LoginSerializer(serializers.Serializer):
    email = serializers.CharField()
    password = serializers.CharField()


    def validate(self, data):
        user = authenticate(**data)
        if user and user.is_active:
            return user
        raise serializers.ValidationError("incorrect credentials")

class FavouritesSerializer(serializers.Serializer):
    class Meta:
        model = Favourites
        fields = '__all__'

class UserSerializer(serializers.ModelSerializer):
    favourites = FavouritesSerializer(many=True)
    class Meta:
        model = User
        fields = ('email', 'first_name', 'last_name', 'favourites')
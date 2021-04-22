from rest_framework import serializers
from .models import User, Favourites  #Account, User
from django.contrib.auth import authenticate

class FavouritesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Favourites
        fields = '__all__'

    def create(self, validated_data):
        print("la la la ", validated_data)
        user_id = validated_data.pop('user_id')
        recipe_id = validated_data.pop('recipe_id')
        user_obj = User.objects.get(pk=user_id)
        favourites = Favourites.objects.create(user=user_obj, **recipe_id) # HERE!
        return favourites

class UserRegisterSerializer(serializers.ModelSerializer):
    favourites = FavouritesSerializer(many=True, required=False)
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
    favourites = FavouritesSerializer(many=True, required=False)
    email = serializers.CharField()
    password = serializers.CharField()


    def validate(self, data):
        user = authenticate(**data)
        if user and user.is_active:
            return user
        raise serializers.ValidationError("incorrect credentials")



class UserSerializer(serializers.ModelSerializer):
    favourites = FavouritesSerializer(many=True, required=False)
    class Meta:
        model = User
        fields = '__all__' #('email', 'first_name', 'last_name', 'favourites')
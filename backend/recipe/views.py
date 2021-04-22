from django.shortcuts import render
from django.db.models import Q
from rest_framework import generics
from .serializers import RecipeSerializer
from rest_framework.views import APIView
import backend.settings as settings
from .models import Recipe  
from rest_framework.response import Response

import tensorflow as tf
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing import image
import numpy as np
import base64
import io
from PIL import Image



class RecipeAPI(generics.GenericAPIView):
    serializer_class = RecipeSerializer



def ImageRegognition(request):
    print("We RISE AND FaLL")
    print(request)


class ImageRecognitionView(APIView):
    # model = load_model('best_model_101class.hdf5', compile = False)
    def prepare_image(image_str_tensor):
        image = tf.image.decode_image(image_str_tensor, channels=3)
        # image = tf.image.resize_images(image, [150, 150])
        return image

    def post(self, request, *args, **kwargs):
        food_list =  ['deviled_eggs',
                        'caesar_salad',
                        'lasagna',
                        'tuna_tartare',
                        'chicken_curry',
                        'beef_carpaccio',
                        'ceviche',
                        'hot_and_sour_soup',
                        'steak',
                        'shrimp_and_grits',
                        'risotto',
                        'spaghetti_bolognese',
                        'guacamole',
                        'french_fries',
                        'beignets',
                        'macaroni_and_cheese',
                        'nachos',
                        'grilled_salmon',
                        'french_toast',
                        'fried_rice',
                        'fish_and_chips',
                        'hummus',
                        'donuts',
                        'ramen',
                        'tacos',
                        'chocolate_mousse',
                        'falafel',
                        'prime_rib',
                        'lobster_roll_sandwich',
                        'peking_duck',
                        'beef_tartare',
                        'foie_gras',
                        'sashimi',
                        'waffles',
                        'lobster_bisque',
                        'grilled_cheese_sandwich',
                        'fried_calamari',
                        'crab_cakes',
                        'clam_chowder',
                        'pancakes',
                        'oysters',
                        'bread_pudding',
                        'chocolate_cake',
                        'carrot_cake',
                        'club_sandwich',
                        'eggs_benedict',
                        'ice_cream',
                        'apple_pie',
                        'beet_salad',
                        'baklava',
                        'garlic_bread',
                        'frozen_yogurt',
                        'onion_rings',
                        'omelette',
                        'greek_salad',
                        'seaweed_salad',
                        'samosa',
                        'cup_cakes',
                        'breakfast_burrito',
                        'tiramisu',
                        'pork_chop',
                        'cannoli',
                        'red_velvet_cake',
                        'baby_back_ribs',
                        'takoyaki',
                        'hot_dog',
                        'scallops',
                        'spring_rolls',
                        'edamame',
                        'pho',
                        'pad_thai',
                        'spaghetti_carbonara',
                        'caprese_salad',
                        'poutine',
                        'churros',
                        'chicken_wings',
                        'bruschetta',
                        'paella',
                        'cheesecake',
                        'filet_mignon',
                        'dumplings',
                        'croque_madame',
                        'creme_brulee',
                        'macarons',
                        'strawberry_shortcake',
                        'panna_cotta',
                        'hamburger',
                        'bibimbap',
                        'french_onion_soup',
                        'gyoza',
                        'pizza',
                        'cheese_plate',
                        'ravioli',
                        'mussels',
                        'chicken_quesadilla',
                        'escargots',
                        'gnocchi',
                        'pulled_pork_sandwich',
                        'miso_soup',
                        'huevos_rancheros',
                        'sushi']
        food_list_names =  ['Deviled eggs',
                        'Caesar salad',
                        'Lasagna',
                        'Tuna tartare',
                        'Chicken curry',
                        'Beef carpaccio',
                        'Ceviche',
                        'Hot and sour soup',
                        'Steak',
                        'Shrimp and grits',
                        'Risotto',
                        'Spaghetti bolognese',
                        'Guacamole',
                        'French fries',
                        'Beignets',
                        'Macaroni and cheese',
                        'Nachos',
                        'Grilled salmon',
                        'French toast',
                        'Friedvrice',
                        'Fish and chips',
                        'Hummus',
                        'Donuts',
                        'Ramen',
                        'Tacos',
                        'Chocolate mousse',
                        'Falafel',
                        'Prime rib',
                        'Lobster roll sandwich',
                        'Peking duck',
                        'Beef tartare',
                        'Foie gras',
                        'Sashimi',
                        'Waffles',
                        'Lobster bisque',
                        'Grilled cheese sandwich',
                        'Fried calamari',
                        'Crab cakes',
                        'Clam chowder',
                        'Pancakes',
                        'Oysters',
                        'Bread pudding',
                        'Chocolate cake',
                        'Carrot cake',
                        'Club sandwich',
                        'Eggs benedict',
                        'Ice cream',
                        'Apple pie',
                        'Beet salad',
                        'Baklava',
                        'Garlic bread',
                        'Frozen yogurt',
                        'Onion rings',
                        'Omelette',
                        'Greek salad',
                        'Seaweed salad',
                        'Samosa',
                        'Cup cakes',
                        'Breakfast burrito',
                        'Tiramisu',
                        'Pork chop',
                        'Cannoli',
                        'Red velvet cake',
                        'Baby back ribs',
                        'Takoyaki',
                        'Hot dog',
                        'Scallops',
                        'Spring rolls',
                        'Edamame',
                        'Pho',
                        'Pad thai',
                        'Spaghetti carbonara',
                        'Caprese salad',
                        'Poutine',
                        'Churros',
                        'Chicken wings',
                        'Bruschetta',
                        'Paella',
                        'Cheesecake',
                        'Filet mignon',
                        'Dumplings',
                        'Croque madame',
                        'Creme brulee',
                        'Macarons',
                        'Strawberry shortcake',
                        'Panna cotta',
                        'Hamburger',
                        'Bibimbap',
                        'French onion soup',
                        'Gyoza',
                        'Pizza',
                        'Cheese plate',
                        'Ravioli',
                        'Mussels',
                        'Chicken quesadilla',
                        'Escargots',
                        'Gnocchi',
                        'Pulled pork sandwich',
                        'Miso soup',
                        'Huevos rancheros',
                        'Sushi']
        print("I DONT NEED NOOO")
        # print(request.data)
        # image_b64decoded = tf.decode_base64(request.data["image_base64"])
        # safe_image_b64 = base64.urlsafe_b64encode(request.data["image_base64"])
        # image_b64decoded = tf.io.decode_base64(safe_image_b64)
        # print("request.data[image_base64] ", request.data["image_base64"])
        # print("IMAGE DECODED ", image_b64decoded)

        # image = tf.image.decode_image(request.data["image_base64"], channels=3)
        b64_image = request.data["image_base64"]
        # b64_image=b64_image.replace(" ","+")
        # b64_image = b64_image.replace(/(?:\r\n|\r|\n)/g, '')
        # image = tf.image.decode_jpeg(content, channels=3)
        # image = tf.cast(image, tf.float32) / 255.0
        # image = tf.image.decode_jpeg(tf.io.decode_base64(base64.urlsafe_b64encode(b64_image.encode())), channels=3)
        
        # b64_image = tf.io.decode_base64(b64_image)  # outputs  --  Invalid character found in base64
        b64_image = base64.b64decode(b64_image)
        img = Image.open(io.BytesIO(b64_image))
        img = img.resize((249, 249), Image.ANTIALIAS)
        # img = image.load_img(img, target_size=(249, 249))
        img = image.img_to_array(img)
        print("-------- LOADED ---------")
        img = np.expand_dims(img, axis=0)
        img /= 255. 
        # print(b64_image)
        # image = tf.image.decode_jpeg(b64_image, channels=3)
        
        # img = tf.image.resize_images(image, [150, 150])
        # img = image.load_img(img, target_size=(249, 249))
        # img = image.img_to_array(img)                    
        # img = np.expand_dims(img, axis=0)         
        # img /= 255.                                      
        print("IMG ---- ", img)
        pred = settings.model.predict(img)
        index = np.argmax(pred)
        print(" INDEX ---- ", index)
        food_list.sort()
        food_list_names.sort()
        pred_value = food_list[index]
        pred_dish_name = food_list_names[index]
        print("predicted value - ", pred_value)
        print("predicted dish - ", pred_dish_name)
        output = Recipe.objects.filter(recipe_name=pred_dish_name)
        serializer = RecipeSerializer(output, many=True)
        return Response(serializer.data)
 
class RecipeSearch(APIView):
    def post(self, request, *args, **kwargs):
        search_key = request.data['search_key']
        print(search_key)
        results = Recipe.objects.filter(
                Q(cooking_method__icontains=search_key) |
                Q(cuisine__icontains=search_key) |
                Q(ingredients__icontains=search_key) |
                Q(recipe_name__icontains=search_key)
            )
        print(results)
        serializer = RecipeSerializer(results, many=True)
        return Response(serializer.data)

import operator
from functools import reduce

class RecipeSearchByIngredient(APIView):
    def post(self, request, *args, **kwargs):
        print(request.data)
        search_key = request.data['search_keys']
        print(search_key)
        print(type(search_key))
        results = []
        predicates = []
        # for i in search_key:
        #     predicates.append(Q(ingredients__contains=i))
            # items = Recipe.objects.filter(Q(ingredients__icontains=i))
            # itemss = Recipe.objects.filter(reduce())
            # results.append(items)
        # results = Recipe.objects.filter(reduce(operator.or_, predicates))
        # print(results)
        # print(len(results))
        # filterList = ['P', 'T', 'R']
        query = Q()
        for item in search_key:
            query = query | Q(ingredients__icontains=item)
        results = Recipe.objects.filter(query)
        print(results)
        print(len(results))
        # results = Recipe.objects.filter(
        #         Q(cooking_method__icontains=search_key) |
        #         Q(cuisine__icontains=search_key) |
        #         Q(ingredients__icontains=search_key) |
        #         Q(recipe_name__icontains=search_key)
        #     )
        # print(results)
        serializer = RecipeSerializer(results, many=True)
        return Response(serializer.data)


class IngredientImageRecognitionView(APIView):
    # model = load_model('best_model_101class.hdf5', compile = False)
    def prepare_image(image_str_tensor):
        image = tf.image.decode_image(image_str_tensor, channels=3)
        # image = tf.image.resize_images(image, [150, 150])
        return image

    def post(self, request, *args, **kwargs):
        b64_image = request.data["image_base64"]
    
        b64_image = base64.b64decode(b64_image)
        img = Image.open(io.BytesIO(b64_image))
        img = img.resize((224, 224), Image.ANTIALIAS)

        img = image.img_to_array(img)
        print("-------- LOADED ---------")
        img = np.expand_dims(img, axis=0)
        img /= 255. 

        fruits = ['bell pepper', 'orange', 'spinach', 'eggplant', 'jalepeno', 'apple', 'peas', 'cucumber', 'corn', 'ginger', 'pineapple', 'lettuce', 'lemon', 'sweetpotato', 'beetroot', 'cabbage', 'garlic', 'cauliflower', 'kiwi', 'grapes', 'sweetcorn', 'chilli pepper', 'soy beans', 'pear', 'watermelon', 'turnip', 'onion', 'potato', 'paprika', 'mango', 'tomato', 'capsicum', 'raddish', 'banana', 'pomegranate', 'carrot']
        labels = {0: 'Apple Braeburn', 1: 'Apple Crimson Snow', 2: 'Apple Golden 1', 3: 'Apple Golden 2', 4: 'Apple Golden 3', 5: 'Apple Granny Smith', 6: 'Apple Pink Lady', 7: 'Apple Red 1', 8: 'Apple Red 2', 9: 'Apple Red 3', 10: 'Apple Red Delicious', 11: 'Apple Red Yellow 1', 12: 'Apple Red Yellow 2', 13: 'Apricot', 14: 'Avocado', 15: 'Avocado ripe', 16: 'Banana', 17: 'Banana Lady Finger', 18: 'Banana Red', 19: 'Beetroot', 20: 'Blueberry', 21: 'Cactus fruit', 22: 'Cantaloupe 1', 23: 'Cantaloupe 2', 24: 'Carambula', 25: 'Cauliflower', 26: 'Cherry 1', 27: 'Cherry 2', 28: 'Cherry Rainier', 29: 'Cherry Wax Black', 30: 'Cherry Wax Red', 31: 'Cherry Wax Yellow', 32: 'Chestnut', 33: 'Clementine', 34: 'Cocos', 35: 'Corn', 36: 'Corn Husk', 37: 'Cucumber Ripe', 38: 'Cucumber Ripe 2', 39: 'Dates', 40: 'Eggplant', 41: 'Fig', 42: 'Ginger Root', 43: 'Granadilla', 44: 'Grape Blue', 45: 'Grape Pink', 46: 'Grape White', 47: 'Grape White 2', 48: 'Grape White 3', 49: 'Grape White 4', 50: 'Grapefruit Pink', 51: 'Grapefruit White', 52: 'Guava', 53: 'Hazelnut', 54: 'Huckleberry', 55: 'Kaki', 56: 'Kiwi', 57: 'Kohlrabi', 58: 'Kumquats', 59: 'Lemon', 60: 'Lemon Meyer', 61: 'Limes', 62: 'Lychee', 63: 'Mandarine', 64: 'Mango', 65: 'Mango Red', 66: 'Mangostan', 67: 'Maracuja', 68: 'Melon Piel de Sapo', 69: 'Mulberry', 70: 'Nectarine', 71: 'Nectarine Flat', 72: 'Nut Forest', 73: 'Nut Pecan', 74: 'Onion Red', 75: 'Onion Red Peeled', 76: 'Onion White', 77: 'Orange', 78: 'Papaya', 79: 'Passion Fruit', 80: 'Peach', 81: 'Peach 2', 82: 'Peach Flat', 83: 'Pear', 84: 'Pear 2', 85: 'Pear Abate', 86: 'Pear Forelle', 87: 'Pear Kaiser', 88: 'Pear Monster', 89: 'Pear Red', 90: 'Pear Stone', 91: 'Pear Williams', 92: 'Pepino', 93: 'Pepper Green', 94: 'Pepper Orange', 95: 'Pepper Red', 96: 'Pepper Yellow', 97: 'Physalis', 98: 'Physalis with Husk', 99: 'Pineapple', 100: 'Pineapple Mini', 101: 'Pitahaya Red', 102: 'Plum', 103: 'Plum 2', 104: 'Plum 3', 105: 'Pomegranate', 106: 'Pomelo Sweetie', 107: 'Potato Red', 108: 'Potato Red Washed', 109: 'Potato Sweet', 110: 'Potato White', 111: 'Quince', 112: 'Rambutan', 113: 'Raspberry', 114: 'Redcurrant', 115: 'Salak', 116: 'Strawberry', 117: 'Strawberry Wedge', 118: 'Tamarillo', 119: 'Tangelo', 120: 'Tomato 1', 121: 'Tomato 2', 122: 'Tomato 3', 123: 'Tomato 4', 124: 'Tomato Cherry Red', 125: 'Tomato Heart', 126: 'Tomato Maroon', 127: 'Tomato Yellow', 128: 'Tomato not Ripened', 129: 'Walnut', 130: 'Watermelon'}                 
        print("IMG ---- ", img)
        # pred = settings.ingredient_model.predict(img)
        # index = np.argmax(pred)
        # print(" INDEX ---- ", index)
        # fruits.sort()
        # fruits.sort()
        # pred_value = fruits[index]
        # pred_dish_name = fruits[index]

        # Predict the label of the test_images
        pred = settings.ingredient_model.predict(img)
        pred = np.argmax(pred,axis=1)
        # Map the label
        pred = [labels[k] for k in pred]
        print(pred)

        # print("predicted value - ", pred_value)
        # print("predicted dish - ", pred_dish_name)
        # output = Recipe.objects.filter(recipe_name=pred_dish_name)
        # serializer = RecipeSerializer(output, many=True)
        return Response({"prediction":pred[0]})

class HomeRecipes(APIView):
    def get(self, request, *args, **kwargs):
        # results = Recipe.objects.filter(
        #     Q(cuisine__icontains = 'France') | Q(cuisine__icontains = 'Mexican') |
        #     Q(cuisine__icontains = 'Asian') | Q(cuisine__icontains = 'Chinese') | Q(cuisine__icontains = 'Italy') | 
        #     Q(cuisine__icontains = 'Italian') | Q(cuisine__icontains = 'American') | Q(cuisine__icontains = 'Japanese') |
        #     Q(cuisine__icontains = 'Japan') | Q(cuisine__icontains = 'Arabic')
        # )
        france_results = Recipe.objects.filter(Q(cuisine__icontains = 'France'))
        mexican_results = Recipe.objects.filter(Q(cuisine__icontains = 'Mexican'))
        asian_results = Recipe.objects.filter(Q(cuisine__icontains = 'Asian'))
        chinese_results = Recipe.objects.filter(Q(cuisine__icontains = 'Chinese'))
        italy_results = Recipe.objects.filter(Q(cuisine__icontains = 'Italy') | Q(cuisine__icontains = 'Italian'))
        american_results = Recipe.objects.filter(Q(cuisine__icontains = 'American'))
        arabic_results = Recipe.objects.filter(Q(cuisine__icontains = 'Arabic'))
        japan_results = Recipe.objects.filter(Q(cuisine__icontains = 'Japanese') | Q(cuisine__icontains = 'Japan'))

        france_serializer = RecipeSerializer(france_results, many=True)
        mexican_serializer = RecipeSerializer(mexican_results, many=True)
        asian_serializer = RecipeSerializer(asian_results, many=True)
        chinese_serializer = RecipeSerializer(chinese_results, many=True)
        italy_serializer = RecipeSerializer(italy_results, many=True)
        american_serializer = RecipeSerializer(american_results, many=True)
        arabic_serializer = RecipeSerializer(arabic_results, many=True)
        japan_serializer = RecipeSerializer(japan_results, many=True)
    
        return Response({"france": france_serializer.data, "mexican": mexican_serializer.data, "asian": asian_serializer.data, "chinese": chinese_serializer.data, "italy": italy_serializer.data, "american": american_serializer.data, "arabic": arabic_serializer.data, "japan": japan_serializer.data})


class HomeRecipeFrance(APIView):
    def get(self, request, *args, **kwargs):
        results = Recipe.objects.filter(
            Q(cuisine__icontains = 'France')
        )
        serializer = RecipeSerializer(results, many=True)
        return Response(serializer.data)

class HomeRecipeMexican(APIView):
    def get(self, request, *args, **kwargs):
        results = Recipe.objects.filter(
            Q(cuisine__icontains = 'Mexican')
        )
        serializer = RecipeSerializer(results, many=True)
        return Response(serializer.data)

class HomeRecipeChinese(APIView):
    def get(self, request, *args, **kwargs):
        results = Recipe.objects.filter(
            Q(cuisine__icontains = 'Chinese')
        )
        serializer = RecipeSerializer(results, many=True)
        return Response(serializer.data)

class HomeRecipeAsian(APIView):
    def get(self, request, *args, **kwargs):
        results = Recipe.objects.filter(
            Q(cuisine__icontains = 'Asian')
        )
        serializer = RecipeSerializer(results, many=True)
        return Response(serializer.data)

class HomeRecipeItaly(APIView):
    def get(self, request, *args, **kwargs):
        results = Recipe.objects.filter(
            Q(cuisine__icontains = 'Italy') |
            Q(cuisine__icontains = 'Italian')
        )
        serializer = RecipeSerializer(results, many=True)
        return Response(serializer.data)

class HomeRecipeAmerican(APIView):
    def get(self, request, *args, **kwargs):
        results = Recipe.objects.filter(
            Q(cuisine__icontains = 'American')
        )
        serializer = RecipeSerializer(results, many=True)
        return Response(serializer.data)

class HomeRecipeJapanese(APIView):
    def get(self, request, *args, **kwargs):
        results = Recipe.objects.filter(
            Q(cuisine__icontains = 'Japanese') |
            Q(cuisine__icontains = 'Japan')
        )
        serializer = RecipeSerializer(results, many=True)
        return Response(serializer.data)

class HomeRecipeArabic(APIView):
    def get(self, request, *args, **kwargs):
        results = Recipe.objects.filter(
            Q(cuisine__icontains = 'Arabic')
        )
        serializer = RecipeSerializer(results, many=True)
        return Response(serializer.data)
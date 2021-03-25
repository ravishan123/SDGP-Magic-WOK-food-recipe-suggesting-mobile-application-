from django.shortcuts import render
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
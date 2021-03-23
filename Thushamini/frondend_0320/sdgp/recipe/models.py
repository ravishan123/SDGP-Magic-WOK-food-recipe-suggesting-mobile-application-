from django.db import models
# import csv

# Create your models here.
class Recipe(models.Model):
    image = models.CharField(max_length = 225)
    recipe_name = models.CharField(max_length =100)
    total_time = models.CharField(max_length = 20)
    cuisine = models.CharField(max_length=200)
    ingredients = models.TextField(max_length=20000)
    cooking_method = models.TextField(max_length=20000)
    serving = models.CharField(max_length=20)
    

# with open('D:/IIT/2nd_year/sdgp/project/backend/backend/recipe/food 101.csv', "r", encoding="utf8") as csvfile:
#     reader = csv.DictReader(csvfile)
#     for row in reader:
#         # The header row values become your keys
#         image = row['Images']
#         recipe_name = row['recipe name']
#         total_time = row['total time']
#         cuisine = row['cuisine']
#         ingredients = row['ingredients']
#         cooking_method = row['cooking method']
#         serving = row['servings']
#         # etc....

#         new_recipe = Recipe(image=image, recipe_name=recipe_name, total_time=total_time, cuisine=cuisine, ingredients=ingredients, cooking_method=cooking_method, serving=serving)
#         new_recipe.save()
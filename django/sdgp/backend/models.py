from django.db import models

# Create your models here.
class User(models.Model):
    
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100, default=0)
    email = models.EmailField(max_length =60,unique = True,null = True)
    date_joined = models.DateTimeField(verbose_name='date joined', auto_now_add=True, null=True)
    last_login = models.DateTimeField(verbose_name='last login', auto_now=True, null=True)

class Food(models.Model):
    
    recipe_name = models.CharField(max_lenth =100)
    total_time = models.CharField(max_lenth = 20)
    cuisine = models.CharField(max_lenth=200)
    ingredients = models.TextField(max_lenth=20000)
    cooking_method = models.TextField(max_lenth=20000)
    serving = models.CharField(max_lenth=20)
    
    
  

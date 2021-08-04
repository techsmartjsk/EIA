from django.db import models
from django.db.models.fields import TextField

class Contents(models.Model):
    Heading = models.CharField(max_length=50)
    Content = models.TextField()
    image = models.CharField(max_length=50, default="background.png")

class Volumes(models.Model):
    name = models.CharField(max_length=50)
    link = models.CharField(max_length=50)
    volume = models.IntegerField(default=1)



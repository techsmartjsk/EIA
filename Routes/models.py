from django.db import models
from django.db.models.fields import TextField

class Contents(models.Model):
    Heading = models.CharField(max_length=50)
    Content = models.TextField()
    image = models.CharField(max_length=50, default="background.png")


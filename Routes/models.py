from django.db import models
from django.db.models.fields import TextField

class Contents(models.Model):

    types = (
        ('MAP','map'),
        ('IMAGE','image'),
    )
    Heading = models.CharField(max_length=50)
    Title = models.CharField(max_length=50,default="Title")
    Content = models.TextField()
    types = models.CharField(max_length=50,choices=types,default='image')
    image = models.CharField(max_length=250, default="background.png")

class Volumes(models.Model):
    name = models.CharField(max_length=50)
    link = models.CharField(max_length=350)
    volume = models.IntegerField(default=1)



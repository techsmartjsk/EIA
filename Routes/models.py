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
    eia_link = models.CharField(max_length=350, default="link")

    def __str__(self):
        return self.Heading

class Volumes(models.Model):
    name = models.CharField(max_length=50)
    link = models.CharField(max_length=350)
    volume = models.IntegerField(default=1)
    nts_link = models.CharField(max_length=350, default="link")

    def __str__(self):
        return self.name

class EIA_Contents(models.Model):
    types = (
        ('MAP','map'),
        ('IMAGE','image'),
    )
    Heading = models.CharField(max_length=50)
    Title = models.CharField(max_length=50,default="Title")
    Content = models.TextField()
    types = models.CharField(max_length=50,choices=types,default='image')
    image = models.CharField(max_length=250, default="background.png")
    nts_link = models.CharField(default='/none',max_length=250)

    def __str__(self):
        return self.Heading


class ImageReferences(models.Model):
    name = models.CharField(max_length=50)
    image = models.CharField(max_length=250)
    map = models.CharField(max_length=250)
    eia_link = models.CharField(max_length=350, default="link")

    def __str__(self):
        return self.name

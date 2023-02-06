from django.conf import settings
from django.db import models
from django.utils import timezone

class Post(models.Model):
   costs = models.CharField(max_length=10)
   description = models.TextField()
   date = models.DateTimeField()
   start_end = models.DateTimeField()

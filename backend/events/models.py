from django.db import models

class Event(models.Model):
	title = models.CharField(max_length=120)
	date = models.DateField()
	location = models.CharField(max_length=120, blank=True)

	def __str__(self):
		return self.title

# Create your models here.

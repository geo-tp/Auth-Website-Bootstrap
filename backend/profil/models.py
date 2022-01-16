from django.db import models
from django.contrib.auth.models import User
from django.core import validators

class Address(models.Model):
    street_number = models.CharField(max_length=20)
    street_type = models.CharField(max_length=200)
    street_name = models.CharField(max_length=300)
    city = models.CharField(max_length=500)
    zipcode = models.CharField(max_length=20)
    complement = models.CharField(max_length=500)


class Profil(models.Model):
    GENDER_MALE = "m"
    GENDER_FEMALE = "f"

    GENDER_CHOICES = (
        (GENDER_MALE, "Male"),
        (GENDER_FEMALE, "Female"),
    )
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    gender = models.CharField(max_length=1, choices=GENDER_CHOICES, blank=True, null=True)
    address = models.ForeignKey(Address, on_delete=models.CASCADE, blank=True, null=True)
    birth = models.DateField(blank=True, null=True)
    picture = models.ImageField(blank=True, null=True)


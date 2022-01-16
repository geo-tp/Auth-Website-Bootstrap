from django.shortcuts import render
from dj_rest_auth.registration.views import RegisterView
from django.contrib.auth.models import User
from profil.models import Profil


# Create your views here.
class MyRegisterView(RegisterView):

    def create(self, request, *args, **kwargs):

        response  = super().create(self.request, *args, **kwargs)

        user = User.objects.get(email=request.data["email"])

        Profil.objects.create(user=user)
        return response
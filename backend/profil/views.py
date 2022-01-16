from django.shortcuts import render
from rest_framework import viewsets
from .models import Profil
from .serializers import ProfilSerializer
from rest_framework.exceptions import NotAcceptable, ValidationError, PermissionDenied
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

# Create your views here.
class ProfilViewSet(viewsets.ModelViewSet):
    queryset = Profil.objects.all()
    serializer_class = ProfilSerializer

    permission_classes = [IsAuthenticated]

    def retrieve(self, request, *args, **kwargs):
        profile = self.get_object()

        if profile.user != request.user:
            raise PermissionDenied("It's not your profile")

        serializer = self.get_serializer(profile)
        return Response(serializer.data)

    def list(self, request, *args, **kwargs):

        profile = Profil.objects.get(user=request.user)
        serializer = self.get_serializer(profile)
        return Response(serializer.data)

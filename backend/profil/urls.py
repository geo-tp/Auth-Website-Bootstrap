
from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from .views import ProfilViewSet

router = routers.DefaultRouter()
router.register(r'', ProfilViewSet)


urlpatterns = [
    path('/', include(router.urls)),
]

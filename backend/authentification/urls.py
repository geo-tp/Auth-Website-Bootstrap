from django.urls import path, include
from allauth.account.views import confirm_email
from .views import MyRegisterView
from dj_rest_auth.registration.views import VerifyEmailView

urlpatterns = [
    # path('/accounts/', include("allauth.urls")),
    path('', include('dj_rest_auth.urls')),
    path('registration/', MyRegisterView.as_view()),
    path('registration/account-confirm-email/', VerifyEmailView.as_view(), name='account_email_verification_sent'),    
    path('registration/account-confirm-email/<key>', confirm_email, name='account_confirm_email'),
]

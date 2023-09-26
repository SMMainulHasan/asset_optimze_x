<<<<<<< HEAD
from django.urls import path
from account.views import SendPasswordResetEmailView, UserChangePasswordView, UserLoginView, UserProfileView, UserRegistrationView, UserPasswordResetView
urlpatterns = [
    path('register/', UserRegistrationView.as_view(), name='register'),
    path('login/', UserLoginView.as_view(), name='login'),
    path('profile/', UserProfileView.as_view(), name='profile'),
    path('changepassword/', UserChangePasswordView.as_view(), name='changepassword'),
    path('send-reset-password-email/', SendPasswordResetEmailView.as_view(), name='send-reset-password-email'),
    path('reset-password/<uid>/<token>/', UserPasswordResetView.as_view(), name='reset-password'),

]



=======

from django.urls import path, include
from account.views import *

urlpatterns = [
    path('register/', UserRegistrationView.as_view(), name = 'register'),
    path('register/<uid>/<token>/', RegisterAccountActivate.as_view(), name = 'active-account'),
    path('login/', UserLoginView.as_view(), name = 'login'),
    path('profile/', UserProfileView.as_view(), name = 'profile'),
    
    path('send-reset-password-email/', SendPasswordResetEmailView.as_view(), name = 'send-reset-password-email'), 
    path('reset-password/<uid>/<token>/', UserPasswordResetView.as_view(), name = 'reset-password'),
   
]
>>>>>>> 806a051d955290bff3b669c8aef3896dba9c1519

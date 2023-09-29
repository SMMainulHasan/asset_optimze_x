from django.shortcuts import render
from rest_framework import generics, permissions
from account.models import User
from user_profile.serializers import *
from account.renders import UserRenderer
from rest_framework.response import Response

# Create your views here.
class UpdateUser(generics.UpdateAPIView):
  renderer_classes = [UserRenderer]
  permission_classes = [permissions.IsAuthenticated]
  def post(self, request, format=None):
    serializer = UserProfileSerialiser(data= request.data)
    serializer.is_valid(raise_exception=True)
    serializer.save()
    return Response({'msg': 'profile Update Successfully'})  
   
    
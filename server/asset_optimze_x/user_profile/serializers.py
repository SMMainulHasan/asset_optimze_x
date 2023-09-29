from account.models import User
from user_profile.models import Company, UserProfile, AddUserModel
from rest_framework import serializers

class UserProfileSerialiser(serializers.ModelSerializer):
  
  class Meta:
    model = User
    fields = ['name','email', 'phone_number']
    

    
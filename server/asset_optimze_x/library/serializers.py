from rest_framework import serializers
from .models import Library, LibraryAccess

class LibrarySerializer(serializers.ModelSerializer):
    class Meta:
        model = Library
        fields = '__all__'

class LibraryAccessSerializer(serializers.ModelSerializer):
    class Meta:
        model = LibraryAccess
        fields = '__all__'
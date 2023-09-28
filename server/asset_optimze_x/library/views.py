from django.shortcuts import render
from rest_framework import generics
from .models import Library, LibraryAccess
from .serializers import LibrarySerializer, LibraryAccessSerializer

# Create your views here.
class LibraryListCreateView(generics.ListCreateAPIView):
    queryset = Library.objects.all()
    serializer_class = LibrarySerializer

class LibraryAccessListCreateView(generics.ListCreateAPIView):
    queryset = LibraryAccess.objects.all()
    serializer_class = LibraryAccessSerializer
from django.urls import path
from .views import LibraryListCreateView, LibraryAccessListCreateView

urlpatterns = [
    path('list/', LibraryListCreateView.as_view(), name='library-list'),
    path('access/', LibraryAccessListCreateView.as_view(), name='library-access-list'),
]
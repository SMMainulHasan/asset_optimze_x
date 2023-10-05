from django.urls import path, include
from organization.views import *
from rest_framework.routers import DefaultRouter
# from organization.demo import *
router = DefaultRouter()
router.register(r'register', OrganizationRegisterAPIView)
# router.register(r'list', OrganizationTotal, basename='list')


urlpatterns = [
  path('', include(router.urls)),
  path('register/<uid>/<token>/<organization_name>/', registerOrganizationVerify.as_view()),
  path('list/', OrganizationTotal.as_view()),
]

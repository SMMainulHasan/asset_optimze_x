from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
<<<<<<< HEAD
    path('api/user/', include('account.urls'))
=======
     path('api/user/', include('account.urls')),
>>>>>>> 806a051d955290bff3b669c8aef3896dba9c1519
]

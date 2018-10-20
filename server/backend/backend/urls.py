
from django.contrib import admin
from django.urls import path, include

from .views import home


urlpatterns = [
    path('accounts/', include('accounts.urls')),
    path('admin/', admin.site.urls),
]

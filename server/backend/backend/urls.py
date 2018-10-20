
from django.contrib import admin
from django.urls import path, include

from .views import home
from django.conf.urls import url, include
from rest_framework import routers
from homepage import views

router = routers.DefaultRouter()
router.register(r'persons', views.PersonViewSet)

urlpatterns = [
    path('accounts/', include('accounts.urls')),
    path('chat/', include('chat.urls')),
    path('homepage/', include('homepage.urls')),
    path('admin/', admin.site.urls),
    url(r'^', include(router.urls)),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]

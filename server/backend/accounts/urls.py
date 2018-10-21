from django.urls import path
from . import views

from accounts.views import seeker_login_view, professional_login_view, seeker_register_view,professional_register_view, logout_view, seeker_profile


urlpatterns = [
    path('login/seeker/', seeker_login_view, ),
    path('login/professional/', professional_login_view),
    path('register/seeker/', seeker_register_view),
    path('register/professional/', professional_register_view),
    path('profile/seeker/', seeker_profile),
    #path('profile/professional', professional_profile),
    path('logout/', logout_view)
]

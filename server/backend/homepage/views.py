from django.shortcuts import render
from rest_framework import viewsets
from homepage.serializers import PersonSerializer
from homepage.models import Person

# Create your views here.
class PersonViewSet(viewsets.ModelViewSet):
    queryset = Person.objects.all()
    serializer_class = PersonSerializer

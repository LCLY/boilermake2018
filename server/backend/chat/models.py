from django.contrib.auth.models import User
from django.db import models


class Message(models.Model):
    """
    Model to represent user submitted changed to a resource guide
    """
    username = models.TextField(default='kek1')
    group_name = models.TextField()
    message = models.TextField()
    created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        """
        String to represent the message
        """

        return self.message
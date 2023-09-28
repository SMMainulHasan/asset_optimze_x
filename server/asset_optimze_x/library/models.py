from django.db import models
from django.conf import settings
from django.utils.text import slugify
from organization.models import Organization

class Library(models.Model):
    library_name = models.CharField(max_length=100)
    library_slug = models.SlugField(unique=True)
    description = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    organization = models.ForeignKey(Organization, on_delete=models.CASCADE)

    def save(self, *args, **kwargs):
        self.library_slug = slugify(self.library_name)
        super().save(*args, **kwargs)

    def __str__(self):
        return self.library_name

class LibraryAccess(models.Model):
    ROLE_CHOICES = (
        ('editor', 'Editor'),
        ('user_access', 'User Access'),
    )

    id = models.AutoField(primary_key=True)
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    library = models.ForeignKey(Library, on_delete=models.CASCADE)
    added_date = models.DateTimeField(auto_now_add=True)
    role = models.CharField(max_length=20, choices=ROLE_CHOICES, default='user_access')

    def __str__(self):
        return f"{self.user.username} - {self.library.library_name}"
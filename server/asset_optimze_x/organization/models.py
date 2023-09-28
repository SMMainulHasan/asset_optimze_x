from django.db import models
from account.models import User
from django.utils.text import slugify

class Organization(models.Model):
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=100, unique=True)
    slug = models.SlugField(unique=True)
    description = models.TextField()
    created_date = models.DateField(auto_now_add=True)
    logo = models.ImageField(upload_to='organization_logos/', blank=True, null=True)
    cover_img = models.ImageField(upload_to='organization_cover_img/', blank=True, null=True)
    
    def __str__(self):
        return self.name
    
    def save(self, *args, **kwargs):
        # Generate the slug by combining organization name and user's ID
        self.slug = slugify(f"{self.name} {self.user.id}")
        super(Organization, self).save(*args, **kwargs)
        
class OrganizationMember(models.Model):
    organization = models.ForeignKey(Organization, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    added_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.user.username} - {self.organization.name}"

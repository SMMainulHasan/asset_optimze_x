from django.contrib import admin
from .models import Organization, OrganizationMember

@admin.register(Organization)
class OrganizationAdmin(admin.ModelAdmin):
    list_display = ('name', 'description', 'created_date', 'slug')
    search_fields = ('name', 'description', 'user__username')
    prepopulated_fields = {'slug': ('name',),}
    # autocomplete_fields = 'user__username'  # Add this line for user_id prepopulation

@admin.register(OrganizationMember)
class OrganizationMemberAdmin(admin.ModelAdmin):
    list_display = ('organization', 'user', 'added_date')
    search_fields = ('organization__name', 'user__username')
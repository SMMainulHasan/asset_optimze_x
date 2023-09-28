from django.contrib import admin
from .models import Library, LibraryAccess

# Register your models here.

@admin.register(Library)
class LibraryAdmin(admin.ModelAdmin):
    list_display = ('library_name', 'library_slug', 'description', 'created_at', 'updated_at', 'organization')
    list_filter = ('created_at', 'updated_at', 'organization')
    search_fields = ('library_name', 'library_slug', 'description', 'organization__name')

@admin.register(LibraryAccess)
class LibraryAccessAdmin(admin.ModelAdmin):
    list_display = ('user', 'library', 'added_date', 'role')
    list_filter = ('added_date', 'role')
    search_fields = ('user__username', 'library__library_name', 'role')

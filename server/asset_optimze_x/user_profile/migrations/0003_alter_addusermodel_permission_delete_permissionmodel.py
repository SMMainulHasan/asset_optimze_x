# Generated by Django 4.2.5 on 2023-09-27 12:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user_profile', '0002_permissionmodel_addusermodel'),
    ]

    operations = [
        migrations.AlterField(
            model_name='addusermodel',
            name='permission',
            field=models.CharField(choices=[('Read', 'Read'), ('Write', 'Write'), ('Admin', 'Admin')], max_length=50),
        ),
        migrations.DeleteModel(
            name='PermissionModel',
        ),
    ]
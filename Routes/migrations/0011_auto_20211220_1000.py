# Generated by Django 3.1.3 on 2021-12-20 10:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Routes', '0010_eia_contents_imagereferences'),
    ]

    operations = [
        migrations.AddField(
            model_name='contents',
            name='eia_link',
            field=models.CharField(default='link', max_length=350),
        ),
        migrations.AddField(
            model_name='imagereferences',
            name='eia_link',
            field=models.CharField(default='link', max_length=350),
        ),
    ]
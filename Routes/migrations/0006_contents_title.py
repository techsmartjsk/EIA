# Generated by Django 3.1.3 on 2021-08-18 15:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Routes', '0005_auto_20210804_1021'),
    ]

    operations = [
        migrations.AddField(
            model_name='contents',
            name='Title',
            field=models.CharField(default='Title', max_length=50),
        ),
    ]
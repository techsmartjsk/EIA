# Generated by Django 3.1.3 on 2021-08-04 09:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Routes', '0002_contents_image'),
    ]

    operations = [
        migrations.CreateModel(
            name='Volumes',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('link', models.CharField(max_length=50)),
            ],
        ),
    ]

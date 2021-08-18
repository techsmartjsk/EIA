from Routes.models import Contents, Volumes
from django.contrib import admin
from django_summernote.admin import SummernoteModelAdmin

class ContentsAdmin(SummernoteModelAdmin):
    summernote_fields = ('Content',)

admin.site.register(Contents,ContentsAdmin);
admin.site.register(Volumes)

from Routes.models import Contents, Volumes
from django.contrib import admin
from django_summernote.admin import SummernoteModelAdmin
from import_export.admin import ImportExportModelAdmin

class ContentsAdmin(SummernoteModelAdmin):
    summernote_fields = ('Content',)

admin.site.register(Contents,ImportExportModelAdmin)
#admin.site.register(Contents,ContentsAdmin)
admin.site.register(Volumes)

from django.db.models.aggregates import Sum
from Routes.models import Contents, EIA_Contents, ImageReferences, Volumes
from django.contrib import admin
from django_summernote.admin import SummernoteModelAdmin
from import_export.admin import ImportExportModelAdmin

class ContentsAdmin(SummernoteModelAdmin):
    summernote_fields = ('Content',)

admin.site.register(Contents,SummernoteModelAdmin)
#admin.site.register(Contents,ContentsAdmin)
admin.site.register(Volumes)
admin.site.register(EIA_Contents,SummernoteModelAdmin)
admin.site.register(ImageReferences)

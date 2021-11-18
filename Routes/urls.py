from django.urls.conf import path
from . import views

urlpatterns = [
    path('',views.index,name='index'),
    path('maps/',views.maps,name='maps'),
    path('about/',views.about,name='about'),
    path('contents/<str:title>',views.contents,name='contents'),
    path('EIA/<str:title>',views.EIA_Content,name="EIA_Contents"),
    path('volumes/<int:v_id>',views.Volume,name='Volumes'),
    path('disclaimer/',views.Disclaimer,name='Disclaimer'),
    path('IMAGE',views.ImageFullScreen,name='ImageFullScreen'),
    path('MAP',views.MapFullScreen,name='MapFullScreen'),
    path('contact/',views.Contact,name="contact"),
    path('Chapters/<str:title>',views.Chapters,name="Chapters"),
    path('Chapters/<str:title>/<str:image_ref>',views.ChaptersWithImage,name="ChaptersWithImage"),
    path('FullScreen/<str:name>',views.FullScreen,name="FullScreen"),
    path('loaderio-24e5de954e5362e9a5800406e174dc5b/',views.test,name="test"),
]

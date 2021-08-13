from django.urls.conf import path
from . import views

urlpatterns = [
    path('',views.index,name='index'),
    path('maps/',views.maps,name='maps'),
    path('about/',views.about,name='about'),
    path('contents/<str:title>',views.contents,name='contents'),
    path('volumes/<int:v_id>',views.Volume,name='Volumes'),
    path('disclaimer/',views.Disclaimer,name='Disclaimer'),
]

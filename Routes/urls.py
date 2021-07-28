from django.urls.conf import path
from . import views

urlpatterns = [
    path('',views.index,name='index'),
    path('maps/',views.maps,name='maps'),
    path('about/',views.about,name='about'),
]

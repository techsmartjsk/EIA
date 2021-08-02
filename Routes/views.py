from Routes.models import Contents
from django.shortcuts import render

def index(request):
    return render(
        request,
        'index.html',{}
    )

def maps(request):

    context={}
    context['titles'] = [
        {'name':'Abbreviations','heading':'Abbreviations'},
        {'name':'Background','heading':'Background'},
        {'name':'Purpose','heading':'Purpose'},
        {'name':'Availability','heading':'Availability'},
        {'name':'SiteLocation','heading':'Site Location and Description'},
        {'name':'SiteDesign','heading':'Site Selection and Design'},
        {'name':'Description','heading':'Description'},
        {'name':'Consultation','heading':'Consultation'},
        {'name':'EIA','heading':'EIA'},
        {'name':'Benefits','heading':'Benefits'},
        {'name':'Conclusion','heading':'Conclusion'}]

    return render(
        request,
        'maps.html',context
    )

def about(request):
    return render(
        request,
        'about.html',{}
    )  

def contents(request,title):
    context = {}
    info = Contents.objects.filter(Heading__contains = title)
    context['info'] = info

    return render(
        request,
        'contents.html',context
    )      
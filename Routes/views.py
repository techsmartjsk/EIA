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

    info = Contents.objects.filter(Heading__contains = title)
    context['info'] = info

    return render(
        request,
        'contents.html',context
    )   

def EIA(request):
    
    context = {}

    context['list'] = [{ 'id': 1,'heading':'Volume1 : Chapters'},
    {'id': 2,'heading':'Volume2 : Figures'},
    {'id': 3,'heading':'Volume3 : LVIA NatureScot Figures'},
    {'id': 4,'heading':'Volume4 : LVIA THC Figures'},
    {'id': 5,'heading':'Volume5 : Appendices'}]

    return render(request,
    'EIA.html',
    context
    )
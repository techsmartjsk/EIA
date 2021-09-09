from Routes.models import Contents, Volumes
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
    context['title'] = title

    return render(
        request,
        'contents.html',context
    )   

def Volume(request,v_id):
    context={}

    context['list'] = [{ 'id': 1,'heading':'Volume 1 : Chapters','link':'/volumes/1'},
    {'id': 2,'heading':'Volume 2 : Figures','link':'/volumes/2'},
    {'id': 3,'heading':'Volume 3 : LVIA NatureScot Figures','link':'https://www.dropbox.com/s/cnzlm29lt7dxvz3/Volume3_Sallachy_NatureScot_VPS_HighRes_Final_forDoubleSidedPrinting.pdf?dl=0'},
    {'id': 4,'heading':'Volume 4 : LVIA THC Figures','link':'https://www.dropbox.com/s/vbahd3uzuyku75t/Volume4_Sallachy_THC_VPS_HighRes_Final.pdf?dl=0'},
    {'id': 5,'heading':'Volume 5 : Appendices'}]

    volume_info = Volumes.objects.filter(volume__contains = v_id).order_by('id')

    context['volume_info'] = volume_info

    return render(request,
    'EIAVolumes.html',
    context)


def Disclaimer(request):
    return render(request,'disclaimer.html',{});
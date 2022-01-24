from Routes.models import Contents, ImageReferences, Volumes, EIA_Contents
from django.shortcuts import redirect, render
from .forms import UserLogin
from django.contrib.auth import login as auth_login, authenticate
from django.contrib.auth.decorators import login_required

@login_required
def index(request):
    return render(
        request,
        'index.html',{
            'nav':'home',
        }
    )

@login_required
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
    
    context['nav'] = 'nts'


    return render(
        request,
        'maps.html',context
    )

@login_required
def about(request):
    return render(
        request,
        'about.html',{}
    )  

@login_required
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
    if(title == 'Noise'):
        context['eia_menu'] = 'true'
    else:
        context['eia_menu'] = 'false'
    info = Contents.objects.filter(Heading__contains = title)
    context['info'] = info
    context['title'] = title
    context['nav'] = 'nts'

    return render(
        request,
        'contents.html',context
    )   

@login_required
def EIA_Content(request,title):
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
    context['nav'] = 'nts'
    context['eia_menu'] = 'true'

    return render(
        request,
        'contents.html',context
    )  

@login_required
def Volume(request,v_id):
    context={}

    context['list'] = [{ 'id': 1,'heading':'01 : Chapters','link':'/volumes/1'},
    {'id': 2,'heading':'02 : Figures','link':'https://www.dropbox.com/sh/rn9k2jk1s7dawx7/AABMut9Svk-xK67U0JU0pKY-a?dl=1'},
    {'id': 3,'heading':'03 : LVIA NatureScot Figures','link':'https://www.dropbox.com/s/cnzlm29lt7dxvz3/Volume3_Sallachy_NatureScot_VPS_HighRes_Final_forDoubleSidedPrinting.pdf?dl=1'},
    {'id': 4,'heading':'04 : LVIA THC Figures','link':'https://www.dropbox.com/s/vbahd3uzuyku75t/Volume4_Sallachy_THC_VPS_HighRes_Final.pdf?dl=1'},
    {'id': 5,'heading':'05 : Appendices','link':'https://www.dropbox.com/sh/mqa0ptushfqtc4n/AABqWq3cOXvyG21E6JkoMs1ua?dl=1'}]

    volume_info = Volumes.objects.all().order_by('volume')

    context['volume_info'] = volume_info
    context['nav'] = 'eia'

    return render(request,
    'EIAVolumes.html',
    context)

@login_required
def Disclaimer(request):
    return render(request,'disclaimer.html',{
        'nav':'disclaimer'
    });

@login_required
def ImageFullScreen(request):
    if request.method == 'POST':
        return render(request,'image_full_screen.html',{
            'id': request.POST['image'],
        })

@login_required
def MapFullScreen(request):
    if request.method == 'POST':
        return render(request,'MapFullScreen.html',{
            'id': request.POST['image'],
        })

@login_required
def Contact(request):
    return render(request,'contact.html',{
        'nav':'contact',
    })

@login_required
def Chapters(request,title):
    context = {}

    context['list'] = [{ 'id': 1,'heading':'01 : Chapters','link':'/volumes/1'},
    {'id': 2,'heading':'02 : Figures','link':'https://www.dropbox.com/sh/rn9k2jk1s7dawx7/AABMut9Svk-xK67U0JU0pKY-a?dl=1'},
    {'id': 3,'heading':'03 : LVIA NatureScot Figures','link':'https://www.dropbox.com/s/cnzlm29lt7dxvz3/Volume3_Sallachy_NatureScot_VPS_HighRes_Final_forDoubleSidedPrinting.pdf?dl=1'},
    {'id': 4,'heading':'04 : LVIA THC Figures','link':'https://www.dropbox.com/s/vbahd3uzuyku75t/Volume4_Sallachy_THC_VPS_HighRes_Final.pdf?dl=1'},
    {'id': 5,'heading':'05 : Appendices','link':'https://www.dropbox.com/sh/mqa0ptushfqtc4n/AABqWq3cOXvyG21E6JkoMs1ua?dl=1'}]

    context['info'] = EIA_Contents.objects.filter(Heading__contains = title)
    context['nav'] = 'eia'
    return render(request,'chapters.html',context)

@login_required
def ChaptersWithImage(request,title,image_ref):
    context = {}

    context['list'] = [{ 'id': 1,'heading':'01 : Chapters','link':'/volumes/1'},
    {'id': 2,'heading':'02 : Figures','link':'https://www.dropbox.com/sh/rn9k2jk1s7dawx7/AABMut9Svk-xK67U0JU0pKY-a?dl=1'},
    {'id': 3,'heading':'03 : LVIA NatureScot Figures','link':'https://www.dropbox.com/s/cnzlm29lt7dxvz3/Volume3_Sallachy_NatureScot_VPS_HighRes_Final_forDoubleSidedPrinting.pdf?dl=1'},
    {'id': 4,'heading':'04 : LVIA THC Figures','link':'https://www.dropbox.com/s/vbahd3uzuyku75t/Volume4_Sallachy_THC_VPS_HighRes_Final.pdf?dl=1'},
    {'id': 5,'heading':'05 : Appendices','link':'https://www.dropbox.com/sh/mqa0ptushfqtc4n/AABqWq3cOXvyG21E6JkoMs1ua?dl=1'}]

    context['info'] = EIA_Contents.objects.filter(Heading__contains = title)
    context['image_ref'] = ImageReferences.objects.filter(name__contains = image_ref)
    context['nav'] = 'chapters'
    return render(request,'chapters_image.html',context)

@login_required
def FullScreen(request,name):
    context = {}
    context['name'] = name
    context['Ref'] = ImageReferences.objects.filter(name__contains = name)
    return render(request,'FullScreen.html',context)

@login_required
def test(request):
    return render(request,'loaderio-24e5de954e5362e9a5800406e174dc5b.txt',{})

def login(request):
    next = request.GET.get('next')
    if request.method == 'POST':
        form = UserLogin(request.POST)
        if form.is_valid():
            username = form.cleaned_data['username']
            password = form.cleaned_data['password']

            user = authenticate(username=username, password=password)
            auth_login(request,user)
            if next:
                redirect(next)
            return redirect('/')
    else:
        form = UserLogin()

    context = {
        'form': form,
    }

    return render(request, 'login.html', context)
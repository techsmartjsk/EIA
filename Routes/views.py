from django.shortcuts import render

def index(request):
    return render(
        request,
        'index.html',{}
    )

def maps(request):
    return render(
        request,
        'maps.html',{}
    )
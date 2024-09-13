from django.shortcuts import render
# from django.http import HttpResponse

# Create your views here.

def IndexView(request):
    '''Esto es la págona principal'''
    return render(request, "index.html")

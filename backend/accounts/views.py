from django.shortcuts import render

# Create your views here.
from django.urls import reverse
from django.contrib.auth import authenticate, login
from django.http import HttpResponseRedirect

def signup(request):
    if request.method == "POST":
        return render(request, 'users/main.html')

    elif request.method == "POST":
        username = request.POST['username']
        password = request.POST['password']
        user = authenticate(request, username=username, password=password)

        if user is not None:
                login(request, user)
                # Redirect to a success page.
                return HttpResponseRedirect(reverse('posts:index'))
        else:
            # Return an 'invalid login' error message.
            return render(request, 'users/main.html')
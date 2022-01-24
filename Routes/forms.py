from django import forms
from django.contrib.auth import authenticate
from django.contrib.auth.models import User

class UserLogin(forms.Form):
    username = forms.CharField(
        widget=forms.TextInput(
            attrs={'placeholder': 'username', 
            'class': 'login__input',})
            )
    password = forms.CharField(
        widget=forms.TextInput(
            attrs={'placeholder': 'password', 
            'class': 'login__input',
            'type': 'password',
            'id':'password'})
        )

    def clean(self,*args,**kwargs):
        username = self.cleaned_data.get("username")
        password = self.cleaned_data.get("password")

        if username and password:
            user = authenticate(username = username,password = password)

            if not User.objects.filter(username=username).exists():
                raise forms.ValidationError('This user does not exist')

            if not user:
                raise forms.ValidationError( "Incorrect Password")
            if not user.is_active:
                raise forms.ValidationError('This user is not active')

        return super(UserLogin,self).clean(*args,**kwargs)

from django.urls import path
from app import views

urlpatterns = [
    # path(r'^$', views.index, name='index'),
    path('', views.index, name='index'),
]

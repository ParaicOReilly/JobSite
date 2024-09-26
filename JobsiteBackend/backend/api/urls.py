from django.contrib import admin
from django.urls import path
from .views import create_job, get_all_jobs, get_home_jobs, read_job

urlpatterns = [
    path('jobs/create/', create_job, name = 'create_user'),
    path('jobs/', get_all_jobs, name= 'get_all_jobs'),
    path('jobs/home/', get_home_jobs, name = 'get_home_jobs'),
    path('jobs/<int:pk>', read_job, name='read_job' )
]
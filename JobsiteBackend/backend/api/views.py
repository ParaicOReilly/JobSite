from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .serializers import JobSerializer
from .models import Job


@api_view(['POST'])
def create_job(request):
    serializer = JobSerializer(data = request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status = status.HTTP_201_CREATED)
    return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def get_all_jobs(request):
    jobs = Job.objects.all()
    serializer = JobSerializer(jobs, many = True)
    return Response(serializer.data)

@api_view(['GET'])
def get_home_jobs(request):
    jobs = Job.objects.all()[:3]
    serializer = JobSerializer(jobs, many = True)
    return Response(serializer.data)

@api_view(['GET'])
def read_job(request, pk):
    try:
        job = Job.objects.get(pk = pk)
        serialzer = JobSerializer(job)
        return Response(serialzer.data)

    except Job.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
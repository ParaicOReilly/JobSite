from django.db import models

# Create your models here.

class Company(models.Model):
    name = models.CharField(max_length=200)
    description = models.CharField(max_length=200)
    contactEmail = models.CharField(max_length=200)
    contactPHone = models.CharField(max_length=200)

    def __str__(self) -> str:
        return self.name


class Job(models.Model):
    title = models.CharField(max_length=30)
    type = models.CharField(max_length=25)
    description = models.CharField(max_length=100)
    location = models.CharField(max_length=20)
    salary = models.IntegerField()
    #company = models.ForeignKey(Company, related_name="jobs", on_delete=models.CASCADE)

    def __str__(self) -> str:
        return super().__str__()
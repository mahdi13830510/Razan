from django.db import models

class Semester(models.Model):
    name = models.CharField(max_length=50)
    start_date = models.DateField()
    end_date = models.DateField()
    active = models.BooleanField(default=False)
    
    def activate(self):
        self.active = True
        self.save()

    def __str__(self):
        return f"{self.name} ({self.start_date} - {self.end_date})"
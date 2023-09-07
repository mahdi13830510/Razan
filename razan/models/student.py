from django.db import models
from .staff import Staff

class Student(Staff):
    credits_earned = models.IntegerField(default=0)
    
    def calculate_credits(self):
        pass
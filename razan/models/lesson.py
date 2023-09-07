from django.db import models
from django.forms import ValidationError

class Lesson(models.Model):
    name = models.CharField(max_length=100)
    date = models.DateField()
    start_time = models.TimeField()
    end_time = models.TimeField()
    prerequisites = models.ManyToManyField('self', symmetrical=False, blank=True)
    credits = models.IntegerField()
    
    def available_to_enroll(self, student):
        pass
    
    def has_prequisites(self, user):
        for prereq in self.prerequisites.all():
            if not user.lessons_taken.filter(id=prereq.id).exists():
                return False
        return True
    
    def clean(self, user):
        if not self.has_prequisites(user):
            raise ValidationError('You must complete the prerequisites for this lesson')
    
    def save(self, user, *args, **kwargs):
        self.clean(user)
        super().save(*args, **kwargs)
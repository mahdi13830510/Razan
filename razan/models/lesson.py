from django.db import models

class Lesson(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    date = models.DateField()
    start_time = models.TimeField()
    end_time = models.TimeField()
    prerequisites = models.ManyToManyField('self', symmetrical=False, blank=True)
    
    def has_prequisites(self, user):
        for prereq in self.prerequisites.all():
            if not user.lessons_taken.filter(id=prereq.id).exists():
                return False
        return True
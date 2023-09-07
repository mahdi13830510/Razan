from django.db import models
from models import Lesson, Teacher

class Term(Lesson):
    semester = models.ForeignKey('Semester', on_delete=models.CASCADE)
    teacher = models.ForeignKey('Teacher', on_delete=models.CASCADE)
    code = models.CharField(max_length=10)
    capacity = models.IntegerField()
    enrollend_students = models.IntegerField(default=0)
    avaialble_seats = models.IntegerField(default=capacity)
    waitlisted_students = models.ManyToManyField('Student')
    
    def waitlist_student(self, student):
        pass
    
    def admint_from_waitlist(self, student):
        pass
    
    def is_full(self):
        return self.enrollend_students >= self.capacity
    
    def enroll_student(self, student):
        if not self.is_full():
            self.enrollend_students += 1
            self.avaialble_seats -= 1
            Enrollment.objects.create(student=student, term=self)
            self.save()
        else:
            raise ValueError("No seats available")
    
    def withdraw_student(self, student):
        try:
            enrollment = Enrollment.objects.get(student=student, term=self)
            enrollment.delete()
            self.enrollend_students -= 1
            self.avaialble_seats +=1
            self.save()
        except Enrollment.DoesNotExist:
            raise ValueError("Student not enrolled in this term")
            
    
    def __str__(self):
        return f"{super().__str__()} - {self.teacher} - {self.code}"


class Enrollment(models.Model):
    ENROLLMENT_STATUS = ['Enrolled', 'Waitlisted']
    term = models.ForeignKey('Term', on_delete=models.CASCADE)
    studet = models.ForeignKey('Student', on_delete=models.CASCADE)
    date_enrolled = models.DateField(auto_now_add=True)
    grade = models.FloatField(null=True, blank=True)
    status = models.CharField(choices=ENROLLMENT_STATUS)
    
    def get_grade(self):
        if self.grade:
            return self.grade
        else:
            return "Pending"
    
    
    def change_status(self, new_status):
        pass
    
    def add_grade(self, grade, teacher):
        if not teacher.can_grade(self.term):
            raise Exception("Only term teacher can add grades")
        self.grade = grade
        self.save()
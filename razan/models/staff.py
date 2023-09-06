from django.db import models

class Staff(models.Model):
    Univercity_ROLE = ['STUDENT', 'TEACHER', 'PRINCIPLE']
    id = models.AutoField(primary_key=True)
    first_name = models.CharField(max_length=50)
    last_name = models.CharFiled(max_length=50)
    date_of_birth = models.DateField()
    role = models.CharField(max_length=50, choices=Univercity_ROLE)
    phone_number = models.CharField(max_length=15)
    profile = models.ImageField(upload_to='profiles/', blank=True)
    
    class Meta:
        abstract = True
    
    @property
    def full_name(self):
        """Returns the person's full name."""
        return f"{self.first_name} {self.last_name}"
    
    @property
    def staff_number(self):
        
        """
        Returns staff number
            if it's student adds 14010510 before it's id
            else if it's teacher adds 14010520 before it's id
            else if it's principle adds 14010530 before it's id
        """
        """
        if self.role == 'STUDENT':
            return int(f'14010510{self.id}')
        
        elif self.role == 'TEACHER':
            return int(f'14010520{self.id}')
        
        else:
            return int(f'14010530{self.id}')
        """
        
        match self.role:
            case "STUDENT":
                return f"14010510{self.id}"
            case "TEACHER":
                return f"14010520{self.id}"
            case "PRINCIPLE":
                return f"14010530{self.id}"
        
    
    def __str__(self):
        return f'name: {self.full_name},\nrole: {self.role}, \nstaff_number: {self.staff_number} '
    
    
    
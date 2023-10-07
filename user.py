class User:
    def __init__(self, fname, lname, phone, age, bloodtype, email) -> None:
        self.firstname = fname
        self.lastname= lname
        self.phone = phone
        self.age = age
        self.bloodtype = bloodtype
        self.email = email 

    def user_profile_message(self):
        Profile_text = F"PROFILE\nName: {self.firstname}\nAGE: {self.age}\nBlood Type: {self.bloodtype}\nSurname: {self.lastname}\nContact No: {self.phone}\n"
        return Profile_text

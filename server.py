import smtplib
from flask import Flask, jsonify, request
from datetime import datetime
from dotenv import load_dotenv, dotenv_values
import os
from news import get_news
from database import get_all_emails, update_profile_request, check_success_status, get_user_by_email
from user import User
import time


load_dotenv()
HOSPITAL_EMAIL_ID = os.getenv("HOSPITAL_EMAIL_ID")
YOUR_EMAIL = os.getenv("MY_EMAIL")
YOUR_EMAIL_PASSWORD = os.getenv("MY_EMAIL_KEY")

TIME_PERIOD_FOR_CHECKING = 5

# app = Flask(__name__)
my_email = YOUR_EMAIL
password = YOUR_EMAIL_PASSWORD
def send_email(to_address, message):
    with smtplib.SMTP(host="smtp.gmail.com", port=587) as connection:
        connection.starttls()
        connection.login(user=my_email, password=password)
        connection.sendmail(
                from_addr=my_email,
                to_addrs=to_address,
                msg=f"To: {to_address}\nSubject:Social Awarenes Update\n\nHey, Checkout the News and events regarding Social awareness.\n{message}",
            )

def send_email_news():
    try:
        message = get_news()
        user_email = get_all_emails()
        send_email(user_email, message)
        
        response = {
            "success": True,
            "message": "Email sent successfully"
        }
    except Exception as e:
        response = {
            "success": False,
            "message": str(e)
        }
    return jsonify(response)

def send_mail_to_hospital():
    for email in get_all_emails():
        if check_success_status(email) is True:
            user = get_user_by_email(email)
            user_profile = User(fname=user["firstName"], lname=user["lastName"],phone=user["phone"], age=user["age"], bloodtype=user["bloodType"], email=user["email"])
            send_email(HOSPITAL_EMAIL_ID, user_profile.user_profile_message())
            update_profile_request(email, True)
    
send_email_news()
while True:
    time.sleep(TIME_PERIOD_FOR_CHECKING)
    send_mail_to_hospital()






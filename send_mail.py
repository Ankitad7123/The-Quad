import smtplib
from flask import Flask, jsonify, request
from datetime import datetime

app = Flask(__name__)


def send_email(to_address, message):
    my_email = "mahaleviraj1426@gmail.com"
    password = "xgkzpopqywyykhcg"
    with smtplib.SMTP("smtp.gmail.com", port=587) as connection:
        connection.starttls()
        connection.login(user=my_email, password=password)
        connection.sendmail(
            from_addr=my_email,
            to_addrs=to_address,
            msg=f"To:<{to_address}>\n{message}"
        )

@app.route()

@app.route("/send_email", methods=["POST"])
def send_mail_on_access():
    user_email = request.json["user_email"]
    message = request.json["message"]
    send_email(user_email, message=message)
    return jsonify({"message": "sent_succesfully"})

app.run()
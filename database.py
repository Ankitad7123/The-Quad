
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
import sys
import pymongo
from dotenv import load_dotenv
import os 
from user import User

load_dotenv()
db_password = os.getenv("ANKIT_DB_PASSWORD")
uri = f"mongodb+srv://dubeyankit:{db_password}@cluster0.5foacf9.mongodb.net/?retryWrites=true&w=majority"
# uri = "mongodb+srv://mahaleviraj1018:9yJj8bbWmpCKSK9n@cluster0.yf99knf.mongodb.net/?retryWrites=true&w=majority"
# Create a new client and connect to the server
client = MongoClient(uri, server_api=ServerApi('1'))

# Send a ping to confirm a successful connection
try:
    client.admin.command('ping')
    print("Pinged your deployment. You successfully connected to MongoDB!")
except Exception as e:
    print(e)

db = client.test

my_collection = db["stemcelldonors"]
result = my_collection.find()
def get_all_emails():
    users_email_list = []
    for user in result:
        email = user["email"]
        print(email)
        users_email_list.append(email)
    return users_email_list


def update_profile_request(email, success):
    my_query = { "email": email}
    new_values = { "$set": {"success": success}}
    my_collection.update_one(my_query, new_values)


def check_new_stemcell_registration():
    pass

def check_success_status(email):
    my_query = { "email": email}
    try:
        my_collection.find_one(my_query)['success']
    except KeyError:
        my_collection.update_one(my_query, {"$set": {"success": False}})
    if my_collection.find_one(my_query)['success'] is True:
        return False
    return True

def get_user_by_email(email):
    user = my_collection.find_one({"email": email})
    return user

# def all_user_profile():
#     result = my_collection.find()
#     user_list_json = []
    
#     for user in result:
#         user_profile = User(fname=user["firstName"], lname=user["lastName"],phone=user["phone"], age=user["age"], bloodtype=user["bloodType"], email=user["email"])
#         user_list_json.append(user_profile)
#         print(user_profile.user_profile_message())
#     return user_list_json

my_query = { "email": "ankit11kahil@gmail.com"}
new_values = { "$set": {"email": "ankit11akhil@gmail.com"}}
my_collection.update_one(my_query, new_values)

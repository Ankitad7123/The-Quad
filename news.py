import requests
API_URL = "https://newsapi.org/v2/everything/"
user_keyword = "social+awarness+change"
query = f"{user_keyword}"
import datetime as dt
import os 
from dotenv import load_dotenv, dotenv_values

load_dotenv()

NEWS_API_KEY = os.getenv("NEWS_API_KEY")
# print(NEWS_API_KEY)
def get_news():
    news_response=requests.get(f"https://newsapi.org/v2/everything?q=social+change+awareness&from=2023-10-05&sortBy=popularity&apiKey={NEWS_API_KEY}")
    data=news_response.json()
    articles=data["articles"]
    article_list=[f"Headline:{article['title']}.\nBrief:{article['description']}" for article in articles][0]
    count = 0
    message = article_list
    return str(message)
# print(get_news())


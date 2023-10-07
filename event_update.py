from flask import Flask,request,render_template
app=Flask(__name__)
import smtplib
from langchain.prompts import PromptTemplate
from langchain.llms import OpenAI
from langchain.chains import LLMChain
import os
import re
os.environ['OPENAI_API_KEY']="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"

llm_resto=OpenAI(temperature=0.6)
prompt_template_resto=PromptTemplate(
    input_variables=['country','category','date'],
     template="upcoming events or webinars details\n"
             "I want you to recommend upcoming social awareness events details with venue and timings based on future dates using the following data and convert it into a json list:with keys event, venue, date,time\n"
             "Date:{date}\n"
             "User country:{country}\n"
             "User category :{category}."
)
chain_resto=LLMChain(llm=llm_resto,prompt=prompt_template_resto)
input_data={
    'date':'October 2023 to Decenmber 2023',
    'country':'India',
    'category':'Social awareness'
}
results=chain_resto.run(input_data)
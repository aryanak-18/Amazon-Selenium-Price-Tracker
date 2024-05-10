from selenium import webdriver  # pip install selenium
from selenium.webdriver.chrome.options import Options
from notifypy import Notify
from bs4 import BeautifulSoup
from datetime import datetime
from pymongo import MongoClient
import os

client = MongoClient("mongodb+srv://aryan:aryan@cluster0.3kemdsv.mongodb.net/")
db = client["amazon"]
collection = db["prices"]


def notify():
    notification = Notify()
    notification.title = 'Extracting Data'
    notification.message = "Extracting Data from Amazon"
    notification.send()


def getData():
    options = Options()
    # options.add_argument()

    userAgent = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36"
    with open("products.txt") as f:
        products = f.readlines()

    driver = webdriver.Chrome(options=options)

    i = 0
    for product in products:
        driver.get(f"https://www.amazon.in/dp/{product}")
        pageSource = driver.page_source
        with open(f"data/{product.strip()}.html", "w", encoding="utf-8") as f:
            f.write(pageSource)


def extractData():
    files = os.listdir('data')
    for file in files:
        print(file)
        with open(f"data/{file}", encoding="utf-8") as f:
            content = f.read()

        soup = BeautifulSoup(content, 'html.parser')
        title = soup.title.getText().split(":")[0]
        time = datetime.now()

        # print(soup.title)
        price = soup.find(class_="a-price-whole")
        priceInt = price.getText().replace(".", "").replace(",", "")
        table = soup.find(id="productDetails_detailBullets_sections1")
        asin = table.find(class_="prodDetAttrValue").getText().strip()
        print(priceInt, asin, title, time)
        # with open("finaldata.txt", "a") as f:
        #     f.write(f"{priceInt}~~{asin}~~{title}~~{time}\n")
        collection.insert_one({"priceInt": priceInt, "asin": asin, "title": title, "time": time})


if __name__ == "__main__":
    notify()
    getData()
    extractData()

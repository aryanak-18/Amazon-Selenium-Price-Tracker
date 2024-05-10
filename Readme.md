# Amazon Selenium Price Tracker

## Overview
This project is an Amazon price tracker built using Next.js and Selenium in Python. It allows users to track the prices of their favorite products on Amazon.

## Features
- Track prices of products on Amazon.
- Save tracked products in a MongoDB Cloud database (Atlas).
- User-friendly interface built with Next.js.

## Prerequisites
- Node.js
- Python 3
- MongoDB Cloud database (Atlas) account

## Installation
1. Clone the repository:
    ```
    git clone https://github.com/your-username/amazon-price-tracker.git
    ```
2. Navigate to the project directory:
    ```
    cd project
    cd amazon-selenium-price-tracker
    ```
3. Install dependencies:
    ```
    npm install
    ```
4. Set up an envFile.py for Python containing the following code:
    ```
    mongoLink="{linkToYourCloudDatabase}"
    ```

## Configuration
1. Create a `.env` file in the 'amazon-selenium-price-tracker' directory and set the following environment variables:
    ```
    mongoLink=<your MongoDB Atlas URI>
    ```

## Usage
1. Start the Next.js server:
    ```
    npm run dev
    ```
2. Run the Python script to track prices:
    ```
    python main.py
    ```

## Acknowledgements
- [Next.js](https://nextjs.org/)
- [Selenium](https://www.selenium.dev/)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)

---
🛒 TechStore – E-Commerce Web Application (DevOps CI Project)

TechStore is a responsive e-commerce website built using HTML, CSS, and JavaScript, designed to simulate a real online shopping experience.
This project demonstrates how a frontend web application can be integrated into a modern DevOps Continuous Integration (CI) pipeline using Docker, GitHub Actions, and AWS.

🌐 Live Demo

Website:
http://75.101.171.173

📌 Features

Product listing interface

Shopping cart system

Modal-based checkout UI

Responsive design

Cloud-hosted on AWS EC2

Containerized using Docker

Automated build and testing using GitHub Actions

🏗️ Tech Stack

Frontend - HTML, CSS, JavaScript
Version Control -	Git, GitHub
CI Pipeline -	GitHub Actions
Containerization -	Docker
Cloud Platform	- AWS EC2
Image Registry	- Docker Hub

📂 Project Structure
techStore/
 ├── index.html
 ├── style.css
 ├── script.js
 ├── Dockerfile
 └── .github/workflows/main.yml

🐳 Dockerization

The website is packaged into a Docker container using the following Dockerfile:

FROM nginx:alpine
COPY . /usr/share/nginx/html


This ensures the website runs consistently across all environments.

🔄 Continuous Integration (CI)

This project uses GitHub Actions for Continuous Integration.

Every time code is pushed to the main branch, GitHub automatically:

Pulls the latest code

Validates the HTML

Builds a Docker image

Runs the container for basic testing

Pushes the Docker image to Docker Hub

This prevents broken code from reaching production.

☁️ Cloud Deployment - manually

The Docker image is deployed on an AWS EC2 Linux server.

The container is run using:

docker run -d -p 80:80 yogeshrajendran/techstore


This makes the website accessible publicly over the internet.

🧪 How to Run Locally

Clone the repository:

git clone https://github.com/yourusername/techstore.git
cd techstore


Build the Docker image:

docker build -t techstore .


Run the container:

docker run -d -p 8080:80 techstore


Open in browser:

http://localhost:8080


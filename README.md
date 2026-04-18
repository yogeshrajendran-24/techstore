# 🚀 TechStore – DevOps Project

A simple e-commerce static website deployed using a complete DevOps pipeline with CI/CD, containerization, and AWS infrastructure.

---

## 📌 Architecture Overview

User → Domain (Namecheap DNS) → AWS Application Load Balancer → EC2 Instance → Docker Container → Web App

---

## 🛠️ Tech Stack

- **Frontend:** HTML, CSS, JavaScript
- **CI/CD:** GitHub Actions
- **Containerization:** Docker
- **Infrastructure as Code:** Terraform
- **Cloud:** AWS (EC2, ALB, ACM)
- **DNS:** Namecheap

---

## ⚙️ Workflow

1. Code pushed to GitHub
2. GitHub Actions pipeline triggers:
   - Build Docker image
   - Push image to Docker Hub
3. Terraform provisions infrastructure:
   - EC2 instance
   - Security groups
   - Networking
4. EC2 pulls Docker image and runs container
5. Application exposed via:
   - AWS Load Balancer (HTTP/HTTPS)
   - SSL using AWS ACM
6. Domain mapped via DNS

---

## 📦 Project Structure

```
techstore/
│── .github/workflows/ 
│── terraform/ 
│── Dockerfile 
│── index.html 
│── style.css
│── script.js

```
---

## 🚀 Deployment Steps


# Build Docker image
docker build -t techstore .

# Push to Docker Hub
docker push your-dockerhub/techstore

# Terraform
- terraform init
- terraform apply

🔐 Features
- Automated CI/CD pipeline
- Dockerized application deployment
- Infrastructure provisioning using Terraform
- HTTPS enabled using AWS Certificate Manager
- Scalable architecture using Load Balancer

📌 Future Improvements
- Add Auto Scaling Group
- Add Monitoring (CloudWatch)
- Add Kubernetes (EKS)
- Add Backend API

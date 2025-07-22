# mongodbfullapp


# 🐳 Feedback App – Full-Stack Node.js + MongoDB on Kubernetes

This project is a simple full-stack feedback application built with:

- **Backend**: Node.js + Express
- **Frontend**: React + Nginx
- **Database**: MongoDB
- **Deployment**: Docker + Kubernetes

Users can submit and view feedback (name + message), stored in MongoDB and exposed via REST APIs.

---

## 🧱 Tech Stack

| Layer       | Tech                                |
|-------------|-------------------------------------|
| Frontend    | React (served with Nginx)           |
| Backend     | Node.js + Express                   |
| Database    | MongoDB (inside Kubernetes)         |
| Container   | Docker                              |
| Orchestration | Kubernetes                        |

---

## 📁 Folder Structure

```bash
feedback-app/
│
├── backend/                # Node.js REST API
│   ├── server.js
│   ├── package.json
│   ├── .env
│   └── Dockerfile
│
├── frontend/               # React frontend
│   ├── src/
│   ├── Dockerfile
│   └── .dockerignore
│
├── k8s-manifests/          # Kubernetes YAMLs
│   ├── mongo-deployment.yaml
│   ├── backend-deployment.yaml
│   └── frontend-deployment.yaml



🚀 Features
Submit feedback via REST API: POST /api/feedback

Retrieve all feedback: GET /api/feedback

Persistent MongoDB via PVC

Dockerized & Kubernetes-ready


🧪 Run Locally with Docker (Optional)

1. Start MongoDB:

    docker run -d --name mongo-db -p 27017:27017 mongo:6
    

2. Run backend:
    
    docker run --network host \
  --env MONGO_URI=mongodb://localhost:27017/feedback \
  christopherian2004/feedback-backend


3. Run frontend:

    docker run -p 3000:80 christopherian2004/feedback-frontend



☸️ Deploy to Kubernetes

1. Apply manifests

    kubectl apply -f k8s-manifests/

2. Check status

    kubectl get pods
    kubectl get svc

3. Access the frontend
    If using Minikube:

    minikube service frontend-service

    Or visit:

    http://<your-node-ip>:30080
    


🔧 Backend Environment Variables

Variable	Description

MONGO_URI	MongoDB connection URI
PORT	    Backend port (default: 5001)


📦 Docker Images

Component	Docker Hub Image

Backend 	christopherian2004/feedback-backend:latest
Frontend	christopherian2004/feedback-frontend:latest



🧠 Skills Demonstrated
Containerizing Node.js + MongoDB apps

Building React apps for production

Deploying full stack in Kubernetes

Service discovery via K8s networking

Using PersistentVolumes for stateful apps



👨‍💻 Author
Chris Ian
DevOps | Software Engineer | IR Student
Docker Hub: christopherian2004


📜 License

MIT


---

### ✅ You can now:

- Save this as `README.md` in your project root.
- Push it to GitHub if you're using version control.
- Share it as a polished portfolio project!

Let me know if you’d like help creating a GitHub repo, adding CI/CD, or extending features like login/auth, pagination, or dashboards.
